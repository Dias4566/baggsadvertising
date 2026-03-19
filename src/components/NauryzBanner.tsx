import { useState, useEffect } from "react";
import { X, PartyPopper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NauryzBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("nauryz-banner-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("nauryz-banner-dismissed", "true");
  };

  const content = {
    en: {
      title: "Happy Nauryz! 🌷",
      message: "Enjoy a 10% discount on your order in the next 5 days!",
      cta: "Get in Touch",
    },
    ru: {
      title: "С Наурызом! 🌷",
      message: "Скидка 10% на ваш заказ в течение 5 дней!",
      cta: "Связаться",
    },
    kk: {
      title: "Наурыз мейрамы құтты болсын! 🌷",
      message: "5 күн ішінде тапсырысыңызға 10% жеңілдік!",
      cta: "Байланысу",
    },
  };

  const t = content[language] || content.en;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-md w-full rounded-2xl bg-background border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Decorative top band */}
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-yellow-400 to-sky-500" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 py-8 text-center space-y-4">
          <PartyPopper className="w-12 h-12 mx-auto text-yellow-500" />
          <h2 className="text-2xl font-bold text-foreground">{t.title}</h2>
          <p className="text-muted-foreground text-lg">{t.message}</p>
          <Button
            onClick={() => {
              handleClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-2 px-8"
            size="lg"
          >
            {t.cta}
          </Button>
        </div>

        {/* Decorative bottom band */}
        <div className="h-2 bg-gradient-to-r from-sky-500 via-yellow-400 to-emerald-500" />
      </div>
    </div>
  );
};

export default NauryzBanner;
