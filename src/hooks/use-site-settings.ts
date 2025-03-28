
import { useQuery } from "@tanstack/react-query";

// Type for the settings API response
export interface SettingsResponse {
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

export const useSiteSettings = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://admin.bpraceloc.com/api';
  
  const fetchSettings = async (): Promise<SettingsResponse> => {
    const response = await fetch(`${apiBaseUrl}/setting`);
    if (!response.ok) {
      throw new Error("Failed to fetch site settings");
    }
    return response.json();
  };

  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSettings
  });
};
