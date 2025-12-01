import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Placeholder for images - user will upload their own
  const images = [
    { id: 1, url: "/placeholder.svg", alt: "Temple ceremony" },
    { id: 2, url: "/placeholder.svg", alt: "Divination session" },
    { id: 3, url: "/placeholder.svg", alt: "Temple rituals" },
    { id: 4, url: "/placeholder.svg", alt: "Herbal preparations" },
    { id: 5, url: "/placeholder.svg", alt: "Temple gathering" },
    { id: 6, url: "/placeholder.svg", alt: "Sacred space" },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-4">
            Temple Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sacred moments and spiritual gatherings at our temple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden border-border/20 hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-cinzel text-sm">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Viewer Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage !== null && (
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;