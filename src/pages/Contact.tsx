
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ContactInfo } from "@/components/contact/contactData";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";
import BusinessHours from "@/components/contact/BusinessHours";

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

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(ContactInfo);
  
  const { 
    data: settingsData, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSettings
  });
  
  useEffect(() => {
    if (settingsData && !isLoading) {
      const settings = settingsData.data.settings;
      
      // Create updated contact info with API data
      const updatedContactInfo = [
        {
          ...ContactInfo[0],
          content: settings.site_phone || ContactInfo[0].content,
        },
        {
          ...ContactInfo[1],
          content: settings.site_mail || ContactInfo[1].content,
        },
        {
          ...ContactInfo[2],
          content: settings.site_address || ContactInfo[2].content,
        },
      ];
      
      setContactInfo(updatedContactInfo);
    }
  }, [settingsData, isLoading]);

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <h1 className="font-medium mb-4">Contactez-nous</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vous avez des questions concernant nos véhicules ou nos services ? Contactez notre équipe et nous nous ferons un plaisir de vous aider.
        </p>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {contactInfo.map((item, index) => (
          <ContactInfoCard
            key={index}
            title={item.title}
            icon={item.icon}
            content={item.content}
            subtext={item.subtext}
          />
        ))}
      </div>
      
      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm siteName={settingsData?.data.settings.site_name || "AutoElite"} />
        <LocationMap />
      </div>
      
      {/* Business Hours */}
      <BusinessHours />
    </div>
  );
};

export default Contact;
