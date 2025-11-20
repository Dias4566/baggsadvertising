import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import baggsLogo from "@/assets/baggs-logo.png";

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <img 
              src={baggsLogo} 
              alt="BAGG'S Advertising" 
              className="h-20 md:h-24 cursor-pointer transition-transform hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="tel:+77027770202" 
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 702 777 02 02</span>
            </a>
            <a 
              href="https://maps.google.com/?q=Сейфуллина+288,+Алматы" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="max-w-[200px] truncate">Сейфуллина 288, Алматы</span>
            </a>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
