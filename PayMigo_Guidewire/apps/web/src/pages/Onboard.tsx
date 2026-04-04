import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  User, 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Smartphone,
  Zap,
  CloudRain,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '../App';
import { db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Onboard = () => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [isMonsoon, setIsMonsoon] = useState(() => {
    const month = new Date().getMonth(); // 0-indexed (5 = June, 8 = September)
    return month >= 5 && month <= 8;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiFactors, setAiFactors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zone: 'Chennai Zone 4',
    plan: 'Pro',
    premium: 149
  });

  useEffect(() => {
    const fetchAiPremium = async () => {
      try {
        const response = await fetch('/api/premium/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ age: 24, zone_risk: 0.8, job_type: 'food_delivery', experience_years: 2, incident_history: 1 })
        });
        const data = await response.json();
        setFormData(prev => ({ ...prev, premium: data.premium }));
        setAiFactors(data.factors);
      } catch (error) {
        console.error("AI premium calculation failed:", error);
      }
    };
    fetchAiPremium();
  }, [formData.zone]);

  useEffect(() => {
    if (user && !formData.name) {
      setFormData(prev => ({ ...prev, name: user.displayName || '' }));
    }
  }, [user]);

  const zoneWarnings: Record<string, string> = {
    'Chennai Zone 4': 'High rainfall risk in October. We recommend the Pro plan for maximum coverage.',
    'Chennai Zone 2': 'Moderate risk of urban flooding. Pro plan is advised for consistent protection.',
    'Bangalore East': 'Heavy wind risk during monsoon. Premium plan covers wind-related disruptions.',
    'Mumbai West': 'Extreme monsoon flooding risk. Pro or Premium plans are highly recommended.'
  };

  const plans = [
    { id: 'Basic', price: formData.premium - 50, label: 'Basic', recommended: false, description: 'Essential protection for light rain.' },
    { id: 'Pro', price: formData.premium, label: 'Pro', recommended: true, description: 'Best for full-time gig workers. Includes Stay-at-Home benefit.' },
    { id: 'Premium', price: formData.premium + 50, label: 'Premium', recommended: false, description: 'Maximum coverage for all weather extremes.' },
  ];

  const getPlanPrice = (planId: string) => {
    const p = plans.find(pl => pl.id === planId);
    return p ? p.price : formData.premium;
  };

  const nextStep = async () => {
    setError(null);
    if (step === 1) {
      if (!formData.name.trim() || !formData.phone.trim()) {
        setError("Please provide your name and phone number.");
        return;
      }
    }
    if (step === 4) {
      await saveUserData();
    } else {
      setStep(s => Math.min(s + 1, 5));
    }
  };

  const saveUserData = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      const workerRef = doc(db, 'workers', user.uid);
      const workerData = {
        name: formData.name,
        phone: formData.phone,
        city: formData.zone.split(' ')[0],
        zone: formData.zone,
        plan: formData.plan,
        isMonsoon,
        weeklyPremium: getPlanPrice(formData.plan),
        createdAt: serverTimestamp(),
        status: 'ACTIVE'
      };
      
      try {
        await setDoc(workerRef, workerData, { merge: true });
      } catch (error) {
        handleFirestoreError(error, 'write' as any, `workers/${user.uid}`);
      }

      // Create initial wallet
      const walletRef = doc(db, 'wallets', user.uid);
      const walletData = {
        workerId: user.uid,
        availableBalance: 0,
        loyaltyPoolBalance: 0,
        premiumReserve: 0,
        totalEarned: 0,
        totalWithdrawn: 0
      };

      try {
        await setDoc(walletRef, walletData, { merge: true });
      } catch (error) {
        handleFirestoreError(error, 'write' as any, `wallets/${user.uid}`);
      }

      setStep(5);
    } catch (error: any) {
      console.error("Onboarding error:", error);
      setError(error?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleFirestoreError = (error: any, operation: string, path: string) => {
    const errInfo = {
      error: error?.message || String(error),
      operation,
      path,
      authInfo: {
        userId: user?.uid,
        email: user?.email,
      }
    };
    console.error('Firestore Error:', JSON.stringify(errInfo));
    throw error;
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold">Who are you?</h2>
              <p className="text-text-secondary">We need your basic details to start your protection.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ravi Kumar"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-accent outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Phone Number (UPI Linked)</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input 
                    type="tel" 
                    placeholder="98765 43210"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:border-accent outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold">Where do you work?</h2>
              <p className="text-text-secondary">Rainfall risk varies by zone. We use this to trigger your payouts.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['Chennai Zone 4', 'Chennai Zone 2', 'Bangalore East', 'Mumbai West'].map((z) => (
                <button
                  key={z}
                  onClick={() => setFormData({...formData, zone: z})}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border transition-all",
                    formData.zone === z ? "bg-accent/10 border-accent text-accent" : "bg-white/5 border-white/10 text-text-secondary hover:bg-white/10"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-bold">{z}</span>
                  </div>
                  {formData.zone === z && <CheckCircle2 className="w-5 h-5" />}
                </button>
              ))}
            </div>
            <div className="p-4 bg-warning/10 border border-warning/20 rounded-xl flex gap-3">
              <AlertTriangle className="text-warning w-5 h-5 shrink-0" />
              <p className="text-xs text-warning/80">{zoneWarnings[formData.zone] || 'Monitoring active in this zone.'}</p>
            </div>
            {aiFactors.length > 0 && (
              <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> AI Risk Analysis
                </div>
                <ul className="space-y-1">
                  {aiFactors.map((f, i) => (
                    <li key={i} className="text-[10px] text-text-secondary flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-display font-bold">Choose your shield</h2>
                <button 
                  onClick={() => setIsMonsoon(!isMonsoon)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all border",
                    isMonsoon ? "bg-accent/20 border-accent text-accent" : "bg-white/5 border-white/10 text-text-secondary"
                  )}
                >
                  <CloudRain className={cn("w-3 h-3", isMonsoon && "animate-pulse")} />
                  Monsoon Mode {isMonsoon ? "ON" : "OFF"}
                </button>
              </div>
              <p className="text-text-secondary">Select a plan that fits your weekly earnings goal.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {plans.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setFormData({...formData, plan: p.id})}
                  className={cn(
                    "relative flex flex-col p-6 rounded-2xl border transition-all text-left",
                    formData.plan === p.id ? "bg-accent/10 border-accent" : "bg-white/5 border-white/10 hover:bg-white/10"
                  )}
                >
                  {p.recommended && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-accent text-background text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Recommended
                    </div>
                  )}
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-1">{p.label}</div>
                      <div className="text-2xl font-display font-bold">{p.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-bold">₹{p.price}</div>
                      <div className="text-[10px] text-text-secondary uppercase">per week</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-text-secondary mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    <div className="flex items-center gap-1"><Zap className="w-3 h-3 text-accent" /> 90s Payout</div>
                    <div className="flex items-center gap-1"><CloudRain className="w-3 h-3 text-accent" /> 15mm Trigger</div>
                    {isMonsoon && (
                      <div className="flex items-center gap-1 text-success"><CheckCircle2 className="w-3 h-3" /> Stay-at-Home Benefit</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            {isMonsoon && (
              <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl">
                <p className="text-[10px] text-accent/80 leading-relaxed italic">
                  * During monsoon (June-Sept), premiums are adjusted (Basic +₹30, Pro +₹30, Premium +₹40). This activates the <b>Stay-at-Home</b> benefit, allowing you to claim insurance even if you are restricted to stay home due to severe rain or wind.
                </p>
              </div>
            )}
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold">Final Step</h2>
              <p className="text-text-secondary">Complete your first weekly premium to activate protection.</p>
            </div>
            <div className="glass-card p-8 space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <div>
                  <div className="text-sm font-bold">{formData.plan} Weekly Premium</div>
                  <div className="text-xs text-text-secondary">{formData.zone}</div>
                </div>
                <div className="text-xl font-mono font-bold">₹{getPlanPrice(formData.plan)}</div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-text-secondary">Test Payment Method</div>
                <button 
                  onClick={nextStep}
                  disabled={isSaving}
                  className="w-full py-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                >
                  <CreditCard className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  Simulate Test Payment
                </button>
                <p className="text-[10px] text-text-secondary text-center italic">
                  This is a sandbox environment. No real money will be charged.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-success/10 border border-success/20 rounded-xl">
                <Shield className="text-success w-5 h-5 shrink-0" />
                <p className="text-[10px] text-success/80">Secure test environment active. {isMonsoon ? "Monsoon Stay-at-Home benefit active." : "Protection starts instantly after simulation."}</p>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-10"
          >
            <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-success w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold">You're Protected!</h2>
              <p className="text-text-secondary">Welcome to the Paymigo family, {formData.name.split(' ')[0]}.</p>
            </div>
            <div className="glass-card p-6 max-w-sm mx-auto">
              <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-4">Policy Details</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Policy ID:</span> <span className="font-mono font-bold">PK-9928-X</span></div>
                <div className="flex justify-between"><span>Zone:</span> <span className="font-bold">{formData.zone}</span></div>
                <div className="flex justify-between"><span>Status:</span> <span className="text-success font-bold">Active</span></div>
              </div>
            </div>
            <button 
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-background rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20"
            >
              Go to Dashboard <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(step / 5) * 100}%` }}
          className="h-full bg-accent"
        />
      </div>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-xl text-danger text-xs font-bold flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                {error}
              </motion.div>
            )}
            {renderStep()}
          </AnimatePresence>

          {step < 5 && (
            <div className="mt-12 flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={cn(
                  "flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all",
                  step === 1 ? "opacity-0 pointer-events-none" : "text-text-secondary hover:text-text-primary"
                )}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={nextStep}
                disabled={isSaving}
                className="flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {step === 4 ? "Pay ₹" + getPlanPrice(formData.plan) : "Continue"} <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Onboard;
