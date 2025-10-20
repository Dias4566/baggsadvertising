import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#B5ABA7]/30 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Make Your Brand
          <span className="block text-primary">Impossible to Miss</span>
        </h1>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
          Professional advertising solutions that capture attention. From LED displays to outdoor banners, we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base font-bold border-2 border-foreground rounded-full px-8 py-6 hover:bg-foreground hover:text-background"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
