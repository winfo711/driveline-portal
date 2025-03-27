import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="neo-morph p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-medium">Visitez nos établissements</h2>
      </div>
      
      <div className="h-[400px] rounded-lg overflow-hidden">
        {/* This would be a real map component in a production app */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Une carte interactive serait affichée ici
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-medium">Siège Social</h3>
          <p className="text-muted-foreground">123 Luxury Lane, San Francisco, CA 94103</p>
        </div>
        
        <div>
          <h3 className="font-medium">Succursale Los Angeles</h3>
          <p className="text-muted-foreground">456 Premium Blvd, Los Angeles, CA 90001</p>
        </div>
        
        <div>
          <h3 className="font-medium">Succursale New York</h3>
          <p className="text-muted-foreground">789 Elite Street, New York, NY 10001</p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
