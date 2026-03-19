import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import nauryzBg from "@/assets/nauryz-bg.jpg";

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
      topline: "Holiday Offer",
      title: "Your Nauryz Gift: -10% on Orders!",
      cta: "Claim -10%",
    },
    ru: {
      topline: "Праздничное предложение",
      title: "Ваш подарок к наурызу: -10% на заказ!",
      cta: "Забрать -10%",
    },
    kk: {
      topline: "Мерекелік ұсыныс",
      title: "Наурызға сыйлық: тапсырысқа -10%!",
      cta: "Жеңілдікті алу",
    },
  };

  const t = content[language] || content.en;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative mx-4 max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nauryzBg})` }}
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-10 md:p-16 text-center space-y-5">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Topline */}
          <span
            className="text-sm md:text-base uppercase text-white/90 font-semibold"
            style={{ letterSpacing: "0.3em" }}
          >
            {t.topline}
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {t.title}
          </h2>

          <Button
            onClick={() => {
              handleClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 px-14 py-7 text-xl md:text-2xl font-bold rounded-full border-2 hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, #c8a43a, #f5d76e)",
              color: "#1a4a2a",
              borderColor: "#f5d76e",
              fontFamily: "'Times New Roman', Times, serif",
              boxShadow: "0 8px 30px rgba(200, 164, 58, 0.45)",
            }}
            size="lg"
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NauryzBanner;
