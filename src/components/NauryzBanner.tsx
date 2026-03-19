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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        style={{
          background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a2a 30%, #1a6b3c 50%, #0d4a2a 70%, #1a6b3c 100%)",
        }}
      >
        {/* Traditional ornamental top border */}
        <div className="w-full h-6 flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, #c8a43a, #f5d76e, #c8a43a, #f5d76e, #c8a43a)",
          }}
        >
          <div className="flex gap-3 items-center">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="text-[10px]" style={{ color: "#1a6b3c" }}>◆</span>
            ))}
          </div>
        </div>

        {/* Inner ornamental frame */}
        <div className="mx-5 mt-5 mb-0 border-2 rounded-2xl p-1"
          style={{ borderColor: "#c8a43a" }}
        >
          {/* Corner ornaments via SVG-like patterns */}
          <div className="relative rounded-xl p-8 text-center space-y-5"
            style={{
              background: "radial-gradient(ellipse at center, rgba(200,164,58,0.12) 0%, transparent 70%)",
            }}
          >
            {/* Kazakh ornament motifs - corner decorations */}
            <div className="absolute top-2 left-3 text-2xl opacity-40" style={{ color: "#f5d76e" }}>✿</div>
            <div className="absolute top-2 right-3 text-2xl opacity-40" style={{ color: "#f5d76e" }}>✿</div>
            <div className="absolute bottom-2 left-3 text-2xl opacity-40" style={{ color: "#f5d76e" }}>✿</div>
            <div className="absolute bottom-2 right-3 text-2xl opacity-40" style={{ color: "#f5d76e" }}>✿</div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-10 transition-colors hover:opacity-70"
              style={{ color: "#f5d76e" }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Tulip emoji row */}
            <div className="text-3xl tracking-widest">🌷🌷🌷</div>

            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f5d76e" }}>
              {t.title}
            </h2>

            <p className="text-lg md:text-xl" style={{ color: "#e8dcc8" }}>
              {t.message}
            </p>

            <Button
              onClick={() => {
                handleClose();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-3 px-10 text-lg font-bold rounded-full border-2 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #c8a43a, #f5d76e)",
                color: "#1a4a2a",
                borderColor: "#f5d76e",
              }}
              size="lg"
            >
              {t.cta}
            </Button>

            {/* Bottom tulip row */}
            <div className="text-3xl tracking-widest">🌷🌷🌷</div>
          </div>
        </div>

        {/* Traditional ornamental bottom border */}
        <div className="w-full h-6 mt-5 flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, #c8a43a, #f5d76e, #c8a43a, #f5d76e, #c8a43a)",
          }}
        >
          <div className="flex gap-3 items-center">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="text-[10px]" style={{ color: "#1a6b3c" }}>◆</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NauryzBanner;
