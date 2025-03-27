
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

interface VehicleCardProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  image: string;
  location: string;
  slug: string;
}

const VehicleCard = ({ id, title, price, year, mileage, image, location, slug }: VehicleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
    setImageLoaded(true); // Still set as loaded to remove loading spinner
  };
  
  // Make sure we have a valid slug from the API or generate a fallback
  const vehicleSlug = slug || `vehicle-${id}`;
  
  return (
    <Link 
      to={`/vehicles/${vehicleSlug}`}
      className="group block overflow-hidden neo-morph hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className={`absolute inset-0 bg-gray-100 ${imageLoaded ? 'hidden' : 'block'}`}>
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-gray-300 border-t-transparent animate-spin"></div>
          </div>
        </div>
        
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-sm text-muted-foreground">Image unavailable</p>
          </div>
        ) : (
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="px-3 py-1.5 bg-white/90 rounded-md text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-base md:text-lg truncate">{title}</h3>
          <span className="text-primary font-medium">{formatPrice(price, '€')}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>{year}</span>
          <span className="mx-2">•</span>
          <span>{mileage.toLocaleString()} mi</span>
          <span className="mx-2">•</span>
          <span className="truncate">{location}</span>
        </div>
        
        <div className="pt-2 border-t border-gray-100">
          <span className="text-xs text-muted-foreground">View details →</span>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
