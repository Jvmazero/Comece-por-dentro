import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CONFIG } from '../constants/config';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Início',
    href: '#inicio'
  },
  {
    name: 'E-book',
    href: '#ebook'
  },
  {
    name: 'As Autoras',
    href: '#sobre'
  },
  {
    name: 'Palestras',
    href: '#palestras'
  },
  {
    name: 'Dúvidas',
    href: '#duvidas'
  }];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand — solid lilac dot + larger name */}
          <a href="#inicio" className="flex items-center gap-3 group min-w-0">
            <img
              src={CONFIG.LOGO_URL}
              alt="Agora, comece por dentro"
              className="h-16 w-auto max-w-[150px] shrink-0 rounded-xl object-contain bg-white p-1 group-hover:scale-105 transition-transform shadow-sm" />
            
            <div className="hidden sm:flex flex-col leading-[1.05] min-w-0">
              <span className="font-serif text-2xl md:text-[1.7rem] text-sage-800 tracking-wide truncate">
                {/* PLACEHOLDER: Brand Name */}
                Agora,
              </span>
              <span className="font-serif italic text-base md:text-lg text-sage-600 truncate">
                comece por dentro
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-sage-600 transition-colors">
              
                {link.name}
              </a>
            )}
          </nav>

          {/* Primary CTA — Buy Ebook (external) */}
          <div className="hidden md:flex">
            <a
              href={CONFIG.EXTERNAL_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow">
              
              <ShoppingBag className="w-4 h-4" />
              Comprar E-book
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-stone-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu">
            
            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-base font-medium text-stone-600 hover:text-sage-600 p-2 rounded-lg hover:bg-stone-50">
          
              {link.name}
            </a>
        )}
          <a
          href={CONFIG.EXTERNAL_SALES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-sage-500 text-white px-5 py-3 rounded-xl text-sm font-medium mt-2">
          
            <ShoppingBag className="w-4 h-4" />
            Comprar E-book
          </a>
        </div>
      }
    </header>);

}