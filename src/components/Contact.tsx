import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2347068922539", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:adebayo07068922539@gmail.com";
  };

  const handleCall = () => {
    window.location.href = "tel:+2347068922539";
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-['Cinzel']">
              Visit <span className="text-primary">Our Temple</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us for spiritual guidance, divination, and ancestral wisdom
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Location Card */}
            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Location
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tayo Giwa Street<br />
                  Olomo's Compound<br />
                  Iwo, Osun State<br />
                  Nigeria
                </p>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-md">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Phone
                </h3>
                <p className="text-muted-foreground">
                  +234 706 892 2539
                </p>
                <Button 
                  onClick={handleCall}
                  variant="outline" 
                  size="sm"
                  className="w-full border-accent hover:bg-accent/10"
                >
                  Call Now
                </Button>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="p-6 shadow-lg hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/30 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-md">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-['Cinzel']">
                  Email
                </h3>
                <p className="text-muted-foreground break-all text-sm">
                  adebayo07068922539@gmail.com
                </p>
                <Button 
                  onClick={handleEmail}
                  variant="outline" 
                  size="sm"
                  className="w-full border-secondary hover:bg-secondary/10"
                >
                  Send Email
                </Button>
              </div>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <Card className="p-8 md:p-12 bg-gradient-primary shadow-elegant animate-scale-in">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center animate-glow-pulse">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground font-['Cinzel']">
                Connect on WhatsApp
              </h3>
              <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                Get instant spiritual guidance and book your consultation through WhatsApp
              </p>
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
