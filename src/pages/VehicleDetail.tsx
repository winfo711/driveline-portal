import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Shield, Calendar, Car, MapPin, GaugeCircle, Clock, Fuel, Settings, Key, CircleDollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import CustomButton from "@/components/ui/custom-button";
import { useToast } from "@/hooks/use-toast";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import ContactSellerModal from "@/components/ContactSellerModal";
import { formatPrice } from "@/lib/utils";
import { 
  getDisplayValue, 
  transformFeatures, 
  conditions, 
  colors, 
  transmissions, 
  fuel_types,
  drive_types,
  features as featuresMap,
  safety_features as safetyFeaturesMap
} from "@/lib/vehicleData";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
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
  
  const handlePrevImage = () => {
    if (!vehicle || !vehicle.gallery) return;
    setCurrentImageIndex((prev) => (prev === 0 ? vehicle.gallery.length - 1 : prev - 1));
  };
  
  const handleNextImage = () => {
    if (!vehicle || !vehicle.gallery) return;
    setCurrentImageIndex((prev) => (prev === vehicle.gallery.length - 1 ? 0 : prev + 1));
  };
  
  const handleContactSeller = () => {
    setContactModalOpen(true);
  };
  
  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
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
      <div className="mb-6">
        <Link 
          to="/vehicles" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Vehicles
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="neo-morph overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden cursor-pointer" onClick={() => openGallery(currentImageIndex)}>
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={vehicle.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <ArrowLeft className="h-5 w-5 transform rotate-180" />
              </button>
            </div>
            
            <div className="p-4 grid grid-cols-4 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-[16/9] overflow-hidden border-2 rounded transition-colors ${
                    index === currentImageIndex ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => openGallery(index)}
                >
                  <img 
                    src={image} 
                    alt={`${vehicle.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="neo-morph p-6">
            <h2 className="text-2xl font-medium mb-6">Vehicle Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p>{vehicle.year}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GaugeCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p>{vehicle.mileage.toLocaleString()} miles</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>{vehicle.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Condition</p>
                    <p>{getDisplayValue(vehicle.condition, conditions, vehicle.condition)}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Exterior Color</p>
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
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p>{getDisplayValue(vehicle.fuel_type, fuel_types, vehicle.fuel_type)}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Key className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">VIN</p>
                    <p className="font-mono text-sm">{vehicle.vin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="neo-morph p-6">
            <h2 className="text-2xl font-medium mb-4">Description</h2>
            <div 
              className="text-foreground/90 whitespace-pre-line leading-relaxed"
              dangerouslySetInnerHTML={{ __html: vehicle.description }}
            />
          </div>
          
          <div className="neo-morph p-6">
            <h2 className="text-2xl font-medium mb-4">Features & Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
              {displayFeatures.map((feature: string, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {displaySafetyFeatures.length > 0 && (
            <div className="neo-morph p-6">
              <h2 className="text-2xl font-medium mb-4">Safety Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {displaySafetyFeatures.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
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
                <span className="text-sm text-muted-foreground">Financing Available</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <CustomButton className="w-full" size="lg">
                Schedule Test Drive
              </CustomButton>
              
              <CustomButton 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={handleContactSeller}
              >
                Contact Seller
              </CustomButton>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">BP Race Loc</p>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3.5 w-3.5 text-yellow-400 fill-yellow-400`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      (127 reviews)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 rounded-lg bg-secondary/50 text-sm">
                <p className="text-muted-foreground">
                  Typically responds within 1 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageGalleryModal 
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
        initialIndex={currentImageIndex}
      />

      <ContactSellerModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        vehicleName={vehicle.name}
      />
    </div>
  );
};

export default VehicleDetail;
