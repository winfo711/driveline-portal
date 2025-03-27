import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { 
  transformFeatures, 
  features as featuresMap, 
  safety_features as safetyFeaturesMap,
  conditions,
  colors,
  transmissions,
  fuel_types,
  getDisplayValue
} from "@/lib/vehicleData";
import { formatPrice } from "@/lib/utils";
import ContactSellerModal from "@/components/ContactSellerModal";
import BackToVehiclesLink from "@/components/vehicle/BackToVehiclesLink";
import VehicleGallery from "@/components/vehicle/VehicleGallery";
import VehicleInfoCard from "@/components/vehicle/VehicleInfoCard";
import VehicleDetails from "@/components/vehicle/VehicleDetails";
import VehicleDescription from "@/components/vehicle/VehicleDescription";
import VehicleFeatures from "@/components/vehicle/VehicleFeatures";
import VehicleSafetyFeatures from "@/components/vehicle/VehicleSafetyFeatures";

const fetchVehicleBySlug = async (slug: string) => {
  const response = await fetch(`https://admin.bpraceloc.com/api/car/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch vehicle details");
  }
  const data = await response.json();
  return data?.data?.car || null;
};

const VehicleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { 
    data: vehicle, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['vehicle', slug],
    queryFn: () => fetchVehicleBySlug(slug || ''),
    enabled: !!slug,
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load vehicle details. Redirecting to vehicles page.",
        variant: "destructive",
      });
      
      setTimeout(() => {
        navigate("/vehicles", { replace: true });
      }, 3000);
    }
  }, [error, navigate, toast]);

  useEffect(() => {
    if (vehicle) {
      const vehicleTitle = `${vehicle.name} ${vehicle.year} | BP Race Loc`;
      const vehicleDescription = `Découvrez ${vehicle.name} ${vehicle.year} à ${formatPrice(parseFloat(vehicle.price))}. ${getDisplayValue(vehicle.condition, conditions, vehicle.condition)}, ${vehicle.mileage.toLocaleString()} km, ${getDisplayValue(vehicle.transmission, transmissions, vehicle.transmission)}, ${getDisplayValue(vehicle.fuel_type, fuel_types, vehicle.fuel_type)}.`;
      
      document.title = vehicleTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", vehicleDescription);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) ogTitle.setAttribute("content", vehicleTitle);
      if (ogDescription) ogDescription.setAttribute("content", vehicleDescription);
      if (vehicle.gallery && vehicle.gallery.length > 0 && ogImage) {
        ogImage.setAttribute("content", `https://admin.bpraceloc.com/storage/${vehicle.gallery[0]}`);
      }
      if (ogUrl) ogUrl.setAttribute("content", `https://bpraceloc.com/vehicles/${slug}`);
      
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      
      if (twitterTitle) twitterTitle.setAttribute("content", vehicleTitle);
      if (twitterDescription) twitterDescription.setAttribute("content", vehicleDescription);
      if (vehicle.gallery && vehicle.gallery.length > 0 && twitterImage) {
        twitterImage.setAttribute("content", `https://admin.bpraceloc.com/storage/${vehicle.gallery[0]}`);
      }

      const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
      if (existingJsonLd) {
        existingJsonLd.remove();
      }

      const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Vehicle",
        "name": vehicle.name,
        "brand": {
          "@type": "Brand",
          "name": vehicle.make
        },
        "model": vehicle.model,
        "vehicleModelDate": vehicle.year,
        "vehicleConfiguration": getDisplayValue(vehicle.transmission, transmissions, vehicle.transmission),
        "fuelType": getDisplayValue(vehicle.fuel_type, fuel_types, vehicle.fuel_type),
        "color": getDisplayValue(vehicle.color, colors, vehicle.color),
        "mileageFromOdometer": {
          "@type": "QuantitativeValue",
          "value": vehicle.mileage,
          "unitCode": "KMT"
        },
        "offers": {
          "@type": "Offer",
          "price": vehicle.price,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        },
        "description": vehicleDescription,
        "image": vehicle.gallery && vehicle.gallery.length > 0 ? 
          `https://admin.bpraceloc.com/storage/${vehicle.gallery[0]}` : ""
      };

      const script = document.createElement('script');
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [vehicle, slug]);
  
  const handleContactSeller = () => {
    setContactModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="page-container py-16 flex justify-center items-center">
        <div className="neo-morph p-6 rounded-xl">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }
  
  if (!vehicle) {
    return null;
  }
  
  const galleryImages = vehicle.gallery.map(
    (img: string) => `https://admin.bpraceloc.com/storage/${img}`
  );
  
  const displayFeatures = transformFeatures(vehicle.features, featuresMap);
  const displaySafetyFeatures = transformFeatures(vehicle.safety_features, safetyFeaturesMap);
  
  return (
    <div className="page-container">
      <BackToVehiclesLink />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <VehicleGallery galleryImages={galleryImages} />
          <VehicleDetails vehicle={vehicle} />
          <VehicleDescription description={vehicle.description} />
          <VehicleFeatures features={displayFeatures} />
          {displaySafetyFeatures.length > 0 && (
            <VehicleSafetyFeatures safetyFeatures={displaySafetyFeatures} />
          )}
        </div>
        
        <div>
          <VehicleInfoCard
            vehicle={vehicle}
            onContactSellerClick={handleContactSeller}
          />
        </div>
      </div>

      <ContactSellerModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        vehicleName={vehicle.name}
      />
    </div>
  );
};

export default VehicleDetail;
