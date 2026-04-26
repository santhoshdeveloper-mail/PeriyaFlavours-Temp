'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedFoods from './components/FeaturedFoods';
import Restaurants from './components/Restaurants';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

export default function PeriyaFlavours() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your recommendation has been received. We'll feature great suggestions soon 🍛");
    e.currentTarget.reset();
  };

  return (
    <>
      <Navbar 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setSearchOpen={setSearchOpen}
        smoothScroll={smoothScroll}
      />

      <Hero smoothScroll={smoothScroll} />
      <Restaurants />
      <Contact handleSubmit={handleSubmit} />
      <Footer />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </>
  );
}