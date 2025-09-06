import '../i18n';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('Home') },
    { id: 'skills', label: t('Skills') },
    { id: 'timeline', label: t('Experience') },
    { id: 'projects', label: t('Projects') },
    { id: 'contact', label: t('Contact') }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-neon-green/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-neon-green neon-text">
            &lt;/ Calicothico &gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-neon-green transition-colors duration-200 hover:scale-105 transform font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage('pt')}
              className={`px-2 py-1 rounded text-sm font-semibold ${i18n.language === 'pt' ? 'bg-neon-green text-black' : 'text-neon-green'}`}
            >
              PT
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-2 py-1 rounded text-sm font-semibold ${i18n.language === 'en' ? 'bg-neon-green text-black' : 'text-neon-green'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-neon-green/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-text-secondary hover:text-neon-green transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
