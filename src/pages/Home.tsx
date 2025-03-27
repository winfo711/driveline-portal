
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Car, Search, FileText, Truck } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import VehicleCard from "@/components/VehicleCard";

const fetchFeaturedListings = async () => {
  const response = await fetch("https://admin.bpraceloc.com/api/featured");
  if (!response.ok) {
    throw new Error("Failed to fetch featured listings");
  }
  return response.json();
};

const fetchHeaderData = async () => {
  const response = await fetch("https://admin.bpraceloc.com/api/hearder");
  if (!response.ok) {
    throw new Error("Failed to fetch header data");
  }
  return response.json();
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { 
    data: featuredData, 
    isLoading: isFeaturedLoading, 
    error: featuredError 
  } = useQuery({
    queryKey: ['featuredListings'],
    queryFn: fetchFeaturedListings
  });
  
  const {
    data: headerData,
    isLoading: isHeaderLoading,
    error: headerError
  } = useQuery({
    queryKey: ['headerData'],
    queryFn: fetchHeaderData
  });
  
  const testimonials = [
    {
      quote: "L'expérience d'achat de voiture la plus fluide que j'ai jamais eue. Tout, de la navigation à la livraison, était parfait.",
      author: "Emma Thompson",
      role: "Acheteur Vérifié"
    },
    {
      quote: "J'hésitais à acheter une voiture en ligne, mais AutoElite a rendu le processus incroyablement simple et transparent.",
      author: "Michael Chen",
      role: "Acheteur Vérifié"
    },
    {
      quote: "Leur attention aux détails et leur service client sont inégalés. Je n'achèterai jamais une voiture autrement.",
      author: "Sarah Johnson",
      role: "Acheteur Vérifié"
    }
  ];
  
  const heroImages = headerData?.data?.hearder?.map(
    (item) => `https://admin.bpraceloc.com/storage/${item.image}`
  ) || [
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000&h=1200",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=2000&h=1200",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000&h=1200",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  const formatFeaturedListings = () => {
    if (!featuredData || !featuredData.data || !featuredData.data.featured_listings) {
      return [];
    }
    
    return featuredData.data.featured_listings.map(listing => ({
      id: listing.id.toString(),
      title: listing.name,
      price: parseFloat(listing.price),
      year: parseInt(listing.year),
      mileage: listing.mileage,
      image: `https://admin.bpraceloc.com/storage/${listing.gallery[0]}`,
      location: listing.location,
      slug: listing.slug
    }));
  };
  
  const featuredVehicles = formatFeaturedListings();
  
  const getCurrentHeaderData = () => {
    if (!headerData?.data?.hearder || headerData.data.hearder.length === 0) {
      return {
        title: "Découvrez Votre Conduite Parfaite",
        description: "Véhicules premium avec des prix transparents et une expérience fluide."
      };
    }
    return {
      title: headerData.data.hearder[currentImageIndex]?.title || "Découvrez Votre Conduite Parfaite",
      description: headerData.data.hearder[currentImageIndex]?.description || "Véhicules premium avec des prix transparents et une expérience fluide."
    };
  };
  
  const currentHeader = getCurrentHeaderData();
  
  return (
    <div className="animate-fade-in">
      <section className="relative h-[90vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image} 
              alt="Luxury Car" 
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
        ))}
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-4">
              {currentHeader.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {currentHeader.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/vehicles">
                <CustomButton size="lg">
                  Parcourir les Véhicules
                </CustomButton>
              </Link>
              <Link to="/how-it-works">
                <CustomButton variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">
                  Comment Ça Marche
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="glass-morph py-5 px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Shield className="h-5 w-5 text-white/70" />
                <span className="text-sm text-white">Véhicules Vérifiés</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Star className="h-5 w-5 text-white/70" />
                <span className="text-sm text-white">Retours sous 5 Jours</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Car className="h-5 w-5 text-white/70" />
                <span className="text-sm text-white">Livraison à Domicile</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full animate-float" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium">Véhicules en Vedette</h2>
            <Link to="/vehicles" className="text-sm font-medium flex items-center hover:text-primary transition-colors">
              Voir Tous <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {isFeaturedLoading ? (
            <div className="py-16 text-center">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Chargement des véhicules en vedette...</p>
            </div>
          ) : featuredError ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Impossible de charger les véhicules en vedette pour le moment.</p>
            </div>
          ) : featuredVehicles.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Aucun véhicule en vedette disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  id={vehicle.id}
                  title={vehicle.title}
                  price={vehicle.price}
                  year={vehicle.year}
                  mileage={vehicle.mileage}
                  image={vehicle.image}
                  location={vehicle.location}
                  slug={vehicle.slug}
                />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Link to="/vehicles">
              <CustomButton size="lg">
                Explorer Tous les Véhicules
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Comment Ça Marche</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous avons simplifié le processus d'achat de votre prochain véhicule pour le rendre fluide et agréable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <Search className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Recherche & Sélection</h3>
              <p className="text-muted-foreground">
                Explorez notre sélection soignée de véhicules premium et trouvez votre correspondance parfaite.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Financement Facile</h3>
              <p className="text-muted-foreground">
                Prix transparents et options de financement flexibles pour répondre à vos besoins.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Livraison à Domicile</h3>
              <p className="text-muted-foreground">
                Votre nouveau véhicule livré directement à votre porte à votre convenance.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/how-it-works">
              <CustomButton variant="outline" size="lg">
                En Savoir Plus sur Notre Processus
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-radial from-secondary to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ne vous fiez pas seulement à notre parole. Voici ce que nos clients disent de leur expérience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="neo-morph p-6 md:p-8 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-foreground/90 group-hover:text-foreground transition-colors">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Avis Vérifiés Google</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de nous sur Google.
            </p>
          </div>
          
          <div className="neo-morph p-4 rounded-xl">
            <iframe 
              style={{ width: '100%', height: '700px' }} 
              scrolling="yes" 
              className="responsive-item col-lg-12 col-md-12 col-sm-12" 
              src="https://digitalreviews.icu/api/widgets/embedded/1/3?tabs=no&hide_search=yes" 
              allowFullScreen
              title="Avis Vérifiés Google"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-primary-foreground">Prêt à Trouver la Voiture de Vos Rêves ?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Parcourez notre sélection de véhicules premium et faites le premier pas vers une expérience d'achat de voiture sans souci.
          </p>
          <Link to="/vehicles">
            <CustomButton 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Explorer les Véhicules
            </CustomButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
