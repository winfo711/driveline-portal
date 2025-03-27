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
      quote: "The most seamless car buying experience I've ever had. Everything from browsing to delivery was perfect.",
      author: "Emma Thompson",
      role: "Verified Buyer"
    },
    {
      quote: "I was hesitant about buying a car online, but AutoElite made it incredibly simple and transparent.",
      author: "Michael Chen",
      role: "Verified Buyer"
    },
    {
      quote: "Their attention to detail and customer service is unmatched. I'll never buy a car any other way.",
      author: "Sarah Johnson",
      role: "Verified Buyer"
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
      slug: listing.slug || `vehicle-${listing.id}`
    }));
  };
  
  const featuredVehicles = formatFeaturedListings();
  
  const getCurrentHeaderData = () => {
    if (!headerData?.data?.hearder || headerData.data.hearder.length === 0) {
      return {
        title: "Discover Your Perfect Drive",
        description: "Premium vehicles with transparent pricing and seamless experience."
      };
    }
    return {
      title: headerData.data.hearder[currentImageIndex]?.title || "Discover Your Perfect Drive",
      description: headerData.data.hearder[currentImageIndex]?.description || "Premium vehicles with transparent pricing and seamless experience."
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
                  Browse Vehicles
                </CustomButton>
              </Link>
              <Link to="/how-it-works">
                <CustomButton variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">
                  How It Works
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
                <span className="text-sm text-white">Verified Vehicles</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Star className="h-5 w-5 text-white/70" />
                <span className="text-sm text-white">5-Day Returns</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Car className="h-5 w-5 text-white/70" />
                <span className="text-sm text-white">Home Delivery</span>
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
            <h2 className="text-2xl md:text-3xl font-medium">Featured Vehicles</h2>
            <Link to="/vehicles" className="text-sm font-medium flex items-center hover:text-primary transition-colors">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {isFeaturedLoading ? (
            <div className="py-16 text-center">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading featured vehicles...</p>
            </div>
          ) : featuredError ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Unable to load featured vehicles at this time.</p>
            </div>
          ) : featuredVehicles.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No featured vehicles available at this time.</p>
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
                Explore All Vehicles
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've simplified the process of buying your next vehicle to make it seamless and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <Search className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Browse & Select</h3>
              <p className="text-muted-foreground">
                Explore our curated selection of premium vehicles and find your perfect match.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Easy Financing</h3>
              <p className="text-muted-foreground">
                Transparent pricing and flexible financing options to suit your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 neo-morph rounded-full flex items-center justify-center">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Home Delivery</h3>
              <p className="text-muted-foreground">
                Your new vehicle delivered right to your doorstep at your convenience.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/how-it-works">
              <CustomButton variant="outline" size="lg">
                Learn More About Our Process
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-radial from-secondary to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their experience.
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
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Google Verified Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our clients are saying about us on Google.
            </p>
          </div>
          
          <div className="neo-morph p-4 rounded-xl">
            <iframe 
              style={{ width: '100%', height: '700px' }} 
              scrolling="yes" 
              className="responsive-item col-lg-12 col-md-12 col-sm-12" 
              src="https://digitalreviews.icu/api/widgets/embedded/1/3?tabs=no&hide_search=yes" 
              allowFullScreen
              title="Google Verified Reviews"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-primary-foreground">Ready to Find Your Dream Car?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Browse our selection of premium vehicles and take the first step towards a seamless car buying experience.
          </p>
          <Link to="/vehicles">
            <CustomButton 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Vehicles
            </CustomButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
