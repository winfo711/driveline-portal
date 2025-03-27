
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl px-6">
        <div className="flex justify-center mb-6">
          <Logo textSize="lg" iconSize={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Véhicules Premium pour Conducteurs Exigeants</h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez notre sélection exclusive de véhicules de luxe adaptés à votre style de vie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link to="/vehicles">Parcourir les Véhicules</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/how-it-works">Comment Ça Marche</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
