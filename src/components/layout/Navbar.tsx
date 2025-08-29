
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 sm:py-3 bg-portfolio-black/80 backdrop-blur-md shadow-lg shadow-portfolio-primary/5' : 'py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-display text-xl sm:text-2xl font-bold gradient-text">Punam Channe</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link text-sm lg:text-base"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary/25 text-sm lg:text-base px-4 lg:px-6">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-portfolio-primary transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-portfolio-dark-gray/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 border-b border-portfolio-primary/20 shadow-lg shadow-portfolio-primary/10' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2 sm:space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-2 text-gray-300 hover:text-portfolio-primary transition-colors text-sm sm:text-base"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white w-full mt-3 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary/25">
            <a href="#contact" onClick={handleLinkClick}>Get in Touch</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
