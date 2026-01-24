import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background/50 backdrop-blur-sm border-t border-border mt-20 md:mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 w-fit">
              Huy Nguyen
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A passionate React Developer crafting stunning, user-friendly, and performant web experiences.
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">
                Home
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">
                Projects
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="flex flex-col gap-3">
              <Link 
                href="mailto:nguyendanghuy071195@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">nguyendanghuy071195@gmail.com</span>
              </Link>
              <Link 
                href="tel:+84363792188" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+84 (363) 792-188</span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Follow Me</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/huy-nguyen-2209b4165/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white text-muted-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white text-muted-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Huy Nguyen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
