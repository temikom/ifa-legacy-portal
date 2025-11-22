import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Temple Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Temple Name */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-glow-pulse" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Sacred Temple</span>
              <Sparkles className="h-6 w-6 text-primary animate-glow-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-['Cinzel'] leading-tight">
              ILE IFA OBARA
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                OKANRAN TEMPLE
              </span>
            </h1>
          </div>

          {/* Motto */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-['Crimson_Text'] italic font-semibold">
            Wisdom, Truth and Ancestral Guidance
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Preserving and practicing the sacred wisdom of Ifa according to authentic Yoruba tradition. 
            Guiding individuals to align with their destiny and live spiritually balanced lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8"
              onClick={scrollToContact}
            >
              Get Spiritual Guidance
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
