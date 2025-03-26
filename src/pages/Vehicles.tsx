
import { useState, useEffect } from "react";
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
    throw new Error("Failed to fetch vehicles");
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
    keepPreviousData: true
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
  
  // Filter vehicles based on search query and filters
  const filteredVehicles = vehicles.filter((vehicle) => {
    // Search query filter
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price range filter
    const vehiclePrice = parseFloat(vehicle.price);
    const matchesPrice = vehiclePrice >= priceRange[0] && vehiclePrice <= priceRange[1];
    
    // Year range filter
    const vehicleYear = parseInt(vehicle.year);
    const matchesYear = vehicleYear >= yearRange[0] && vehicleYear <= yearRange[1];
    
    return matchesSearch && matchesPrice && matchesYear;
  });
  
  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 200000]);
    setYearRange([2010, 2023]);
  };
  
  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  // Generate pagination items
  const generatePaginationItems = () => {
    if (!pagination) return null;
    
    // Create an array of page numbers to display
    let pageNumbers = [];
    
    // Always include first page, current page, and last page
    // Then add pages around current page
    const maxPagesToShow = 5;
    
    if (pagination.last_page <= maxPagesToShow) {
      // If we have fewer pages than max, show all
      pageNumbers = Array.from({ length: pagination.last_page }, (_, i) => i + 1);
    } else {
      // Always include page 1
      pageNumbers.push(1);
      
      // Calculate range around current page
      let startPage = Math.max(2, pagination.current_page - 1);
      let endPage = Math.min(pagination.last_page - 1, pagination.current_page + 1);
      
      // Add ellipsis after page 1 if necessary
      if (startPage > 2) {
        pageNumbers.push(-1); // -1 represents ellipsis
      }
      
      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if necessary
      if (endPage < pagination.last_page - 1) {
        pageNumbers.push(-2); // -2 represents ellipsis
      }
      
      // Add last page
      pageNumbers.push(pagination.last_page);
    }
    
    return pageNumbers.map((pageNumber, index) => {
      // If pageNumber is negative, it represents ellipsis
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
        <h1 className="font-medium mb-4">Discover Your Perfect Vehicle</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our premium selection of vehicles. Use the filters to find exactly what you're looking for.
        </p>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search by make, model, or location..."
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
        
        {/* Filter Toggle Button */}
        <button
          className={`neo-morph px-4 py-2.5 flex items-center gap-2 transition-colors ${
            filtersOpen ? "bg-primary text-primary-foreground" : ""
          }`}
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
      
      {/* Filter Panel */}
      {filtersOpen && (
        <div className="mb-8 neo-morph p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {/* Price Range Filter */}
          <div>
            <h3 className="text-sm font-medium mb-3">Price Range</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">${priceRange[0].toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">${priceRange[1].toLocaleString()}</span>
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
          
          {/* Year Range Filter */}
          <div>
            <h3 className="text-sm font-medium mb-3">Year Range</h3>
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
          
          {/* Reset Filters Button */}
          <div className="flex items-end">
            <button
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={resetFilters}
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Loading and Error States */}
      {isLoading && (
        <div className="py-16 flex justify-center items-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          <p className="ml-3 text-muted-foreground">Loading vehicles...</p>
        </div>
      )}
      
      {error && (
        <div className="py-16 text-center">
          <p className="text-destructive mb-4">Failed to load vehicles. Please try again later.</p>
          <button 
            className="neo-morph px-4 py-2 text-primary hover:underline" 
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      )}
      
      {/* Results Count */}
      {!isLoading && !error && (
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredVehicles.length} vehicles
            {pagination && ` (${pagination.total} total)`}
          </p>
        </div>
      )}
      
      {/* Vehicle Grid */}
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
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-muted-foreground mb-4">No vehicles match your criteria.</p>
              <button 
                className="text-primary hover:underline" 
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Pagination */}
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
      
      {/* Loading indicator for page changes */}
      {!isLoading && isFetching && (
        <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-3 flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          <span className="text-xs">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
