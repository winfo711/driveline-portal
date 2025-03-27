
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToVehiclesLink = () => {
  return (
    <div className="mb-6">
      <Link 
        to="/vehicles" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Vehicles
      </Link>
    </div>
  );
};

export default BackToVehiclesLink;
