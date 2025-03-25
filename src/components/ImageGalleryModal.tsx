
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex: number;
}

const ImageGalleryModal = ({
  isOpen,
  onClose,
  images,
  initialIndex
}: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Reset to initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle touch swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle mouse drag events for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false);
      setDragStart(null);
      setDragEnd(null);
      return;
    }
    
    const distance = dragStart - dragEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      handleNext();
    } else if (isRightDrag) {
      handlePrevious();
    }

    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(null);
      setDragEnd(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0 border-none bg-transparent shadow-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            className={`w-full h-full flex items-center justify-center bg-black/90 rounded-lg ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            <img 
              src={images[currentIndex]} 
              alt={`Image ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              draggable="false"
            />
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryModal;
