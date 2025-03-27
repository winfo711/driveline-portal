
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ImageGalleryModal from "@/components/ImageGalleryModal";

interface VehicleGalleryProps {
  galleryImages: string[];
}

const VehicleGallery = ({ galleryImages }: VehicleGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  
  const handlePrevImage = () => {
    if (!galleryImages) return;
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  
  const handleNextImage = () => {
    if (!galleryImages) return;
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };
  
  return (
    <>
      <div className="neo-morph overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden cursor-pointer" onClick={() => openGallery(currentImageIndex)}>
          <img 
            src={galleryImages[currentImageIndex]} 
            alt="Vehicle image"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <ArrowLeft className="h-5 w-5 transform rotate-180" />
          </button>
        </div>
        
        <div className="p-4 grid grid-cols-4 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`aspect-[16/9] overflow-hidden border-2 rounded transition-colors ${
                index === currentImageIndex ? "border-primary" : "border-transparent"
              }`}
              onClick={() => openGallery(index)}
            >
              <img 
                src={image} 
                alt={`Vehicle image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      <ImageGalleryModal 
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
        initialIndex={currentImageIndex}
      />
    </>
  );
};

export default VehicleGallery;
