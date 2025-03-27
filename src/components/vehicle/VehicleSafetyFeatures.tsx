
interface VehicleSafetyFeaturesProps {
  safetyFeatures: string[];
}

const VehicleSafetyFeatures = ({ safetyFeatures }: VehicleSafetyFeaturesProps) => {
  if (safetyFeatures.length === 0) return null;
  
  return (
    <div className="neo-morph p-6">
      <h2 className="text-2xl font-medium mb-4">Caractéristiques de Sécurité</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
        {safetyFeatures.map((feature: string, index: number) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSafetyFeatures;
