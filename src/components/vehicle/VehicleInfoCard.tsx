
import { Star, Shield, CircleDollarSign } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { formatPrice } from "@/lib/utils";

interface VehicleInfoCardProps {
  vehicle: any;
  onContactSellerClick: () => void;
  siteName?: string;
}

const VehicleInfoCard = ({ vehicle, onContactSellerClick, siteName = "BP Race Loc" }: VehicleInfoCardProps) => {
  return (
    <div className="neo-morph p-6 sticky top-24">
      <div className="mb-4">
        <h1 className="text-2xl font-medium">{vehicle.name}</h1>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <span>{vehicle.make} {vehicle.model}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-medium text-primary">{formatPrice(parseFloat(vehicle.price))}</div>
        <div className="flex items-center mt-1 gap-1">
          <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Financement disponible</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <CustomButton className="w-full" size="lg">
          Planifier un essai
        </CustomButton>
        
        <CustomButton 
          variant="outline" 
          className="w-full" 
          size="lg"
          onClick={onContactSellerClick}
        >
          Contacter le vendeur
        </CustomButton>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium">{siteName}</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" 
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                (127 avis)
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 rounded-lg bg-secondary/50 text-sm">
          <p className="text-muted-foreground">
            Répond généralement en moins d'une heure
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfoCard;
