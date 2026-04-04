import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, LogIn, User, Lock, Mail, UserPlus } from 'lucide-react';
import { signInWithGoogle, signInWithEmailAndPassword, createUserWithEmailAndPassword, auth, db } from '../firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../App';
import { cn } from '@/lib/utils';

const Login = () => {
  const { user, loading: authLoading, setLoading } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<'worker' | 'admin'>('worker');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!authLoading && user) {
      if (window.location.pathname === '/login') {
        const target = user.email === 'admin@gmail.com' || user.email === 'vennila498@gmail.com' ? '/admin' : '/dashboard';
        window.history.pushState({}, '', target);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  }, [user, authLoading]);

  const handleGoogleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    setError(null);
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      if (result.user) {
        // Create/Update user document
        const userRef = doc(db, 'users', result.user.uid);
        let userDoc;
        try {
          userDoc = await getDoc(userRef);
        } catch (err) {
          handleFirestoreError(err, 'get', `users/${result.user.uid}`);
          return;
        }
        
        if (!userDoc.exists()) {
          const isAdmin = result.user.email === 'admin@gmail.com' || result.user.email === 'vennila498@gmail.com';
          try {
            await setDoc(userRef, {
              uid: result.user.uid,
              email: result.user.email,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
              role: isAdmin ? 'admin' : 'client',
              createdAt: serverTimestamp(),
              lastLogin: serverTimestamp()
            });
          } catch (err) {
            handleFirestoreError(err, 'write', `users/${result.user.uid}`);
            return;
          }
        } else {
          try {
            await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
          } catch (err) {
            handleFirestoreError(err, 'write', `users/${result.user.uid}`);
            return;
          }
        }

        const target = result.user.email === 'admin@gmail.com' || result.user.email === 'vennila498@gmail.com' ? '/admin' : '/onboard';
        window.history.pushState({}, '', target);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setIsLoggingIn(false);
      setLoading(false);
      handleAuthError(err);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggingIn || !email || !password) return;
    setIsLoggingIn(true);
    setError(null);
    setLoading(true);

    try {
      let result;
      if (mode === 'signup') {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
      }

      if (result.user) {
        // Create/Update user document
        const userRef = doc(db, 'users', result.user.uid);
        let userDoc;
        try {
          userDoc = await getDoc(userRef);
        } catch (err) {
          handleFirestoreError(err, 'get', `users/${result.user.uid}`);
          return;
        }
        
        if (!userDoc.exists()) {
          const isAdmin = result.user.email === 'admin@gmail.com' || result.user.email === 'vennila498@gmail.com';
          try {
            await setDoc(userRef, {
              uid: result.user.uid,
              email: result.user.email,
              displayName: result.user.displayName || email.split('@')[0],
              role: isAdmin ? 'admin' : 'client',
              createdAt: serverTimestamp(),
              lastLogin: serverTimestamp()
            });
          } catch (err) {
            handleFirestoreError(err, 'write', `users/${result.user.uid}`);
            return;
          }
        } else {
          try {
            await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
          } catch (err) {
            handleFirestoreError(err, 'write', `users/${result.user.uid}`);
            return;
          }
        }

        const target = result.user.email === 'admin@gmail.com' || result.user.email === 'vennila498@gmail.com' ? '/admin' : '/onboard';
        window.history.pushState({}, '', target);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } catch (err: any) {
      console.error("Email auth failed:", err);
      setIsLoggingIn(false);
      setLoading(false);
      handleAuthError(err);
    }
  };

  const handleFirestoreError = (error: any, operation: string, path: string) => {
    const errInfo = {
      error: error?.message || String(error),
      operation,
      path,
      authInfo: {
        userId: auth.currentUser?.uid,
        email: auth.currentUser?.email,
      }
    };
    console.error('Firestore Error:', JSON.stringify(errInfo));
    setError(`Firestore Error: ${error?.message || String(error)}`);
    setIsLoggingIn(false);
    setLoading(false);
  };

  const handleAuthError = (err: any) => {
    if (err.code === 'auth/popup-closed-by-user') {
      setError("The sign-in window was closed before completion.");
    } else if (err.code === 'auth/cancelled-by-user') {
      setError("Sign-in was cancelled.");
    } else if (err.code === 'auth/popup-blocked') {
      setError("The sign-in popup was blocked by your browser.");
    } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
      setError("Invalid email or password.");
    } else if (err.code === 'auth/email-already-in-use') {
      setError("This email is already registered.");
    } else if (err.code === 'auth/weak-password') {
      setError("Password should be at least 6 characters.");
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  if (authLoading || (user && !authLoading)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 hero-glow opacity-30 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 glass-card p-8 md:p-12 max-w-lg w-full border-accent/20"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-accent/20 gradient-bg">
            <Shield className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-display font-black mb-2 tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-text-secondary text-sm font-medium">
            {role === 'worker' ? 'Gig Worker Portal' : 'Administrator Portal'}
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1 bg-surface rounded-2xl mb-8">
          <button 
            onClick={() => setRole('worker')}
            className={cn(
              "flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
              role === 'worker' ? "bg-white text-accent shadow-sm" : "text-text-secondary hover:text-text-primary"
            )}
          >
            <User className="w-4 h-4" />
            Worker
          </button>
          <button 
            onClick={() => setRole('admin')}
            className={cn(
              "flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
              role === 'admin' ? "bg-white text-accent shadow-sm" : "text-text-secondary hover:text-text-primary"
            )}
          >
            <Shield className="w-4 h-4" />
            Admin
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-xl text-danger text-xs font-bold"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleEmailAuth} className="space-y-4 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-2xl outline-none focus:border-accent transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-2xl outline-none focus:border-accent transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-4 bg-accent text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent/20 gradient-bg disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {mode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                  </>
                )}
              </button>
            </form>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
                <span className="px-4 bg-white text-text-secondary">Or continue with</span>
              </div>
            </div>

            <button 
              onClick={handleGoogleLogin}
              disabled={isLoggingIn}
              className="w-full py-4 bg-white border border-border rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-surface transition-all shadow-sm disabled:opacity-50"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google Account
            </button>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs font-bold text-text-secondary hover:text-accent transition-colors"
              >
                {mode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="text-[10px] text-text-secondary font-black uppercase tracking-widest">
            India's first parametric gig insurance
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
