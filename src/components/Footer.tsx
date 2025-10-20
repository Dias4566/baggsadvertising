import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-4">BrightSign</h2>
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
