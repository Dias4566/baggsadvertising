import portfolioOutdoor from "@/assets/portfolio-outdoor-billboard.jpg";
import portfolioDuracell from "@/assets/portfolio-duracell.jpg";
import portfolioRetailStand from "@/assets/portfolio-retail-stand.jpg";
import portfolioHeadShoulders from "@/assets/portfolio-headshoulders.jpg";
import portfolioGillette from "@/assets/portfolio-gillette.jpg";
import portfolioGillette2 from "@/assets/portfolio-gillette-2.jpg";
import portfolioPantene from "@/assets/portfolio-pantene.jpg";
import portfolioPampersStand from "@/assets/portfolio-pampers-stand.jpg";
import portfolioGiftBox from "@/assets/portfolio-gift-box.jpg";
import portfolioOldSpice from "@/assets/portfolio-oldspice.jpg";
import portfolioGilletteStand from "@/assets/portfolio-gillette-stand.jpg";
import portfolioPampersDisplay from "@/assets/portfolio-pampers-display.jpg";
import portfolioGilletteSoccer from "@/assets/portfolio-gillette-soccer.jpg";
import portfolioGilletteSoccer2 from "@/assets/portfolio-gillette-soccer-2.jpg";
import portfolioCocaColaChristmas from "@/assets/portfolio-cocacola-christmas.jpg";
import portfolioPampersRetail from "@/assets/portfolio-pampers-retail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Pantene Mall Display",
      category: "Outdoor Advertising",
      images: [portfolioPantene]
    },
    {
      title: "Ritz-Carlton Outdoor Billboard",
      category: "Outdoor Advertising",
      images: [portfolioOutdoor]
    },
    {
      title: "Coca-Cola Christmas Display",
      category: "POSM & Seasonal",
      images: [portfolioCocaColaChristmas]
    },
    {
      title: "Gillette Soccer Campaign",
      category: "POSM",
      images: [portfolioGilletteSoccer, portfolioGilletteSoccer2]
    },
    {
      title: "Pampers Retail Displays",
      category: "POSM",
      images: [portfolioPampersStand, portfolioPampersRetail]
    },
    {
      title: "Gift Box Display",
      category: "Seasonal POSM",
      images: [portfolioGiftBox]
    },
    {
      title: "Old Spice Retail Display",
      category: "POSM",
      images: [portfolioOldSpice]
    },
    {
      title: "Gillette Retail Displays",
      category: "POSM",
      images: [portfolioGilletteStand, portfolioGillette, portfolioGillette2]
    },
    {
      title: "Duracell Retail Display",
      category: "POSM",
      images: [portfolioDuracell]
    },
    {
      title: "Retail Product Stand",
      category: "POSM",
      images: [portfolioRetailStand]
    },
    {
      title: "Head & Shoulders Display",
      category: "POSM",
      images: [portfolioHeadShoulders]
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
                  className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                        className="w-full rounded-lg object-cover"
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
