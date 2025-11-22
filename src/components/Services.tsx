import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Leaf, GraduationCap } from "lucide-react";
import divinationImg from "@/assets/divination.jpg";
import healingImg from "@/assets/healing-herbs.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Ifa Divination & Odu Interpretation",
      description: "Sacred divination readings to reveal your destiny path and receive guidance from Orumila",
      items: [
        "Personal destiny consultation",
        "Odu sacred sign interpretation",
        "Life path guidance",
        "Spiritual direction"
      ],
      color: "primary",
      image: divinationImg,
    },
    {
      icon: Heart,
      title: "Spiritual Works & Rituals",
      description: "Traditional ceremonies and rituals for alignment, protection, and spiritual balance",
      items: [
        "Sacrifice for alignment",
        "Protection rituals",
        "Destiny alignment rituals for Ori",
        "Marriage blessings",
        "Ifa initiation guidance"
      ],
      color: "secondary",
      image: null,
    },
    {
      icon: Leaf,
      title: "Herbal & Healing Services",
      description: "Traditional African herbal medicine and spiritual cleansing practices",
      items: [
        "Traditional herbal medicine",
        "Spiritual cleansing baths",
        "Home cleansing rituals",
        "Protection amulets & charms"
      ],
      color: "accent",
      image: healingImg,
    },
    {
      icon: GraduationCap,
      title: "Education & Philosophy",
      description: "Learn the sacred teachings of Ifa philosophy and Yoruba spiritual traditions",
      items: [
        "Ifa philosophy classes",
        "Yoruba spiritual teachings",
        "Traditional wisdom sessions",
        "Ancestral knowledge transfer"
      ],
      color: "primary",
      image: null,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-['Cinzel']">
              Sacred <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic spiritual services rooted in traditional Yoruba Ifa wisdom
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 group border-2 border-transparent hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${
                        service.color === 'primary' ? 'bg-gradient-primary' :
                        service.color === 'accent' ? 'bg-gradient-accent' :
                        'bg-secondary'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          service.color === 'primary' ? 'text-primary-foreground' :
                          service.color === 'accent' ? 'text-accent-foreground' :
                          'text-secondary-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground font-['Cinzel'] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
