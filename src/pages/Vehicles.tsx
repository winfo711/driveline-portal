
import { useState } from "react";
import VehicleCard from "@/components/VehicleCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Vehicle {
  id: number;
  name: string;
  price: string;
  year: string;
  mileage: number;
  location: string;
  condition: string;
  gallery: string[];
  slug: string;
  make: string;
  model: string;
  fuel_type: string;
  transmission: string;
  drive_type: string;
}

interface PaginationData {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  prev_page_url: string | null;
}

const fetchVehicles = async (page: number) => {
  const response = await fetch(`https://admin.bpraceloc.com/api/cars?page=${page}`);
  if (!response.ok) {
    throw new Error("Échec du chargement des véhicules");
  }
  return response.json();
};

const Vehicles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2023]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { 
    data: vehiclesData,
    isLoading,
    error,
    isFetching
  } = useQuery({
    queryKey: ['vehicles', currentPage],
    queryFn: () => fetchVehicles(currentPage),
    staleTime: 60000, // 1 minute
  });
  
  const vehicles: Vehicle[] = vehiclesData?.data?.cars?.data || [];
  const pagination: PaginationData | null = vehiclesData?.data?.cars 
    ? {
        current_page: vehiclesData.data.cars.current_page,
        last_page: vehiclesData.data.cars.last_page,
        per_page: vehiclesData.data.cars.per_page,
        total: vehiclesData.data.cars.total,
        links: vehiclesData.data.cars.links,
        next_page_url: vehiclesData.data.cars.next_page_url,
        prev_page_url: vehiclesData.data.cars.prev_page_url,
      }
    : null;
  
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    const vehiclePrice = parseFloat(vehicle.price);
    const matchesPrice = vehiclePrice >= priceRange[0] && vehiclePrice <= priceRange[1];
    
    const vehicleYear = parseInt(vehicle.year);
    const matchesYear = vehicleYear >= yearRange[0] && vehicleYear <= yearRange[1];
    
    return matchesSearch && matchesPrice && matchesYear;
  });
  
  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 200000]);
    setYearRange([2010, 2023]);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const generatePaginationItems = () => {
    if (!pagination) return null;
    
    let pageNumbers = [];
    
    if (pagination.last_page <= 5) {
      pageNumbers = Array.from({ length: pagination.last_page }, (_, i) => i + 1);
    } else {
      pageNumbers.push(1);
      
      let startPage = Math.max(2, pagination.current_page - 1);
      let endPage = Math.min(pagination.last_page - 1, pagination.current_page + 1);
      
      if (startPage > 2) {
        pageNumbers.push(-1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < pagination.last_page - 1) {
        pageNumbers.push(-2);
      }
      
      pageNumbers.push(pagination.last_page);
    }
    
    return pageNumbers.map((pageNumber, index) => {
      if (pageNumber < 0) {
        return (
          <PaginationItem key={`ellipsis-${index}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      return (
        <PaginationItem key={pageNumber}>
          <PaginationLink
            isActive={pageNumber === pagination.current_page}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };
  
  return (
    <div className="page-container">
      <div className="mb-12 text-center">
        <h1 className="font-medium mb-4">Découvrez Votre Véhicule Parfait</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Parcourez notre sélection premium de véhicules. Utilisez les filtres pour trouver exactement ce que vous cherchez.
        </p>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Rechercher par marque, modèle ou lieu..."
            className="neo-morph-inset w-full py-2.5 pl-10 pr-4 text-foreground focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
        
        <button
          className={`neo-morph px-4 py-2.5 flex items-center gap-2 transition-colors ${
            filtersOpen ? "bg-primary text-primary-foreground" : ""
          }`}
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filtres</span>
        </button>
      </div>
      
      {filtersOpen && (
        <div className="mb-8 neo-morph p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <div>
            <h3 className="text-sm font-medium mb-3">Fourchette de Prix</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">{priceRange[0].toLocaleString()} €</span>
                <span className="text-sm text-muted-foreground">{priceRange[1].toLocaleString()} €</span>
              </div>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Année</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">{yearRange[0]}</span>
                <span className="text-sm text-muted-foreground">{yearRange[1]}</span>
              </div>
              <input
                type="range"
                min="2010"
                max="2023"
                step="1"
                value={yearRange[0]}
                onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="2010"
                max="2023"
                step="1"
                value={yearRange[1]}
                onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={resetFilters}
            >
              Réinitialiser Tous les Filtres
            </button>
          </div>
        </div>
      )}
      
      {isLoading && (
        <div className="py-16 flex justify-center items-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          <p className="ml-3 text-muted-foreground">Chargement des véhicules...</p>
        </div>
      )}
      
      {error && (
        <div className="py-16 text-center">
          <p className="text-destructive mb-4">Échec du chargement des véhicules. Veuillez réessayer plus tard.</p>
          <button 
            className="neo-morph px-4 py-2 text-primary hover:underline" 
            onClick={() => window.location.reload()}
          >
            Actualiser
          </button>
        </div>
      )}
      
      {!isLoading && !error && (
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Affichage de {filteredVehicles.length} véhicules
            {pagination && ` (${pagination.total} au total)`}
          </p>
        </div>
      )}
      
      {!isLoading && !error && (
        <>
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  id={vehicle.id.toString()}
                  title={vehicle.name}
                  price={parseFloat(vehicle.price)}
                  year={parseInt(vehicle.year)}
                  mileage={vehicle.mileage}
                  image={`https://admin.bpraceloc.com/storage/${vehicle.gallery[0]}`}
                  location={vehicle.location}
                  slug={vehicle.slug}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-muted-foreground mb-4">Aucun véhicule ne correspond à vos critères.</p>
              <button 
                className="text-primary hover:underline" 
                onClick={resetFilters}
              >
                Réinitialiser les Filtres
              </button>
            </div>
          )}
          
          {pagination && pagination.last_page > 1 && (
            <Pagination className="my-8">
              <PaginationContent>
                {pagination.prev_page_url && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(pagination.current_page - 1)} 
                    />
                  </PaginationItem>
                )}
                
                {generatePaginationItems()}
                
                {pagination.next_page_url && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(pagination.current_page + 1)} 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
      
      {!isLoading && isFetching && (
        <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-3 flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          <span className="text-xs">Chargement...</span>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
