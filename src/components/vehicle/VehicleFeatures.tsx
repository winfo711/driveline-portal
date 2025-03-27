
interface VehicleFeaturesProps {
  features: string[];
}

const VehicleFeatures = ({ features }: VehicleFeaturesProps) => {
  return (
    <div className="neo-morph p-6">
      <h2 className="text-2xl font-medium mb-4">Caractéristiques & Équipements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
        {features.map((feature: string, index: number) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleFeatures;
