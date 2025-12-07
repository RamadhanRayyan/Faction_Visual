import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="text-2xl font-bold text-black">Faction Visual</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-black hover:text-red-600 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-black hover:text-red-600 transition-colors duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('terms')}
            className="text-black hover:text-red-600 transition-colors duration-300"
          >
            Terms
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-black hover:text-red-600 transition-colors duration-300"
          >
            Contact
          </button>
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-red-600 transition-colors duration-300 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-black hover:text-red-600 transition-colors duration-300 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('terms')}
              className="text-black hover:text-red-600 transition-colors duration-300 text-left"
            >
              Terms
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-red-600 transition-colors duration-300 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
