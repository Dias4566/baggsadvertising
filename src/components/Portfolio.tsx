import portfolioOutdoor from "@/assets/portfolio-outdoor-billboard.jpg";
import portfolioDuracell from "@/assets/portfolio-duracell.jpg";
import portfolioRetailStand from "@/assets/portfolio-retail-stand.jpg";
import portfolioHeadShoulders from "@/assets/portfolio-headshoulders.jpg";
import portfolioGillette from "@/assets/portfolio-gillette.jpg";
import portfolioGillette2 from "@/assets/portfolio-gillette-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Ritz-Carlton Outdoor Billboard",
      category: "Outdoor Advertising",
      image: portfolioOutdoor
    },
    {
      title: "Duracell Retail Display",
      category: "POSM",
      image: portfolioDuracell
    },
    {
      title: "Retail Product Stand",
      category: "POSM",
      image: portfolioRetailStand
    },
    {
      title: "Head & Shoulders Display",
      category: "POSM",
      image: portfolioHeadShoulders
    },
    {
      title: "Gillette LED Display",
      category: "LED & POSM",
      image: portfolioGillette
    },
    {
      title: "Gillette Retail Stand",
      category: "POSM",
      image: portfolioGillette2
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          {t('portfolio.title')}
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          {t('portfolio.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-base font-bold mb-1">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
