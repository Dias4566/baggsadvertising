import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TrustedBy = () => {
  const { t } = useLanguage();
  const clients = [
    "P&G", "Coca-Cola", "Danone", "Gillette", "Head & Shoulders",
    "Pampers", "Ariel", "Pantene", "Duracell", "The Ritz-Carlton",
    "Londa", "Karcher", "Blend-a-med", "Always", "Tide"
  ];

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground">
          {t('trusted.title')}
        </h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            playOnInit: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {clients.concat(clients).map((client, index) => (
            <CarouselItem key={index} className="pl-4 basis-auto">
              <span className="inline-flex items-center justify-center px-8 text-2xl font-black text-secondary-foreground/80 select-none">
                {client}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TrustedBy;
