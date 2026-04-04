import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import axios from 'axios';
import { 
  LayoutDashboard, 
  Wallet, 
  Shield, 
  History, 
  Settings, 
  Bell, 
  CloudRain, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft,
  ChevronRight,
  AlertTriangle,
  Zap,
  CheckCircle2,
  FileText,
  PlusCircle,
  IndianRupee
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { cn, formatCurrency } from '@/lib/utils';
import { useAuth } from '../App';
import { db } from '../firebase';
import { doc, getDoc, onSnapshot, collection, addDoc, Timestamp, query, where, orderBy, updateDoc } from 'firebase/firestore';

const mockRiskData = [
  { day: '1', rain: 2 }, { day: '5', rain: 5 }, { day: '10', rain: 15 },
  { day: '15', rain: 45 }, { day: '20', rain: 10 }, { day: '25', rain: 5 },
  { day: '30', rain: 8 }
];

const ClaimsTab = ({ user, workerData }: { user: any, workerData: any }) => {
  const [claims, setClaims] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newClaim, setNewClaim] = useState({
    type: 'Income Protection',
    description: '',
    statement: '',
    amount: ''
  });

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'claims'), where('workerId', '==', user.uid), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setClaims(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClaim.description || !newClaim.statement || !newClaim.amount) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'claims'), {
        workerId: user.uid,
        workerName: workerData?.name || user.displayName || 'Worker',
        workerCity: workerData?.city || '',
        workerZone: workerData?.zone || '',
        ...newClaim,
        amount: parseFloat(newClaim.amount),
        status: 'PENDING',
        createdAt: Timestamp.now()
      });
      setNewClaim({ type: 'Income Protection', description: '', statement: '', amount: '' });
      alert("Claim submitted successfully! Our admin will review it shortly.");
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Failed to submit claim. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-card p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-accent" /> New Claim
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Claim Type</label>
                <select 
                  value={newClaim.type}
                  onChange={(e) => setNewClaim({...newClaim, type: e.target.value})}
                  className="w-full"
                >
                  <option>Income Protection</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Claim Amount (₹)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 1500"
                  value={newClaim.amount}
                  onChange={(e) => setNewClaim({...newClaim, amount: e.target.value})}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Description</label>
                <textarea 
                  placeholder="What happened?"
                  value={newClaim.description}
                  onChange={(e) => setNewClaim({...newClaim, description: e.target.value})}
                  className="w-full h-24 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase tracking-widest">Legible Statement</label>
                <textarea 
                  placeholder="Provide a clear, detailed statement for verification..."
                  value={newClaim.statement}
                  onChange={(e) => setNewClaim({...newClaim, statement: e.target.value})}
                  className="w-full h-32 text-sm border-accent/30 focus:border-accent"
                />
                <p className="text-[10px] text-text-secondary italic">This statement is critical for admin verification.</p>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:glow-accent transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Claim"}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold mb-4">Your Claims History</h3>
          {claims.length === 0 ? (
            <div className="glass-card p-20 text-center">
              <FileText className="w-12 h-12 text-border mx-auto mb-4" />
              <p className="text-text-secondary">You haven't submitted any claims yet.</p>
            </div>
          ) : (
            claims.map((claim) => (
              <div key={claim.id} className="glass-card p-6 border-l-4 border-l-accent">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-text-primary">{claim.type}</h4>
                    <p className="text-xs text-text-secondary">{new Date(claim.createdAt?.toDate?.() || claim.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {claim.amount}
                    </div>
                    <span className={cn(
                      "text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest",
                      claim.status === 'PENDING' ? "bg-warning/10 text-warning" : 
                      claim.status === 'APPROVED' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                    )}>
                      {claim.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary line-clamp-2 mb-2">{claim.description}</p>
                {claim.adminComment && (
                  <div className="mt-4 p-3 bg-surface rounded-lg border border-border/50">
                    <p className="text-[10px] font-black text-text-secondary uppercase mb-1">Admin Comment</p>
                    <p className="text-xs italic text-text-primary">"{claim.adminComment}"</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const OverviewTab = ({ rainfall, triggerStatus, simulateRain, isSimulating, workerData }: { rainfall: number, triggerStatus: string, simulateRain: () => void, isSimulating: boolean, workerData: any }) => (
  <div className="space-y-8">
    {/* Zone Status Hero Card */}
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <CloudRain className="w-32 h-32" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase border",
              triggerStatus === "PAYOUT_TRIGGERED" ? "bg-success/10 border-success/20 text-success" : "bg-warning/10 border-warning/20 text-warning"
            )}>
              {triggerStatus === "PAYOUT_TRIGGERED" ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
              {triggerStatus === "PAYOUT_TRIGGERED" ? "Payout Triggered" : "Monitoring Zone"}
            </div>
            <h2 className="text-4xl font-display font-bold mb-2">
              {triggerStatus === "PAYOUT_TRIGGERED" ? "Automatic Payout Initiated" : "Monitor Closely"}
            </h2>
            <p className="text-text-secondary max-w-md">
              {triggerStatus === "PAYOUT_TRIGGERED" 
                ? "Threshold reached! ₹1,500 will be credited to your GigWallet within 90 seconds." 
                : `Real-time weather monitoring active in ${workerData?.zone || 'your zone'}. Payout trigger threshold: 10mm/hr.`}
            </p>
          </div>
          
          <div className="flex flex-col items-end text-right">
            <div className={cn(
              "text-5xl font-mono font-bold mb-1",
              triggerStatus === "PAYOUT_TRIGGERED" ? "text-success" : "text-warning"
            )}>
              {rainfall}<span className="text-xl">mm</span>
            </div>
            <div className="text-xs text-text-secondary uppercase tracking-widest font-bold">Current Rainfall</div>
            <div className="mt-4 flex gap-2">
              <div className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold">AQI: 45 (Good)</div>
              <div className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold">Next Renewal: 5 Days</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Stats Grid */}
    <section className="grid md:grid-cols-3 gap-6">
      {[
        { label: "Weekly Premium", val: `₹${workerData?.weeklyPremium || 119}`, sub: `${workerData?.plan || 'Pro'} Plan`, icon: Shield },
        { label: "Max Coverage", val: "₹1,500", sub: "₹500 / day max", icon: TrendingUp },
        { label: "Payout Speed", val: "90s", sub: "Priority Tier", icon: Zap },
      ].map((stat, i) => (
        <div key={i} className="glass-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
            <stat.icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <div className="text-xs text-text-secondary font-bold uppercase tracking-widest">{stat.label}</div>
            <div className="text-2xl font-mono font-bold">{stat.val}</div>
            <div className="text-[10px] text-text-secondary">{stat.sub}</div>
          </div>
        </div>
      ))}
    </section>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Loyalty Pool Tracker */}
        <div className="glass-card p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Loyalty Pool Tracker</h3>
            <div className="text-accent font-bold">14 / 26 Weeks</div>
          </div>
          <div className="relative h-4 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '54%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full bg-accent glow-accent"
            />
          </div>
          <div className="flex justify-between text-[10px] text-text-secondary font-bold uppercase tracking-tighter">
            <span>Start</span>
            <span>4 Weeks</span>
            <span>9 Weeks</span>
            <span>17 Weeks</span>
            <span>26 Weeks (Max)</span>
          </div>
          <div className="mt-6 p-4 bg-accent/5 border border-accent/10 rounded-xl flex items-center justify-between">
            <div className="text-sm">
              <span className="text-accent font-bold">₹336 bonus</span> ready for your next claim.
            </div>
            <button className="text-xs font-bold flex items-center gap-1 text-accent hover:underline">
              View Milestones <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Partner Connection */}
        <div className="glass-card p-8 border-accent/20">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" /> Partner Integration
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-accent/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E23744] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">Z</span>
                </div>
                <div>
                  <div className="font-bold">Zomato Partner</div>
                  <div className="text-[10px] text-success font-bold uppercase">Connected</div>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-accent/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FC8019] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <div className="font-bold">Swiggy Delivery</div>
                  <div className="text-[10px] text-text-secondary font-bold uppercase">Not Linked</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Quick Wallet */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="w-5 h-5 text-accent" />
            <h3 className="font-bold">GigWallet</h3>
          </div>
          <div className="mb-6">
            <div className="text-xs text-text-secondary font-bold uppercase mb-1">Total Balance</div>
            <div className="text-4xl font-mono font-bold">₹1,840</div>
          </div>
          <button className="w-full py-4 bg-accent text-background rounded-xl font-bold flex items-center justify-center gap-2 hover:glow-accent transition-all">
            Withdraw <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Recent History */}
        <div className="glass-card p-6">
          <h3 className="font-bold mb-6">Recent Events</h3>
          <div className="space-y-6">
            {[
              { type: 'payout', title: 'Rain Payout', date: 'Oct 12', amt: '+₹1,500' },
              { type: 'withdraw', title: 'Withdrawal', date: 'Oct 14', amt: '-₹500' },
            ].map((event, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    event.type === 'payout' ? "bg-success/10 text-success" : "bg-accent/10 text-accent"
                  )}>
                    {event.type === 'payout' ? <CloudRain className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{event.title}</div>
                    <div className="text-[10px] text-text-secondary">{event.date}</div>
                  </div>
                </div>
                <div className={cn("text-sm font-mono font-bold", event.amt.startsWith('+') ? "text-success" : "text-accent")}>
                  {event.amt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WalletTab = ({ walletData }: { walletData: any }) => (
  <div className="space-y-8">
    <div className="glass-card p-8 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="text-xs text-text-secondary font-bold uppercase tracking-widest mb-2">Total Balance</div>
        <div className="text-6xl font-mono font-bold mb-6">₹{walletData?.availableBalance || 0}</div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="flex-grow text-sm text-text-secondary">Available Payout</div>
            <div className="font-bold">₹{walletData?.availableBalance || 0}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-success" />
            <div className="flex-grow text-sm text-text-secondary">Loyalty Pool (Locked)</div>
            <div className="font-bold">₹{walletData?.loyaltyPoolBalance || 0}</div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
        <div className="text-sm text-text-secondary mb-4">Next Payout Estimate</div>
        <div className="text-4xl font-mono font-bold text-accent mb-2">₹1,500</div>
        <div className="text-[10px] text-text-secondary uppercase tracking-widest">Based on current rainfall</div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-6">Withdraw Funds</h3>
        <div className="space-y-6">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-[10px] text-text-secondary font-bold uppercase mb-2">Withdraw to UPI</div>
            <div className="text-xl font-mono font-bold">ravi.delivery@okaxis</div>
          </div>
          <div className="flex gap-4">
            <button className="flex-grow py-4 bg-accent text-background rounded-xl font-bold">Withdraw ₹1,504</button>
            <button className="px-6 py-4 bg-white/5 rounded-xl font-bold border border-white/10">Custom</button>
          </div>
        </div>
      </div>
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-6">Loyalty Milestones</h3>
        <div className="space-y-4">
          {[
            { week: 'Week 4', bonus: '₹50', status: 'Claimed' },
            { week: 'Week 9', bonus: '₹150', status: 'Claimed' },
            { week: 'Week 17', bonus: '₹250', status: 'Upcoming' },
          ].map((m, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
              <span className="font-bold">{m.week}</span>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono font-bold">{m.bonus}</span>
                <span className={cn("text-[10px] font-bold uppercase", m.status === 'Claimed' ? "text-success" : "text-text-secondary")}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PolicyTab = ({ workerData }: { workerData: any }) => {
  const getRenewalDate = () => {
    if (!workerData?.createdAt) return 'N/A';
    const created = new Date(workerData.createdAt?.toDate?.() || workerData.createdAt);
    const nextRenewal = new Date(created.getTime() + 7 * 24 * 60 * 60 * 1000);
    return nextRenewal.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getBenefits = (plan: string) => {
    const common = [
      'Instant 90s Payout',
      'Parametric Rain Trigger',
      'GigWallet Integration'
    ];
    
    switch(plan) {
      case 'Premium':
        return [...common, 'All Weather Extremes Coverage', 'Priority Support', 'Zero Deductible'];
      case 'Pro':
        return [...common, 'Monsoon Stay-at-Home Benefit', 'Weekly Risk Reports'];
      default:
        return [...common, 'Essential Rain Protection', 'Basic Support'];
    }
  };

  const benefits = getBenefits(workerData?.plan || 'Pro');

  return (
    <div className="space-y-8">
      <div className="glass-card p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">{workerData?.plan || 'Pro'} Shield</h2>
            <p className="text-text-secondary">Policy ID: PK-{workerData?.id?.slice(0, 4).toUpperCase() || '9928'}-X</p>
          </div>
          <div className="px-4 py-2 bg-success/10 border border-success/20 text-success rounded-full text-xs font-bold uppercase">
            {workerData?.status || 'Active'}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] text-text-secondary font-black uppercase tracking-widest mb-2">Weekly Premium</div>
            <div className="text-xl font-bold text-accent">₹{workerData?.weeklyPremium || 119}</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] text-text-secondary font-black uppercase tracking-widest mb-2">Max Coverage</div>
            <div className="text-xl font-bold">₹1,500 / day</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] text-text-secondary font-black uppercase tracking-widest mb-2">Trigger</div>
            <div className="text-xl font-bold">15mm / hr</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] text-text-secondary font-black uppercase tracking-widest mb-2">Next Renewal</div>
            <div className="text-xl font-bold text-warning">{getRenewalDate()}</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" /> Key Benefits
          </h3>
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-6">Policy Documents</h3>
          <div className="space-y-4">
            {[
              { name: 'Policy Schedule', size: '1.2 MB' },
              { name: 'Terms & Conditions', size: '0.8 MB' },
              { name: 'Trigger Mechanism Guide', size: '2.1 MB' }
            ].map((doc, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-text-secondary group-hover:text-accent" />
                  <div>
                    <div className="text-sm font-bold">{doc.name}</div>
                    <div className="text-[10px] text-text-secondary uppercase">{doc.size} • PDF</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-6">Coverage Zones</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-accent/10 border border-accent/20 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="font-bold">{workerData?.zone || 'Chennai Zone 4'} (Primary)</span>
            </div>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Active</span>
          </div>
        </div>
        <button className="w-full mt-6 py-4 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/5 transition-all">
          Add Secondary Zone
        </button>
      </div>
    </div>
  );
};

const HistoryTab = () => (
  <div className="glass-card p-8">
    <h3 className="text-xl font-bold mb-8">Full Activity History</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-text-secondary uppercase tracking-widest border-b border-white/5">
            <th className="pb-4 font-bold">Date</th>
            <th className="pb-4 font-bold">Event</th>
            <th className="pb-4 font-bold">Amount</th>
            <th className="pb-4 font-bold">Status</th>
            <th className="pb-4 font-bold">Ref ID</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[
            { date: 'Oct 12, 2024', event: 'Rain Payout (18.2mm)', amt: '+₹1,500', status: 'Success', ref: 'TXN-9921' },
            { date: 'Oct 10, 2024', event: 'UPI Withdrawal', amt: '-₹500', status: 'Pending', ref: 'TXN-8812' },
            { date: 'Oct 08, 2024', event: 'Loyalty Bonus (W9)', amt: '+₹150', status: 'Success', ref: 'TXN-7734' },
            { date: 'Oct 05, 2024', event: 'Weekly Premium', amt: '-₹119', status: 'Success', ref: 'TXN-6612' },
            { date: 'Sep 28, 2024', event: 'Rain Payout (16.5mm)', amt: '+₹1,500', status: 'Success', ref: 'TXN-5541' },
          ].map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="py-4 text-text-secondary">{row.date}</td>
              <td className="py-4 font-bold">{row.event}</td>
              <td className={cn("py-4 font-mono font-bold", row.amt.startsWith('+') ? "text-success" : "text-accent")}>{row.amt}</td>
              <td className="py-4">
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold", row.status === 'Success' ? "bg-success/20 text-success" : "bg-warning/20 text-warning")}>
                  {row.status}
                </span>
              </td>
              <td className="py-4 text-text-secondary font-mono">{row.ref}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SettingsTab = ({ workerData }: { workerData: any }) => (
  <div className="max-w-2xl space-y-8">
    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-8">Profile Settings</h3>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Full Name</label>
            <input type="text" defaultValue={workerData?.name || "Ravi Kumar"} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-accent" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Phone Number</label>
            <input type="text" defaultValue={workerData?.phone || "+91 98765 43210"} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-accent" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">UPI ID</label>
          <input type="text" defaultValue="ravi.delivery@okaxis" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-accent" />
        </div>
        <button className="px-8 py-3 bg-accent text-background rounded-xl font-bold">Save Changes</button>
      </div>
    </div>

    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-8">Notification Preferences</h3>
      <div className="space-y-4">
        {[
          { label: 'Rainfall Alerts', desc: 'Get notified when rain is predicted in your zone' },
          { label: 'Payout Confirmations', desc: 'Instant alerts for wallet credits' },
          { label: 'Weekly Reports', desc: 'Summary of your earnings and protection' },
        ].map((pref, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
            <div>
              <div className="font-bold text-sm">{pref.label}</div>
              <div className="text-[10px] text-text-secondary">{pref.desc}</div>
            </div>
            <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-background rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSimulating, setIsSimulating] = useState(false);
  const [rainfall, setRainfall] = useState(12.5);
  const [windSpeed, setWindSpeed] = useState(25.0);
  const [waterLogging, setWaterLogging] = useState(5.0);
  const [triggerStatus, setTriggerStatus] = useState('MONITORING');
  const [triggerType, setTriggerType] = useState('NONE');
  const [workerData, setWorkerData] = useState<any>(null);
  const [walletData, setWalletData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (!user) return;

    const unsubWorker = onSnapshot(doc(db, 'workers', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        setWorkerData({ id: docSnap.id, ...docSnap.data() });
      } else {
        // Redirect to onboard if no data
        window.history.pushState({}, '', '/onboard');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setLoading(false);
    }, (error) => {
      console.error('Worker Snapshot Error:', error);
      setLoading(false);
    });

    const unsubWallet = onSnapshot(doc(db, 'wallets', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        setWalletData(docSnap.data());
      }
    }, (error) => {
      console.error('Wallet Snapshot Error:', error);
    });

    const q = query(collection(db, 'notifications'), where('workerId', '==', user.uid), orderBy('createdAt', 'desc'));
    const unsubNotifications = onSnapshot(q, (snapshot) => {
      setNotifications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (error) => {
      console.error('Notifications Snapshot Error:', error);
    });

    return () => {
      unsubWorker();
      unsubWallet();
      unsubNotifications();
    };
  }, [user]);

  const markAsRead = async (id: string) => {
    try {
      await updateDoc(doc(db, 'notifications', id), { read: true });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  useEffect(() => {
    const fetchTriggers = async () => {
      try {
        const response = await axios.get('/api/triggers');
        const data = response.data;
        setRainfall(data.rainfall);
        setWindSpeed(data.windSpeed);
        setWaterLogging(data.waterLogging);
        setTriggerStatus(data.status);
        setTriggerType(data.triggerType);

        // Automated Zero-Touch Claim Logic
        if (data.status === "PAYOUT_TRIGGERED" && triggerStatus !== "PAYOUT_TRIGGERED" && user) {
          try {
            await axios.post('/api/ai/trigger-payout', {
              workerId: user.uid,
              rainfall: data.rainfall,
              threshold: data.thresholds.rainfall
            });
          } catch (error: any) {
            // Silently handle threshold not met or other simulation errors
            if (error?.response?.status !== 400) {
              console.error("Automated payout failed:", error);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching triggers:", error);
      }
    };

    fetchTriggers();
    const interval = setInterval(fetchTriggers, 10000);
    return () => clearInterval(interval);
  }, [user, triggerStatus]);

  const simulateRain = () => {
    setIsSimulating(true);
    let current = 12.5;
    const interval = setInterval(() => {
      current += 0.5;
      setRainfall(parseFloat(current.toFixed(1)));
      if (current >= 18.5) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 200);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard': return (
        <div className="space-y-6">
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent animate-pulse" />
              <div>
                <div className="text-xs font-black text-accent uppercase tracking-widest">Zero-Touch Claims Active</div>
                <div className="text-[10px] text-text-secondary">AI is monitoring your zone for automatic payouts.</div>
              </div>
            </div>
            <div className="text-[10px] font-bold text-success uppercase tracking-widest flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> System Ready
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-text-secondary font-bold uppercase">Rainfall</div>
                <div className="text-xl font-mono font-bold">{rainfall}mm</div>
              </div>
              <CloudRain className={cn("w-5 h-5", rainfall > 15 ? "text-accent" : "text-text-secondary")} />
            </div>
            <div className="glass-card p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-text-secondary font-bold uppercase">Wind Speed</div>
                <div className="text-xl font-mono font-bold">{windSpeed}km/h</div>
              </div>
              <Zap className={cn("w-5 h-5", windSpeed > 45 ? "text-accent" : "text-text-secondary")} />
            </div>
            <div className="glass-card p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-text-secondary font-bold uppercase">Water Logging</div>
                <div className="text-xl font-mono font-bold">{waterLogging}cm</div>
              </div>
              <AlertTriangle className={cn("w-5 h-5", waterLogging > 20 ? "text-accent" : "text-text-secondary")} />
            </div>
          </div>
          <OverviewTab rainfall={rainfall} triggerStatus={triggerStatus} simulateRain={simulateRain} isSimulating={isSimulating} workerData={workerData} />
        </div>
      );
      case 'wallet': return <WalletTab walletData={walletData} />;
      case 'policy': return <PolicyTab workerData={workerData} />;
      case 'claims': return <ClaimsTab user={user} workerData={workerData} />;
      case 'history': return <HistoryTab />;
      case 'settings': return <SettingsTab workerData={workerData} />;
      default: return <OverviewTab rainfall={rainfall} triggerStatus={triggerStatus} simulateRain={simulateRain} isSimulating={isSimulating} workerData={workerData} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 border-r border-white/5 flex-col p-6 gap-8 shrink-0">
        <nav className="flex flex-col gap-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'wallet', icon: Wallet, label: 'GigWallet' },
            { id: 'policy', icon: Shield, label: 'My Policy' },
            { id: 'claims', icon: FileText, label: 'Claims' },
            { id: 'history', icon: History, label: 'History' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === item.id ? "bg-accent text-background" : "text-text-secondary hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto glass-card p-4">
          <div className="text-xs text-text-secondary mb-2 uppercase tracking-widest font-bold">Support</div>
          <p className="text-xs leading-relaxed mb-4">Need help with a claim? Our AI assistant is here.</p>
          <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
            Open Chat
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 overflow-y-auto pb-24 md:pb-10">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-display font-bold">Namaste, {workerData?.name?.split(' ')[0] || user?.displayName?.split(' ')[0] || 'Worker'} 👋</h1>
            <p className="text-sm text-text-secondary">{workerData?.zone || 'Monitoring Zone'} • Week 1 Active</p>
          </div>
          <div className="flex items-center gap-4">
            {activeTab === 'dashboard' && (
              <button 
                onClick={simulateRain}
                disabled={isSimulating}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
                  isSimulating ? "bg-accent/20 text-accent cursor-not-allowed" : "bg-accent text-background hover:scale-105"
                )}
              >
                <CloudRain className={cn("w-4 h-4", isSimulating && "animate-bounce")} />
                {isSimulating ? "Simulating..." : "Simulate Rain"}
              </button>
            )}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 bg-white/5 rounded-full relative hover:bg-white/10 transition-colors"
              >
                <Bell className="w-5 h-5 text-text-secondary" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full border-2 border-background" />
                )}
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-80 glass-card p-4 z-50 shadow-2xl border-accent/20"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-sm">Notifications</h3>
                        <span className="text-[10px] font-black text-accent uppercase tracking-widest">{notifications.filter(n => !n.read).length} New</span>
                      </div>
                      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                        {notifications.length === 0 ? (
                          <p className="text-xs text-text-secondary text-center py-8">No notifications yet.</p>
                        ) : (
                          notifications.map((n) => (
                            <div 
                              key={n.id} 
                              onClick={() => markAsRead(n.id)}
                              className={cn(
                                "p-3 rounded-xl border transition-all cursor-pointer",
                                n.read ? "bg-white/5 border-white/5 opacity-60" : "bg-accent/5 border-accent/20"
                              )}
                            >
                              <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-xs text-text-primary">{n.title}</p>
                                <span className="text-[8px] text-text-secondary">{new Date(n.createdAt?.toDate?.() || n.createdAt).toLocaleDateString()}</span>
                              </div>
                              <p className="text-[10px] text-text-secondary leading-relaxed">{n.message}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full border border-white/20" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-indigo-600 border border-white/20" />
            )}
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Tab Bar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-background/80 backdrop-blur-md border-t border-white/5 flex justify-around p-4 z-50">
        {[
          { id: 'dashboard', icon: LayoutDashboard },
          { id: 'wallet', icon: Wallet },
          { id: 'policy', icon: Shield },
          { id: 'claims', icon: FileText },
          { id: 'history', icon: History },
          { id: 'settings', icon: Settings },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "p-2 rounded-xl transition-all",
              activeTab === item.id ? "text-accent bg-accent/10" : "text-text-secondary"
            )}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;
