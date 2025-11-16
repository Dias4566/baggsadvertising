import { useLanguage } from "@/contexts/LanguageContext";
import baggsLogo from "@/assets/baggs-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <img 
          src={baggsLogo} 
          alt="BAGG'S Advertising" 
          className="h-16 md:h-20 mx-auto mb-4"
        />
        <p className="text-base text-secondary-foreground/70 font-medium mb-6">
          {t('footer.tagline')}
        </p>
        <p className="text-base text-secondary-foreground/50 font-medium">
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
