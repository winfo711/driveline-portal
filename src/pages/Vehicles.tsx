
import { useState, useEffect } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Vehicles = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2023]);
  
  // Filter vehicles based on search query and filters
  useEffect(() => {
    const filtered = vehicles.filter((vehicle) => {
      // Search query filter
      const matchesSearch = vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           vehicle.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price range filter
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      
      // Year range filter
      const matchesYear = vehicle.year >= yearRange[0] && vehicle.year <= yearRange[1];
      
      return matchesSearch && matchesPrice && matchesYear;
    });
    
    setFilteredVehicles(filtered);
  }, [searchQuery, priceRange, yearRange]);
  
  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 200000]);
    setYearRange([2010, 2023]);
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
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredVehicles.length} vehicles
        </p>
      </div>
      
      {/* Vehicle Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              id={vehicle.id}
              title={vehicle.title}
              price={vehicle.price}
              year={vehicle.year}
              mileage={vehicle.mileage}
              image={vehicle.images[0]}
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
    </div>
  );
};

export default Vehicles;
