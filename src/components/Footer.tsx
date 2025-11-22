import templeLogo from "@/assets/temple-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo and Temple Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={templeLogo} alt="Temple Logo" className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-xl font-bold text-foreground font-['Cinzel']">
                    ILE IFA OBARA OKANRAN
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    Wisdom, Truth and Ancestral Guidance
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Preserving authentic Yoruba Ifa tradition and guiding individuals to align with their divine destiny.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground font-['Cinzel']">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.querySelector("#mission")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Mission
                </button>
                <button 
                  onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.querySelector("#conduct")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Code of Conduct
                </button>
                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ILE IFA OBARA OKANRAN TEMPLE. All rights reserved. | Iwo, Osun State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
