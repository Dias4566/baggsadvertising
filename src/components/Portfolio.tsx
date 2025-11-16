import portfolioOutdoor from "@/assets/portfolio-outdoor-billboard.jpg";
import portfolioOutdoorNight from "@/assets/portfolio-outdoor-night.jpg";
import portfolioRitzCarltonDay from "@/assets/portfolio-ritzcarlton-day.jpg";
import portfolioDuracell from "@/assets/portfolio-duracell.jpg";
import portfolioRetailStand from "@/assets/portfolio-retail-stand.jpg";
import portfolioHeadShoulders from "@/assets/portfolio-headshoulders.jpg";
import portfolioHeadShouldersDisplay from "@/assets/portfolio-headshoulders-display.jpg";
import portfolioGillette from "@/assets/portfolio-gillette.jpg";
import portfolioGillette2 from "@/assets/portfolio-gillette-2.jpg";
import portfolioPantene from "@/assets/portfolio-pantene.jpg";
import portfolioPanteneDisplay from "@/assets/portfolio-pantene-display.jpg";
import portfolioPampersStand from "@/assets/portfolio-pampers-stand.jpg";
import portfolioGiftBox from "@/assets/portfolio-gift-box.jpg";
import portfolioOldSpice from "@/assets/portfolio-oldspice.jpg";
import portfolioGilletteStand from "@/assets/portfolio-gillette-stand.jpg";
import portfolioPampersDisplay from "@/assets/portfolio-pampers-display.jpg";
import portfolioPampersDisplay2 from "@/assets/portfolio-pampers-display-2.jpg";
import portfolioGilletteSoccer from "@/assets/portfolio-gillette-soccer.jpg";
import portfolioGilletteSoccer2 from "@/assets/portfolio-gillette-soccer-2.jpg";
import portfolioGilletteVenus from "@/assets/portfolio-gillette-venus.jpg";
import portfolioCocaColaChristmas from "@/assets/portfolio-cocacola-christmas.jpg";
import portfolioPampersRetail from "@/assets/portfolio-pampers-retail.jpg";
import portfolioHerbalArchRoses from "@/assets/portfolio-herbal-arch-roses.jpg";
import portfolioHerbalArchDaisies from "@/assets/portfolio-herbal-arch-daisies.jpg";
import portfolioHerbalStand from "@/assets/portfolio-herbal-stand.jpg";
import portfolioAlwaysDisplay from "@/assets/portfolio-always-display.jpg";
import portfolioAlwaysDisplay2 from "@/assets/portfolio-always-display-2.jpg";
import portfolioNaturellaDisplay from "@/assets/portfolio-naturella-display.jpg";
import portfolioFairyDisplay from "@/assets/portfolio-fairy-display.jpg";
import portfolioFairyStand from "@/assets/portfolio-fairy-stand.jpg";
import portfolioArielArch from "@/assets/portfolio-ariel-arch.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: t('portfolio.pantene.title'),
      category: t('portfolio.pantene.category'),
      images: [portfolioPanteneDisplay, portfolioPantene]
    },
    {
      title: t('portfolio.ritz.title'),
      category: t('portfolio.ritz.category'),
      images: [portfolioRitzCarltonDay, portfolioOutdoorNight, portfolioOutdoor]
    },
    {
      title: t('portfolio.herbal.title'),
      category: t('portfolio.herbal.category'),
      images: [portfolioHerbalArchRoses, portfolioHerbalArchDaisies, portfolioHerbalStand]
    },
    {
      title: t('portfolio.cocacola.title'),
      category: t('portfolio.cocacola.category'),
      images: [portfolioCocaColaChristmas]
    },
    {
      title: t('portfolio.gilletteSoccer.title'),
      category: t('portfolio.gilletteSoccer.category'),
      images: [portfolioGilletteSoccer, portfolioGilletteSoccer2]
    },
    {
      title: t('portfolio.always.title'),
      category: t('portfolio.always.category'),
      images: [portfolioAlwaysDisplay, portfolioAlwaysDisplay2]
    },
    {
      title: t('portfolio.pampers.title'),
      category: t('portfolio.pampers.category'),
      images: [portfolioPampersDisplay2, portfolioPampersStand, portfolioPampersRetail, portfolioPampersDisplay]
    },
    {
      title: t('portfolio.naturella.title'),
      category: t('portfolio.naturella.category'),
      images: [portfolioNaturellaDisplay]
    },
    {
      title: t('portfolio.fairy.title'),
      category: t('portfolio.fairy.category'),
      images: [portfolioFairyDisplay, portfolioFairyStand]
    },
    {
      title: t('portfolio.ariel.title'),
      category: t('portfolio.ariel.category'),
      images: [portfolioArielArch]
    },
    {
      title: t('portfolio.giftbox.title'),
      category: t('portfolio.giftbox.category'),
      images: [portfolioGiftBox]
    },
    {
      title: t('portfolio.oldspice.title'),
      category: t('portfolio.oldspice.category'),
      images: [portfolioOldSpice]
    },
    {
      title: t('portfolio.gillette.title'),
      category: t('portfolio.gillette.category'),
      images: [portfolioGilletteStand, portfolioGillette, portfolioGillette2, portfolioGilletteVenus]
    },
    {
      title: t('portfolio.duracell.title'),
      category: t('portfolio.duracell.category'),
      images: [portfolioDuracell]
    },
    {
      title: t('portfolio.retailstand.title'),
      category: t('portfolio.retailstand.category'),
      images: [portfolioRetailStand]
    },
    {
      title: t('portfolio.headshoulders.title'),
      category: t('portfolio.headshoulders.category'),
      images: [portfolioHeadShouldersDisplay, portfolioHeadShoulders]
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          {t('portfolio.title')}
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          {t('portfolio.description')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-primary text-base font-bold mb-1">{project.category}</p>
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                      {project.images.length > 1 && (
                        <p className="text-white/80 text-sm mt-2">+{project.images.length - 1} more</p>
                      )}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-bold">{project.category}</p>
                  </div>
                  <div className="grid gap-4">
                    {project.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image} 
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        className="w-full rounded-lg object-contain bg-muted"
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
