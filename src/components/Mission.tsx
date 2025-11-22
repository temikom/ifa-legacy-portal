import { Card } from "@/components/ui/card";
import { Target, Eye, BookOpen } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-['Cinzel']">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to preserving authentic Ifa wisdom and guiding souls toward their divine purpose
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 md:p-12 shadow-elegant border-2 border-primary/20 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-['Cinzel']">
                  Mission Statement
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our mission is to <strong className="text-primary">preserve, teach and practice</strong> the sacred wisdom of Ifa 
                  according to authentic Yoruba tradition, while guiding individuals to align with their destiny (Ori), 
                  cultivate good character and live a spiritually balanced life.
                </p>
              </div>
            </div>
          </Card>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Eye className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Authentic Knowledge Centre
                </h4>
                <p className="text-muted-foreground">
                  To be a centre for authentic Ifa knowledge, preserving the true teachings passed down through generations.
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Destiny Guidance
                </h4>
                <p className="text-muted-foreground">
                  To guide individuals to understand their destiny and walk the path that aligns with their divine purpose.
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Cultural Preservation
                </h4>
                <p className="text-muted-foreground">
                  To preserve ancestral culture and sacred traditions for future generations to come.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
