
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// SEO metadata for each route
const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "BP Race Loc - Location et vente de véhicules premium",
    description: "Découvrez notre sélection exclusive de véhicules premium pour la location et l'achat. BP Race Loc vous offre des véhicules de qualité adaptés à vos besoins."
  },
  "/vehicles": {
    title: "Véhicules Premium | BP Race Loc",
    description: "Parcourez notre catalogue de véhicules premium disponibles à la location et à l'achat. Trouvez le véhicule parfait pour vos besoins chez BP Race Loc."
  },
  "/how-it-works": {
    title: "Comment Ça Marche | BP Race Loc",
    description: "Découvrez comment fonctionne notre service de location et d'achat de véhicules premium. Processus simple et transparent chez BP Race Loc."
  },
  "/faq": {
    title: "Questions Fréquentes | BP Race Loc",
    description: "Consultez nos réponses aux questions fréquemment posées sur nos services de location et d'achat de véhicules premium."
  },
  "/help": {
    title: "Centre d'Aide | BP Race Loc",
    description: "Besoin d'aide ? Consultez notre centre d'assistance pour trouver des réponses à vos questions sur nos services."
  },
  "/feedback": {
    title: "Avis Clients | BP Race Loc",
    description: "Découvrez ce que nos clients pensent de nos services ou partagez votre propre expérience avec BP Race Loc."
  },
  "/contact": {
    title: "Contactez-Nous | BP Race Loc",
    description: "Besoin d'informations supplémentaires ? Contactez notre équipe dédiée pour toute question concernant nos services."
  },
  "/privacy": {
    title: "Politique de Confidentialité | BP Race Loc",
    description: "Consultez notre politique de confidentialité pour comprendre comment nous protégeons vos données personnelles."
  },
  "/legal": {
    title: "Mentions Légales | BP Race Loc",
    description: "Consultez nos mentions légales pour des informations sur notre entreprise et nos obligations légales."
  },
  "/data-protection": {
    title: "Protection des Données | BP Race Loc",
    description: "Découvrez comment nous protégeons vos données personnelles conformément aux réglementations en vigueur."
  },
  "/cookies": {
    title: "Politique de Cookies | BP Race Loc",
    description: "Informations sur notre utilisation des cookies et comment gérer vos préférences."
  }
};

const Layout = () => {
  const location = useLocation();
  const [isPageChanging, setIsPageChanging] = useState(false);
  
  useEffect(() => {
    setIsPageChanging(true);
    const timer = setTimeout(() => {
      setIsPageChanging(false);
    }, 300);
    
    // Update page metadata based on current route
    const metadata = routeMetadata[location.pathname] || routeMetadata["/"];
    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
    }
    
    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (ogTitle) ogTitle.setAttribute("content", metadata.title);
    if (ogDescription) ogDescription.setAttribute("content", metadata.description);
    if (twitterTitle) twitterTitle.setAttribute("content", metadata.title);
    if (twitterDescription) twitterDescription.setAttribute("content", metadata.description);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isPageChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-300 ease-in-out`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
