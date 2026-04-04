import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, Zap, Info, ArrowRight, ChevronRight, IndianRupee, Calculator, CloudRain } from 'lucide-react';
import { cn } from '@/lib/utils';

const Plans = () => {
  const [isMonsoon, setIsMonsoon] = React.useState(() => {
    const month = new Date().getMonth(); // 0-indexed (5 = June, 8 = September)
    return month >= 5 && month <= 8;
  });

  const plans = [
    { 
      id: "basic",
      name: "Basic", 
      price: isMonsoon ? 99 : 69, 
      payout: "800", 
      features: ["Rainfall > 25mm/hr", "AQI > 400", "4-hour payout speed", "Basic Loyalty Pool"] 
    },
    { 
      id: "pro",
      name: "Pro", 
      price: isMonsoon ? 149 : 119, 
      payout: "1,500", 
      recommended: true,
      features: ["Rainfall > 15mm/hr", "AQI > 300", "90-second payout speed", "Full Loyalty Pool", "Wellness Vault Access"] 
    },
    { 
      id: "premium",
      name: "Premium", 
      price: isMonsoon ? 219 : 179, 
      payout: "2,500", 
      features: ["Rainfall > 10mm/hr", "AQI > 200", "Instant payout speed", "Max Loyalty Pool", "Wellness Vault Pro"] 
    }
  ];

  if (isMonsoon) {
    plans.forEach(p => p.features.push("Stay-at-Home Benefit Active"));
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-50 z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
            Transparent & Automated
          </div>
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => setIsMonsoon(!isMonsoon)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-2xl font-bold uppercase transition-all border shadow-lg",
                isMonsoon ? "bg-accent text-background border-accent shadow-accent/20" : "bg-white/5 border-white/10 text-text-secondary"
              )}
            >
              <CloudRain className={cn("w-5 h-5", isMonsoon && "animate-pulse")} />
              {isMonsoon ? "Monsoon Season Active" : "Switch to Monsoon Mode"}
            </button>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tight">
            Choose Your <br />
            <span className="text-accent">Shield</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Parametric insurance that triggers automatically. No claims, no paperwork, just peace of mind.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        {/* Interactive Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-10 mb-24 max-w-4xl mx-auto border-accent/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Calculator className="w-6 h-6 text-accent" /> Dynamic Premium Estimator
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Select Your City</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                  <option className="bg-surface">Chennai (High Monsoon Risk)</option>
                  <option className="bg-surface">Mumbai (Flood Prone)</option>
                  <option className="bg-surface">Delhi (AQI Sensitive)</option>
                  <option className="bg-surface">Bangalore (Traffic Heavy)</option>
                  <option className="bg-surface">Hyderabad (Heatwave Risk)</option>
                  <option className="bg-surface">Kolkata (Cyclone Risk)</option>
                  <option className="bg-surface">Pune (Rainfall Sensitive)</option>
                  <option className="bg-surface">Ahmedabad (Extreme Heat)</option>
                  <option className="bg-surface">Kochi (Coastal Flooding)</option>
                  <option className="bg-surface">Guwahati (High Rainfall)</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Coverage Period</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                  <option className="bg-surface">Current Week (Monsoon Peak)</option>
                  <option className="bg-surface">Next 4 Weeks (Bundle & Save)</option>
                </select>
              </div>
            </div>
            <div className="bg-accent/5 rounded-3xl border border-accent/20 p-8 flex flex-col justify-center items-center text-center">
              <div className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-4">Estimated Weekly Premium</div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-6xl font-mono font-bold tracking-tighter text-accent">₹{isMonsoon ? 149 : 119}</span>
                <span className="text-text-secondary font-bold uppercase tracking-widest text-xs">/wk</span>
              </div>
              <button className="w-full py-4 bg-accent text-background rounded-2xl font-bold hover:glow-accent transition-all shadow-xl shadow-accent/20">
                Lock This Rate
              </button>
            </div>
          </div>
        </motion.div>

        {/* Monsoon Hike Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 bg-accent/5 border border-accent/20 rounded-3xl mb-32 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
              <CloudRain className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Monsoon Pricing Policy (June - Sept)</h3>
              <p className="text-sm text-text-secondary">Automatic adjustments for peak risk periods.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-text-secondary uppercase mb-2">Basic Plan</div>
              <div className="text-lg font-bold text-accent">+₹30 Hike</div>
              <p className="text-[10px] text-text-secondary mt-1">Covers essential monsoon disruptions.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-text-secondary uppercase mb-2">Pro Plan</div>
              <div className="text-lg font-bold text-accent">+₹30 Hike</div>
              <p className="text-[10px] text-text-secondary mt-1">Includes Stay-at-Home benefit.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-text-secondary uppercase mb-2">Premium Plan</div>
              <div className="text-lg font-bold text-accent">+₹40 Hike</div>
              <p className="text-[10px] text-text-secondary mt-1">Full coverage for extreme floods.</p>
            </div>
          </div>
          <p className="text-[10px] text-text-secondary mt-6 italic">
            * These hikes are automatically applied from June 1st to September 30th each year. During this period, all plans include the <b>Stay-at-Home Benefit</b>, which allows you to claim insurance even if you are restricted to stay home due to severe rain or wind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={cn(
                "glass-card p-10 flex flex-col relative transition-all duration-500",
                plan.recommended ? "border-accent/50 glow-accent scale-105 z-10 bg-surface/90" : "hover:border-white/20"
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-accent text-background text-[10px] font-black px-4 py-1.5 uppercase tracking-widest rounded-bl-2xl">Recommended</div>
              )}
              <h3 className="text-2xl font-display font-bold mb-3">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-mono font-bold tracking-tighter">₹{plan.price}</span>
                <span className="text-text-secondary text-sm font-bold uppercase tracking-widest">/wk</span>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-sm group/item">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-text-secondary group-hover/item:text-text-primary transition-colors">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`/plans/${plan.id}`}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all duration-300 text-center bg-accent text-white hover:scale-[1.02] shadow-lg shadow-accent/20"
                )}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary">Everything you need to know about Paymigo.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "Why weekly premiums?", a: "Gig work is unpredictable. Weekly plans allow you to pause or switch plans based on your schedule and weather forecasts." },
              { q: "What's a parametric trigger?", a: "Unlike traditional insurance, we pay based on data (like rainfall mm/hr) rather than manual damage assessment. If the data hits the limit, you get paid." },
              { q: "How does the Loyalty Pool work?", a: "A portion of your premium goes into a pool. Every week you don't claim, your potential bonus grows. It's our way of rewarding safe weeks." },
              { q: "Is this legal in India?", a: "Yes, we operate as a parametric micro-insurance platform under the sandbox regulations for innovative fintech products." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 border-white/5 hover:border-white/10 transition-all group">
                <h4 className="font-bold mb-4 flex items-center justify-between group-hover:text-accent transition-colors">
                  {faq.q} <ChevronRight className="w-4 h-4 opacity-50" />
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
