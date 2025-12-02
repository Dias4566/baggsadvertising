import { Lightbulb, Image, Shapes, Building, Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";


const Services = () => {
  const { t } = useLanguage();
  
  const servicesData = [
    {
      icon: Lightbulb,
      title: t('services.led.title'),
      description: t('services.led.description')
    },
    {
      icon: Image,
      title: t('services.outdoor.title'),
      description: t('services.outdoor.description')
    },
    {
      icon: Shapes,
      title: t('services.interior.title'),
      description: t('services.interior.description')
    },
    {
      icon: Building,
      title: t('services.facade.title'),
      description: t('services.facade.description')
    },
    {
      icon: Scissors,
      title: t('services.laser.title'),
      description: t('services.laser.description')
    }
  ];
  
  return (
    <section id="services" className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          {t('services.title')}
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          {t('services.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
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
