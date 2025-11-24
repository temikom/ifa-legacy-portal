import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import CodeOfConduct from "@/components/CodeOfConduct";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Services />
        <CodeOfConduct />
        <Contact />
        <Gallery />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
