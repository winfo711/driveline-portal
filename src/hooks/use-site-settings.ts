
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
  const fetchSettings = async (): Promise<SettingsResponse> => {
    const response = await fetch("https://admin.bpraceloc.com/api/setting");
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
