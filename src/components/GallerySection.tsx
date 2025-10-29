import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryHorizontal } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Dr. Miller consulting with a patient",
      category: "Consultation",
    },
    {
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Modern medical office reception area",
      category: "Facility",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Cardiology procedure in progress",
      category: "Procedures",
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Dr. Miller with medical team",
      category: "Team",
    },
    {
      src: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Advanced cardiac monitoring equipment",
      category: "Equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Patient consultation in office",
      category: "Consultation",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
          <div className="flex justify-center items-center p-2">
            <img
              src={selectedImage || ""}
              alt="Gallery preview"
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
