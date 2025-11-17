import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import baggsLogo from "@/assets/baggs-logo.png";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B5ABA7]/30 via-background to-primary/5 px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-primary/20 animate-bounce" />
        <Zap className="absolute bottom-1/3 left-1/4 w-6 h-6 text-accent/30 animate-pulse" />
        <TrendingUp className="absolute top-1/3 left-1/3 w-7 h-7 text-primary/20 animate-bounce delay-500" />
      </div>

      {/* Language switcher */}
      <div className="absolute top-8 right-8 z-10">
        <LanguageSwitcher />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <img 
          src={baggsLogo} 
          alt="BAGG'S Advertising" 
          className="h-56 md:h-72 lg:h-96 mx-auto mb-12 mix-blend-darken dark:mix-blend-lighten filter contrast-[2] brightness-75 dark:brightness-125 saturate-150"
        />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[0.95] break-words">
          {t('hero.title1')}
          <span className="block text-primary drop-shadow-lg animate-pulse">
            {t('hero.title2')}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.viewWork')}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg font-bold border-2 border-foreground rounded-full px-10 py-7 hover:bg-foreground hover:text-background transition-all hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.getInTouch')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
