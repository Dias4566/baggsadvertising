import { Phone, MapPin, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import baggsLogo from "@/assets/baggs-logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <img 
              src={baggsLogo} 
              alt="BAGG'S Advertising" 
              className="h-20 md:h-24 cursor-pointer transition-transform hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.portfolio')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center gap-4">
            <a 
              href="tel:+77029500392" 
              className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+7 702 950 03 92</span>
            </a>
            <a 
              href="https://maps.google.com/?q=Сейфуллина+288,+Алматы" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="max-w-[150px] truncate">Сейфуллина 288</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border mt-2 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="justify-start text-base font-medium hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('services')}
                className="justify-start text-base font-medium hover:text-primary transition-colors"
              >
                {t('nav.services')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('portfolio')}
                className="justify-start text-base font-medium hover:text-primary transition-colors"
              >
                {t('nav.portfolio')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="justify-start text-base font-medium hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </Button>
              
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <a 
                  href="tel:+77029500392" 
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors px-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+7 702 950 03 92</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=Сейфуллина+288,+Алматы" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors px-4"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Сейфуллина 288, Алматы</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
