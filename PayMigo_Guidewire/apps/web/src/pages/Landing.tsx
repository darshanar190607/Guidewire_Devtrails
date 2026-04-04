import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, Wallet, AlertCircle, Play, Sparkles, Zap, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-glow z-0 opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[11px] font-bold mb-6 uppercase tracking-[0.3em] backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5" /> AI-Powered Parametric Insurance
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6 tracking-tight text-text-primary"
              >
                When the sky <span className="gradient-text">shuts you down</span>, <br />
                Paymigo pays you <span className="italic font-serif font-light">instantly.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed font-medium"
              >
                The world's first income protection platform for 5 million Zomato & Swiggy partners. 
                No forms, no waiting. Just automatic payouts when you need them most.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <a 
                  href="/onboard" 
                  className="px-8 py-4 bg-accent text-white rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:glow-accent transition-all group shadow-2xl shadow-accent/30 gradient-bg"
                >
                  Protect My Income <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/demo" 
                  className="px-8 py-4 bg-white border border-border rounded-2xl font-bold text-base hover:bg-surface transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-accent text-accent" /> Watch Demo
                </a>
              </motion.div>
            </div>

            {/* Right Side: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-accent-secondary opacity-10 blur-3xl rounded-full animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Delivery Partner" 
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-card p-3 border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Recent Payout</div>
                      <div className="text-sm font-bold">₹1,250 credited to Rahul S.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Problem Section - Brutalist Style */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight">
                Rain shouldn't mean <br />
                <span className="gradient-text">Zero Earnings.</span>
              </h2>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed">
                A single monsoon week can wipe out 40% of a delivery partner's monthly income. 
                Traditional insurance is too slow. Paymigo is parametric—meaning we pay based on 
                real-time weather data, not damage claims.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Real-time Weather Monitoring", desc: "Hyper-local data from 1,200+ micro-zones." },
                  { title: "Zero Paperwork", desc: "No claim forms. No phone calls. No waiting." },
                  { title: "Instant Wallet Credit", desc: "Money hits your Paymigo wallet in 90 seconds." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-accent-secondary opacity-20 blur-3xl rounded-full" />
              <div className="relative glass-card p-8 border-accent/20 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-2xl font-display font-black">WEEKLY LOSS TRACKER</div>
                  <div className="px-3 py-1 bg-danger/10 text-danger text-[10px] font-black rounded-full uppercase">Alert: Heavy Rain</div>
                </div>
                <div className="space-y-4">
                  {[
                    { day: 'Mon', loss: 0, status: 'Clear' },
                    { day: 'Tue', loss: 450, status: 'Rain' },
                    { day: 'Wed', loss: 800, status: 'Storm' },
                    { day: 'Thu', loss: 600, status: 'Rain' },
                    { day: 'Fri', loss: 0, status: 'Clear' },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border/50">
                      <span className="font-bold w-10">{d.day}</span>
                      <div className="flex-grow mx-4 h-2 bg-surface rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(d.loss / 800) * 100}%` }}
                          className="h-full gradient-bg"
                        />
                      </div>
                      <span className={cn("font-mono font-bold", d.loss > 0 ? "text-danger" : "text-success")}>
                        {d.loss > 0 ? `-₹${d.loss}` : '✓'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-accent rounded-2xl text-white text-center">
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Total Loss Avoided</div>
                  <div className="text-4xl font-display font-black">₹1,850</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Engineered for the <span className="gradient-text">Gig Economy</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">We've rebuilt insurance from the ground up to be as fast as your deliveries.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 feature-grid">
            {[
              { icon: ShieldCheck, title: "Parametric Trust", desc: "Payouts are triggered by objective data (Rainfall > 5mm/hr), not subjective claims." },
              { icon: Zap, title: "90s Payouts", desc: "Our smart contracts execute automatically. No human intervention needed for standard events." },
              { icon: Wallet, title: "Micro-Premiums", desc: "Starting at just ₹69/week. Pay as you earn, with flexible top-ups and pauses." },
              { icon: TrendingUp, title: "AI Risk Engine", desc: "Proprietary models predict zone-specific disruptions with 94% accuracy." },
              { icon: Users, title: "Community Pool", desc: "A portion of every premium goes into a loyalty pool shared by top-rated partners." },
              { icon: AlertCircle, title: "24/7 Support", desc: "Multilingual support via WhatsApp and voice bot to help you navigate any issue." }
            ].map((feature, i) => (
              <div key={i} className="feature-card glass-card p-10 hover:border-accent/50 transition-all duration-500 group">
                <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-text-primary text-white stats-section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-16 text-center">
            {[
              { val: "5M+", label: "Target Partners" },
              { val: "₹12Cr+", label: "Claims Capacity" },
              { val: "99.9%", label: "AI Accuracy" },
              { val: "1.2k", label: "Micro-Zones" }
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="text-6xl md:text-7xl font-display font-black mb-4 gradient-text">{stat.val}</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-24 text-center relative overflow-hidden border-accent/30">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/10 blur-3xl rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
            Ready to <span className="gradient-text">Shield Your Income?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join thousands of delivery partners who no longer fear the monsoon. 
            Get your first week of GigKavach for just ₹1.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/onboard" className="px-12 py-5 bg-accent text-white rounded-2xl font-bold text-xl hover:glow-accent transition-all shadow-2xl shadow-accent/20 gradient-bg">
              Start Your Protection
            </a>
            <a href="/plans" className="px-12 py-5 bg-surface border border-border rounded-2xl font-bold text-xl hover:bg-white transition-all">
              View All Plans
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <span className="text-3xl font-display font-black tracking-tighter">Paymigo</span>
              </div>
              <p className="text-text-secondary max-w-sm mb-8">
                India's first AI-powered parametric income insurance platform for food delivery partners. 
                Protecting the backbone of the digital economy.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-text-secondary rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-text-secondary">
                <li><a href="/how-it-works" className="hover:text-accent transition-colors">How it Works</a></li>
                <li><a href="/plans" className="hover:text-accent transition-colors">Pricing Plans</a></li>
                <li><a href="/ai-models" className="hover:text-accent transition-colors">AI & ML Stack</a></li>
                <li><a href="/insurer" className="hover:text-accent transition-colors">For Insurers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-text-secondary">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-secondary text-sm">
              © 2026 Paymigo Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-success" /> System Status: Operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
