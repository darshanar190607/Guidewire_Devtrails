import React, { useState, useEffect } from 'react';
import { Shield, Zap, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '../App';
import { logout } from '../firebase';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const isAdmin = user?.email === 'admin@gmail.com' || user?.email === 'vennila498@gmail.com';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Plans', href: '/plans' },
    { name: 'AI Models', href: '/ai-models' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  if (isAdmin) {
    navLinks.push({ name: 'Admin', href: '/admin' });
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-2 flex justify-between items-center",
      scrolled || mobileMenuOpen ? "bg-white/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
    )}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 gradient-bg">
          <Shield className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-display font-black tracking-tighter text-text-primary">Paymigo</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-text-secondary">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={cn(
              "hover:text-accent transition-colors uppercase tracking-widest text-[11px]",
              window.location.pathname === link.href ? "text-accent" : ""
            )}
          >
            {link.name}
          </a>
        ))}
        
        {user ? (
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/profile')} className="flex items-center gap-2 hover:text-accent transition-colors">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border border-accent/20" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <UserIcon className="w-4 h-4 text-accent" />
                </div>
              )}
              <span className="text-[11px] uppercase tracking-widest">{user.displayName?.split(' ')[0]}</span>
            </button>
            <button 
              onClick={handleLogout}
              className="p-2 text-text-secondary hover:text-danger transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className="px-6 py-1.5 bg-accent text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-accent/20 gradient-bg"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-text-secondary"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border/50 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-lg font-bold py-2 uppercase tracking-widest text-[12px]",
                window.location.pathname === link.href ? "text-accent" : "text-text-secondary"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {user ? (
            <>
              <button onClick={() => navigate('/profile')} className="text-left text-lg font-bold py-2 uppercase tracking-widest text-[12px] text-text-secondary">Profile</button>
              <button 
                onClick={handleLogout}
                className="w-full py-4 bg-danger/10 text-danger rounded-xl font-bold mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="w-full py-4 bg-accent text-white rounded-xl font-bold mt-2 shadow-lg shadow-accent/20 gradient-bg"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
