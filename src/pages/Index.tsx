
import Logo from "../components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl px-6">
        <div className="flex justify-center mb-6">
          <Logo textSize="lg" iconSize={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Premium Vehicles for Discerning Drivers</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our exclusive selection of luxury vehicles tailored to your lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/vehicles" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Browse Vehicles
          </a>
          <a 
            href="/how-it-works" 
            className="px-6 py-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            How It Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
