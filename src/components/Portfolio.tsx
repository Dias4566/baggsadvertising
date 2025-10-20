import portfolioLed from "@/assets/portfolio-led.jpg";
import portfolioBanner from "@/assets/portfolio-banner.jpg";
import portfolioPosm from "@/assets/portfolio-posm.jpg";
import portfolioFacade from "@/assets/portfolio-facade.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Retail LED Display",
      category: "LED Lights",
      image: portfolioLed
    },
    {
      title: "Shopping Mall Banner",
      category: "Banners",
      image: portfolioBanner
    },
    {
      title: "Product Display",
      category: "POSM",
      image: portfolioPosm
    },
    {
      title: "Building Facade",
      category: "Facade Advertising",
      image: portfolioFacade
    },
    {
      title: "Outdoor Billboard",
      category: "Outdoor Advertising",
      image: portfolioBanner
    },
    {
      title: "Storefront Signage",
      category: "LED Lights",
      image: portfolioLed
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          Our Portfolio
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          Projects that made an impact
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
