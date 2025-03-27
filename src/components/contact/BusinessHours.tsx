
const BusinessHours = () => {
  return (
    <div className="mt-16 neo-morph p-8 text-center">
      <h2 className="text-xl font-medium mb-6">Heures d'ouverture</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-medium mb-2">Service commercial</h3>
          <p className="text-muted-foreground">Lundi - Vendredi: 9h - 19h</p>
          <p className="text-muted-foreground">Samedi: 10h - 18h</p>
          <p className="text-muted-foreground">Dimanche: 11h - 17h</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Centre de service</h3>
          <p className="text-muted-foreground">Lundi - Vendredi: 8h - 18h</p>
          <p className="text-muted-foreground">Samedi: 8h - 16h</p>
          <p className="text-muted-foreground">Dimanche: Fermé</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Service client</h3>
          <p className="text-muted-foreground">Lundi - Vendredi: 8h - 20h</p>
          <p className="text-muted-foreground">Samedi: 9h - 17h</p>
          <p className="text-muted-foreground">Dimanche: 12h - 17h</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
