
interface VehicleDescriptionProps {
  description: string;
}

const VehicleDescription = ({ description }: VehicleDescriptionProps) => {
  return (
    <div className="neo-morph p-6">
      <h2 className="text-2xl font-medium mb-4">Description</h2>
      <div 
        className="text-foreground/90 whitespace-pre-line leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default VehicleDescription;
