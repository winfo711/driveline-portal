
import { Check, Search, FileText, CreditCard, Truck, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/custom-button";

const steps = [
  {
    id: 1,
    title: "Parcourez Notre Sélection",
    description: "Explorez notre sélection soignée de véhicules premium. Utilisez des filtres détaillés pour trouver la correspondance parfaite à vos besoins et préférences.",
    icon: Search,
  },
  {
    id: 2,
    title: "Informations sur le Véhicule",
    description: "Chaque annonce comprend des informations complètes, des spécifications détaillées, des images de haute qualité et des prix transparents.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Options de Financement",
    description: "Choisissez parmi des options de financement flexibles adaptées à votre budget. Obtenez une pré-approbation rapidement grâce à notre processus simplifié.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Livraison à Domicile",
    description: "Nous livrerons votre véhicule directement à votre porte à votre convenance, ou vous pouvez planifier un retrait à l'un de nos emplacements.",
    icon: Truck,
  }
];

const benefits = [
  {
    title: "Garantie Satisfait ou Remboursé de 5 Jours",
    description: "Si vous n'êtes pas entièrement satisfait, retournez le véhicule dans les 5 jours pour un remboursement complet.",
    icon: Clock,
  },
  {
    title: "Inspection en 150+ Points",
    description: "Chaque véhicule subit une inspection complète pour assurer sa qualité et sa fiabilité.",
    icon: Check,
  },
  {
    title: "Options de Garantie Prolongée",
    description: "Une tranquillité d'esprit supplémentaire avec nos plans de garantie flexibles pour protéger votre investissement.",
    icon: Shield,
  }
];

const HowItWorks = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-medium mb-4">Comment Ça Marche</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nous avons réinventé l'expérience d'achat automobile pour la rendre simple, transparente et agréable.
          De la navigation à la livraison, voici ce à quoi vous pouvez vous attendre.
        </p>
      </div>
      
      {/* Steps Section */}
      <div className="relative mb-20">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 -ml-px w-0.5 bg-gray-100 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={step.id} className="md:grid md:grid-cols-2 md:gap-8">
              <div className={`md:flex ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                <div className={`relative flex md:basis-4/5 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  {/* Mobile Timeline Dot */}
                  <div className="absolute top-0 left-0 md:hidden -ml-1">
                    <div className="h-16 w-16 rounded-full neo-morph flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Desktop Timeline Dot */}
                  <div className="hidden md:flex absolute top-0 md:top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="h-16 w-16 rounded-full neo-morph flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className={`pt-3 pl-20 md:pl-0 md:pt-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white neo-morph p-6 md:mt-6">
                      <div className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 text-primary mb-3">
                        Étape {step.id}
                      </div>
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-3">L'Avantage AutoElite</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nous nous engageons à fournir un service et une valeur exceptionnels à chaque achat.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="neo-morph p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <benefit.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* FAQ Link */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-medium mb-4">Vous avez des questions?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Consultez nos questions fréquemment posées pour plus d'informations sur notre processus.
        </p>
        <Link to="/faq">
          <CustomButton>Voir la FAQ</CustomButton>
        </Link>
      </div>
      
      {/* CTA Section */}
      <div className="neo-morph p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium mb-3">Prêt à Commencer?</h2>
          <p className="text-muted-foreground max-w-xl">
            Parcourez notre sélection premium de véhicules et faites le premier pas vers une expérience d'achat sans faille.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link to="/vehicles">
            <CustomButton size="lg">Parcourir les Véhicules</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
