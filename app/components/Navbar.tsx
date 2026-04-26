'use client';

import { Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  smoothScroll: (id: string) => void;
}

export default function Navbar({ 
  isScrolled, 
  isMenuOpen, 
  setIsMenuOpen, 
  setSearchOpen, 
  smoothScroll 
}: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl shadow-2xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950 font-bold text-2xl">🍛</div>
          <div className="heading-font text-3xl tracking-tighter font-bold">
            Periya<span className="text-emerald-400">Flavours</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <button onClick={() => smoothScroll('home')} className="hover:text-emerald-400 transition-colors">Home</button>
          <button onClick={() => smoothScroll('featured')} className="hover:text-emerald-400 transition-colors">Featured</button>
          <button onClick={() => smoothScroll('explore')} className="hover:text-emerald-400 transition-colors">Restaurants</button>
          <button onClick={() => smoothScroll('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setSearchOpen(true)} 
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Hidden on mobile — shown on md+ */}
          <button 
            onClick={() => smoothScroll('explore')}
            className="hidden md:block px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold rounded-full text-sm transition-all active:scale-95"
          >
            Explore Now
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu bg-zinc-950 border-t border-zinc-800 py-6">
          <div className="flex flex-col gap-6 px-6 text-lg">
            {['Home', 'Featured', 'Restaurants', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => smoothScroll(item.toLowerCase())} 
                className="text-left hover:text-emerald-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}