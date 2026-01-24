import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download, Phone, Linkedin, Facebook, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { label: 'Download CV', href: '/cv.pdf', icon: Download, download: 'nguyen-dang-huy_cv-fe-dev.pdf' },
    { label: 'Facebook', href: 'https://www.facebook.com/huyittos2', icon: Facebook },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huy-nguyen-2209b4165/', icon: Linkedin },
    { label: 'Contact', href: 'tel:+84363792188', icon: Phone },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-border shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          HN.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-purple-400 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Connect Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsConnectOpen(true)}
            onMouseLeave={() => setIsConnectOpen(false)}
          >
            <Button variant="outline" className="gap-2 border-purple-500/20 hover:bg-purple-500/10">
              Connect <ChevronDown className="w-4 h-4" />
            </Button>
            
            <AnimatePresence>
              {isConnectOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="p-1 flex flex-col gap-1">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.download ? undefined : '_blank'}
                        download={link.download}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-background/95 backdrop-blur-xl border-l border-border z-[102] p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-foreground">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-accent rounded-full text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-purple-400 transition-colors px-4 py-2 rounded-lg hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="h-px bg-border my-2" />
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-muted-foreground px-4 mb-2">Connect</span>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.download ? undefined : '_blank'}
                      download={link.download}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
