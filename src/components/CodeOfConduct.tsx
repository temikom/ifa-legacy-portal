import { Card } from "@/components/ui/card";
import { Shield, Heart, Lock, Flame, Users, Scale } from "lucide-react";

const CodeOfConduct = () => {
  const codes = [
    {
      icon: Shield,
      title: "No Exploitation",
      description: "We serve with integrity, never exploiting those who seek guidance"
    },
    {
      icon: Heart,
      title: "No Harmful Practices",
      description: "All rituals and practices promote healing, never harm"
    },
    {
      icon: Lock,
      title: "Confidentiality in Divination",
      description: "All divination sessions are held in strict confidence"
    },
    {
      icon: Flame,
      title: "Respect for All Orisa",
      description: "Honoring all deities and spiritual entities with reverence"
    },
    {
      icon: Users,
      title: "Humanity and Discipline",
      description: "Treating all with compassion while maintaining spiritual discipline"
    },
    {
      icon: Scale,
      title: "Integrity in All Dealings",
      description: "Operating with complete honesty and ethical standards"
    }
  ];

  return (
    <section id="conduct" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-['Cinzel']">
              Code of <span className="text-primary">Conduct</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sacred principles that guide our practice and interactions
            </p>
          </div>

          {/* Code Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codes.map((code, index) => {
              const Icon = code.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-['Cinzel']">
                      {code.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {code.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Declaration */}
          <Card className="mt-16 p-8 md:p-12 bg-card shadow-elegant border-2 border-primary/30 animate-scale-in">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-['Cinzel']">
                Temple Declaration
              </h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-foreground/90 leading-relaxed italic font-['Crimson_Text']">
                  "I, the custodian of <strong className="text-primary font-['Cinzel'] not-italic">ILE IFA OBARA OKANRAN TEMPLE</strong>, 
                  dedicate this temple to <strong className="text-primary not-italic">Orumila</strong>, the Orisa of wisdom, 
                  and to the ancestors who guide our paths. May this house be a place of truth, healing and destiny fulfillment."
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
