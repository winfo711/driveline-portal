
import { useEffect, useState } from "react";
import { ContactInfo } from "@/components/contact/contactData";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";
import BusinessHours from "@/components/contact/BusinessHours";
import { useSiteSettings } from "@/hooks/use-site-settings";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(ContactInfo);
  
  const { 
    data: settingsData, 
    isLoading, 
    error 
  } = useSiteSettings();
  
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
        <ContactForm />
        <LocationMap />
      </div>
      
      {/* Business Hours */}
      <BusinessHours />
    </div>
  );
};

export default Contact;
