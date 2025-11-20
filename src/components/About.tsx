import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, MapPin, Users, Award } from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-background to-[#B5ABA7]/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          {t('about.title')}
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          {t('about.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4 flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('about.history.title')}</h3>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {t('about.history.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4 flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('about.presence.title')}</h3>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {t('about.presence.description')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4 flex-shrink-0">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('about.expertise.title')}</h3>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {t('about.expertise.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4 flex-shrink-0">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('about.team.title')}</h3>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {t('about.team.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Divisions */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-border">
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">
            {t('about.divisions.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.architecture')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.electrical')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.metal')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.production')}</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.carpentry')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.plastic')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.printing')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-base font-medium">{t('about.divisions.logistics')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logistics and Installation */}
        <div className="mt-12 bg-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-center">
            {t('about.logistics.title')}
          </h3>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            {t('about.logistics.partnerships')}
          </p>
          <p className="text-base text-muted-foreground font-medium leading-relaxed text-center max-w-3xl mx-auto">
            {t('about.logistics.advantages')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
