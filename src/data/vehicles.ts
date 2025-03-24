
export interface Vehicle {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  location: string;
  condition: string;
  exteriorColor: string;
  interiorColor: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  engine: string;
  vin: string;
  stockNumber: string;
  description: string;
  features: string[];
  images: string[];
  seller: {
    name: string;
    rating: number;
    totalReviews: number;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    title: "2023 Tesla Model 3",
    price: 42999,
    year: 2023,
    mileage: 12500,
    location: "San Francisco, CA",
    condition: "Like New",
    exteriorColor: "Pearl White",
    interiorColor: "Black",
    transmission: "Automatic",
    drivetrain: "All-Wheel Drive",
    fuelType: "Electric",
    engine: "Dual Motor",
    vin: "5YJ3E1EA7MF123456",
    stockNumber: "T12345",
    description: "This 2023 Tesla Model 3 is in excellent condition with low mileage. Features include Autopilot, premium sound system, and glass roof. The vehicle has been meticulously maintained and comes with the remainder of the factory warranty. Perfect for tech enthusiasts and environmentally conscious drivers.",
    features: [
      "Autopilot",
      "Glass Roof",
      "Premium Sound System",
      "Heated Seats",
      "360° Camera",
      "Wireless Charging",
      "18\" Alloy Wheels",
      "LED Headlights",
      "Navigation System",
      "Bluetooth Connectivity"
    ],
    images: [
      "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "Tesla Certified Pre-Owned",
      rating: 4.9,
      totalReviews: 324
    }
  },
  {
    id: "2",
    title: "2022 BMW M4 Competition",
    price: 78500,
    year: 2022,
    mileage: 8700,
    location: "Los Angeles, CA",
    condition: "Excellent",
    exteriorColor: "Isle of Man Green",
    interiorColor: "Kyalami Orange/Black",
    transmission: "8-Speed Automatic",
    drivetrain: "Rear-Wheel Drive",
    fuelType: "Gasoline",
    engine: "3.0L Twin-Turbo Inline-6",
    vin: "WBS23AZ09NCF12345",
    stockNumber: "B54321",
    description: "This 2022 BMW M4 Competition is a high-performance luxury coupe with striking Isle of Man Green exterior. Featuring the powerful S58 twin-turbo inline-six engine producing 503 horsepower. The vehicle includes M Sport seats, premium Harman Kardon sound system, and adaptive M suspension. A true driver's car with the perfect balance of luxury and performance.",
    features: [
      "M Sport Differential",
      "Adaptive M Suspension",
      "Harman Kardon Sound System",
      "M Sport Seats",
      "Carbon Fiber Trim",
      "Head-Up Display",
      "19\"/20\" M Double-spoke Wheels",
      "Adaptive LED Headlights",
      "Parking Assistant",
      "Wireless Apple CarPlay"
    ],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1543854589-fdd815f176e0?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1549925862-990918131467?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "BMW of Los Angeles",
      rating: 4.7,
      totalReviews: 218
    }
  },
  {
    id: "3",
    title: "2021 Mercedes-Benz S-Class",
    price: 89900,
    year: 2021,
    mileage: 15000,
    location: "Miami, FL",
    condition: "Excellent",
    exteriorColor: "Obsidian Black",
    interiorColor: "Macchiato Beige/Magma Grey",
    transmission: "9G-TRONIC Automatic",
    drivetrain: "All-Wheel Drive",
    fuelType: "Gasoline",
    engine: "3.0L Inline-6 Turbo",
    vin: "WDDUG8FB3MA123456",
    stockNumber: "M98765",
    description: "This 2021 Mercedes-Benz S-Class represents the pinnacle of luxury motoring with advanced technology and unparalleled comfort. Features include the MBUX infotainment system with augmented reality navigation, Burmester 3D surround sound, and executive rear seating. The vehicle comes with comprehensive service history and has been maintained to the highest standards.",
    features: [
      "MBUX with Augmented Reality",
      "Burmester 3D Surround Sound",
      "Executive Rear Seats",
      "Air Balance Package",
      "Active Ambient Lighting",
      "ENERGIZING Comfort Control",
      "20\" Multi-spoke Alloy Wheels",
      "Digital Light LED Headlights",
      "Driving Assistance Package",
      "4MATIC All-Wheel Drive"
    ],
    images: [
      "https://images.unsplash.com/photo-1622194993799-e4e384e79fbe?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1605515298946-d664fc767028?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "Mercedes-Benz of Miami",
      rating: 4.8,
      totalReviews: 286
    }
  },
  {
    id: "4",
    title: "2023 Porsche 911 Carrera S",
    price: 135000,
    year: 2023,
    mileage: 4300,
    location: "Chicago, IL",
    condition: "Like New",
    exteriorColor: "GT Silver Metallic",
    interiorColor: "Black/Bordeaux Red",
    transmission: "8-Speed PDK",
    drivetrain: "Rear-Wheel Drive",
    fuelType: "Gasoline",
    engine: "3.0L Twin-Turbo Flat-6",
    vin: "WP0AB2A98NS123456",
    stockNumber: "P24680",
    description: "This 2023 Porsche 911 Carrera S represents iconic sports car excellence with modern performance and technology. The twin-turbocharged flat-six engine delivers exhilarating acceleration and the PDK transmission provides lightning-fast shifts. Featuring Sport Chrono Package, PASM sport suspension, and premium Burmester sound system. A timeless design with cutting-edge performance.",
    features: [
      "Sport Chrono Package",
      "PASM Sport Suspension",
      "Burmester High-End Sound",
      "Sport Exhaust System",
      "LED Matrix Headlights",
      "20\"/21\" Carrera Classic Wheels",
      "Lane Change Assist",
      "Adaptive Sport Seats Plus",
      "Carbon Fiber Interior Package",
      "Porsche Connect Plus"
    ],
    images: [
      "https://images.unsplash.com/photo-1584060622420-0673aad46076?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1611821064430-0d40291922b1?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1625026461267-9199b68e3e9b?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "Porsche Chicago",
      rating: 4.9,
      totalReviews: 195
    }
  },
  {
    id: "5",
    title: "2022 Range Rover Autobiography",
    price: 110500,
    year: 2022,
    mileage: 9800,
    location: "New York, NY",
    condition: "Excellent",
    exteriorColor: "Santorini Black",
    interiorColor: "Ebony/Ivory",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    fuelType: "Gasoline",
    engine: "5.0L Supercharged V8",
    vin: "SALGS2SV2NA123456",
    stockNumber: "R13579",
    description: "This 2022 Range Rover Autobiography embodies luxury SUV perfection with commanding presence and refined interior. Featuring the powerful supercharged V8 engine, Terrain Response 2, and executive class rear seating. The vehicle includes a panoramic roof, Meridian Signature sound system, and pixel-laser LED headlights. The ultimate combination of off-road capability and luxury comfort.",
    features: [
      "Executive Class Rear Seats",
      "Terrain Response 2",
      "Meridian Signature Sound",
      "Pixel-laser LED Headlights",
      "24-way Heated/Cooled Front Seats",
      "Panoramic Roof",
      "Soft Close Doors",
      "All-Terrain Progress Control",
      "Head-Up Display",
      "22\" Diamond Turned Wheels"
    ],
    images: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1551522489-0d5bac7a7f97?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "Land Rover Manhattan",
      rating: 4.6,
      totalReviews: 173
    }
  },
  {
    id: "6",
    title: "2021 Audi RS7 Sportback",
    price: 92500,
    year: 2021,
    mileage: 13200,
    location: "Seattle, WA",
    condition: "Excellent",
    exteriorColor: "Nardo Gray",
    interiorColor: "Black Valcona Leather",
    transmission: "8-Speed Tiptronic",
    drivetrain: "All-Wheel Drive",
    fuelType: "Gasoline",
    engine: "4.0L Twin-Turbo V8",
    vin: "WAUZF88E11N123456",
    stockNumber: "A86420",
    description: "This 2021 Audi RS7 Sportback combines stunning design with exhilarating performance. The twin-turbocharged V8 engine produces 591 horsepower and launches from 0-60 mph in just 3.5 seconds. Features include adaptive air suspension, RS sport exhaust, and Bang & Olufsen 3D sound system. The perfect blend of luxury grand tourer and high-performance sports car.",
    features: [
      "RS Adaptive Air Suspension",
      "Bang & Olufsen 3D Sound",
      "RS Sport Exhaust",
      "Carbon Optic Package",
      "RS Ceramic Brakes",
      "Head-Up Display",
      "Night Vision Assistant",
      "Valcona Leather with Honeycomb Stitch",
      "22\" 5-V-spoke Wheels",
      "quattro Sport Differential"
    ],
    images: [
      "https://images.unsplash.com/photo-1606664531755-24b1e755036d?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1606664608655-17b0b391c924?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1606664421844-cdebcb6d1f42?auto=format&fit=crop&q=80&w=1600&h=900",
      "https://images.unsplash.com/photo-1606664455827-de2689ddce37?auto=format&fit=crop&q=80&w=1600&h=900"
    ],
    seller: {
      name: "Audi Seattle",
      rating: 4.7,
      totalReviews: 206
    }
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};
