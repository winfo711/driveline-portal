
import { MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Type for the settings API response
interface SettingsResponse {
  error: boolean;
  message: string;
  data: {
    settings: {
      site_phone: string;
      site_name: string;
      site_address: string;
      site_mail: string;
      site_logo: string;
      site_description: string;
      site_maps: string;
    }
  }
}

const fetchSettings = async (): Promise<SettingsResponse> => {
  const response = await fetch("https://admin.bpraceloc.com/api/setting");
  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }
  return response.json();
};

const LocationMap = () => {
  const { data: settingsData } = useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSettings
  });

  const mapUrl = settingsData?.data.settings.site_maps || "https://maps.app.goo.gl/oXQzgS9pzNBnSm7X6";
  const address = settingsData?.data.settings.site_address || "123 Luxury Lane, San Francisco, CA 94103";

  return (
    <div className="neo-morph p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-medium">Visitez nos établissements</h2>
      </div>
      
      <a 
        href={mapUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-[400px] rounded-lg overflow-hidden transition-transform hover:scale-[1.01]"
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Cliquez pour ouvrir la carte
            </p>
          </div>
        </div>
      </a>
      
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-medium">Siège Social</h3>
          <p className="text-muted-foreground">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
