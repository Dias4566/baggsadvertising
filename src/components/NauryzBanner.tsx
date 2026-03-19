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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative mx-4 w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center blur-[1.5px]"
          style={{ backgroundImage: `url(${nauryzBg})` }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.68)_0%,hsl(var(--secondary)/0.58)_38%,hsl(var(--secondary)/0.34)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/42 to-secondary/56" />

        <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10 sm:py-14 md:min-h-[420px] md:px-16 md:py-16">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-secondary-foreground/85 transition-colors hover:text-secondary-foreground"
            aria-label="Close promotional banner"
          >
            <X className="h-7 w-7" />
          </button>

          <span
            className="mb-4 text-[0.7rem] font-semibold uppercase text-secondary-foreground sm:text-sm md:text-base"
            style={{
              letterSpacing: "0.14em",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {t.topline}
          </span>

          <h2
            className="max-w-xl text-[2.15rem] font-bold leading-[1.05] text-secondary-foreground sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {t.title}
          </h2>

          <Button
            onClick={() => {
              handleClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-7 min-h-[60px] rounded-full border border-primary/70 bg-primary px-10 py-4 text-lg font-extrabold text-primary-foreground shadow-[0_12px_28px_hsl(var(--secondary)/0.42),0_0_0_1px_hsl(var(--primary)/0.28)] transition-all hover:scale-105 hover:bg-primary sm:px-14 sm:py-5 sm:text-xl md:mt-8 md:min-h-[68px] md:text-2xl"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              textShadow: "0 1px 0 rgba(255,255,255,0.15)",
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
