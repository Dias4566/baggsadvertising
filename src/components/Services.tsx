import { Lightbulb, Image, Shapes, Building, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "LED Lights",
    description: "Bright, energy-efficient LED displays that command attention day and night."
  },
  {
    icon: Image,
    title: "Banners",
    description: "High-quality indoor and outdoor banners in any size and material."
  },
  {
    icon: Shapes,
    title: "POSM",
    description: "Eye-catching point of sale materials that drive customer engagement."
  },
  {
    icon: Building,
    title: "Facade Advertising",
    description: "Transform building exteriors into powerful brand statements."
  },
  {
    icon: Store,
    title: "Outdoor Advertising",
    description: "Weather-resistant solutions designed to withstand any conditions."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4">
          What We Create
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          Complete advertising solutions for any space
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl rounded-3xl overflow-hidden group"
            >
              <CardContent className="p-8">
                <service.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-base text-muted-foreground font-medium">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
