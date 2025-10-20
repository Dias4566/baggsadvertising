import { useLanguage } from "@/contexts/LanguageContext";

const TrustedBy = () => {
  const { t } = useLanguage();
  const clients = [
    "Nike", "Adidas", "Coca-Cola", "McDonald's", "Samsung",
    "Apple", "Amazon", "Google", "Microsoft", "Tesla",
    "Nike", "Adidas", "Coca-Cola", "McDonald's", "Samsung"
  ];

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground">
          {t('trusted.title')}
        </h3>
      </div>
      <div className="relative">
        <div className="flex whitespace-nowrap marquee">
          {clients.map((client, index) => (
            <span 
              key={index}
              className="inline-flex items-center justify-center px-8 text-2xl font-black text-secondary-foreground/80"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
