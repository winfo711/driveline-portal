
import { Calendar, GaugeCircle, MapPin, Shield, Car, Settings, Fuel, Key } from "lucide-react";
import { 
  getDisplayValue, 
  conditions, 
  colors, 
  transmissions, 
  fuel_types 
} from "@/lib/vehicleData";

interface VehicleDetailsProps {
  vehicle: any;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  return (
    <div className="neo-morph p-6">
      <h2 className="text-2xl font-medium mb-6">Détails du véhicule</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Année</p>
              <p>{vehicle.year}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <GaugeCircle className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Kilométrage</p>
              <p>{vehicle.mileage.toLocaleString()} km</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Emplacement</p>
              <p>{vehicle.location}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">État</p>
              <p>{getDisplayValue(vehicle.condition, conditions, vehicle.condition)}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Car className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Couleur Extérieure</p>
              <p>{getDisplayValue(vehicle.color, colors, vehicle.color)}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Settings className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Transmission</p>
              <p>{getDisplayValue(vehicle.transmission, transmissions, vehicle.transmission)}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Fuel className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Type de Carburant</p>
              <p>{getDisplayValue(vehicle.fuel_type, fuel_types, vehicle.fuel_type)}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Key className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Numéro de Série</p>
              <p className="font-mono text-sm">{vehicle.vin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
