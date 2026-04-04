import React, { useState, useEffect, createContext, useContext } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Onboard from './pages/Onboard';
import Wallet from './pages/Wallet';
import Insurer from './pages/Insurer';
import Plans from './pages/Plans';
import PlanCheckout from './pages/PlanCheckout';
import WatchDemo from './pages/WatchDemo';
import HowItWorks from './pages/HowItWorks';
import AIModels from './pages/AIModels';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const AuthContext = createContext<{ user: User | null, loading: boolean, setLoading: (loading: boolean) => void }>({ 
  user: null, 
  loading: true, 
  setLoading: () => {} 
});
export const useAuth = () => useContext(AuthContext);

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    
    // Intercept link clicks for SPA feel
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        window.history.pushState({}, '', anchor.href);
        setPath(window.location.pathname);
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    // Handle redirects for authenticated users on login page
    if (!loading && user && path === '/login') {
      const isAdmin = user.email === 'admin@gmail.com' || user.email === 'vennila498@gmail.com';
      const target = isAdmin ? '/admin' : '/dashboard';
      window.history.pushState({}, '', target);
      setPath(target);
    }
    // Handle redirects for unauthenticated users on protected pages
    const protectedPaths = ['/dashboard', '/onboard', '/wallet', '/profile', '/admin'];
    if (!loading && !user && protectedPaths.includes(path)) {
      window.history.pushState({}, '', '/login');
      setPath('/login');
    }
  }, [user, loading, path]);

  const renderContent = () => {
    if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>;

    // Public routes
    if (path === '/insurer') return <Insurer />;
    if (path === '/plans') return <Plans />;
    if (path === '/demo') return <WatchDemo />;
    if (path === '/how-it-works') return <HowItWorks />;
    if (path === '/ai-models') return <AIModels />;
    if (path.startsWith('/plans/')) {
      const planId = path.split('/')[2];
      return <PlanCheckout planId={planId} />;
    }

    // Auth required routes
    if (path === '/login') return <Login />;
    if (path === '/dashboard') return <Dashboard />;
    if (path === '/onboard') return <Onboard />;
    if (path === '/wallet') return <Wallet />;
    if (path === '/profile') return <Profile />;
    if (path === '/admin') return <Admin />;
    
    // Default to Landing
    if (path === '/') return <Landing />;
    
    return <Landing />;
  };

  return (
    <AuthContext.Provider value={{ user, loading, setLoading }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          {renderContent()}
        </div>
      </div>
    </AuthContext.Provider>
  );
}
