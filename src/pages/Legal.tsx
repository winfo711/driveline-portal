
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-medium mb-8">Conditions d'Utilisation</h1>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Bienvenue chez AutoElite. Ces Conditions d'Utilisation ("Conditions") régissent votre utilisation de notre site web, services et applications (collectivement, les "Services") fournis par AutoElite ("Société", "nous", "notre" ou "nos").
          </p>
          <p className="text-muted-foreground mb-4">
            En accédant ou en utilisant nos Services, vous acceptez d'être lié par ces Conditions. Si vous n'êtes pas d'accord avec une partie des Conditions, vous ne pouvez pas accéder aux Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">2. Utilisation des Services</h2>
          <p className="text-muted-foreground mb-4">
            Nos Services sont destinés aux utilisateurs âgés d'au moins 18 ans. En utilisant nos Services, vous déclarez et garantissez que vous avez au moins 18 ans et que vous avez la capacité juridique de conclure ces Conditions.
          </p>
          <p className="text-muted-foreground mb-4">
            Vous acceptez de ne pas utiliser nos Services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>D'une manière qui viole toute loi ou réglementation fédérale, étatique, locale ou internationale applicable</li>
            <li>Pour usurper l'identité ou tenter d'usurper l'identité de la Société, d'un employé de la Société, d'un autre utilisateur ou de toute autre personne ou entité</li>
            <li>Pour vous engager dans toute autre conduite qui restreint ou empêche l'utilisation ou la jouissance des Services par quiconque</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">3. Annonces de Véhicules et Achats</h2>
          <p className="text-muted-foreground mb-4">
            Bien que nous nous efforcions de fournir des informations précises sur les véhicules répertoriés sur notre plateforme, nous ne garantissons pas que les descriptions, photographies ou autres représentations des véhicules sont exactes, complètes, fiables, à jour ou sans erreur.
          </p>
          <p className="text-muted-foreground mb-4">
            Tous les achats de véhicules sont soumis à notre contrat d'achat standard, qui vous sera fourni avant de finaliser une transaction. Le contrat d'achat précisera les conditions spécifiques liées aux prix, au financement, à la livraison, aux garanties et aux politiques de retour.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">4. Comptes Utilisateurs</h2>
          <p className="text-muted-foreground mb-4">
            Lorsque vous créez un compte chez nous, vous devez fournir des informations qui sont exactes, complètes et à jour à tout moment. Le non-respect de cette obligation constitue une violation des Conditions, ce qui peut entraîner la résiliation immédiate de votre compte.
          </p>
          <p className="text-muted-foreground mb-4">
            Vous êtes responsable de la protection du mot de passe que vous utilisez pour accéder aux Services et pour toutes les activités ou actions sous votre mot de passe. Vous acceptez de ne pas divulguer votre mot de passe à un tiers.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">5. Propriété Intellectuelle</h2>
          <p className="text-muted-foreground mb-4">
            Les Services et leur contenu, fonctionnalités et fonctionnalités originaux sont et resteront la propriété exclusive de la Société et de ses concédants de licence. Les Services sont protégés par les droits d'auteur, les marques de commerce et d'autres lois des États-Unis et des pays étrangers.
          </p>
          <p className="text-muted-foreground mb-4">
            Nos marques de commerce et notre présentation commerciale ne peuvent pas être utilisées en relation avec un produit ou un service sans le consentement écrit préalable de la Société.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">6. Résiliation</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les Conditions.
          </p>
          <p className="text-muted-foreground mb-4">
            À la résiliation, votre droit d'utiliser les Services cessera immédiatement. Si vous souhaitez résilier votre compte, vous pouvez simplement cesser d'utiliser les Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">7. Limitation de Responsabilité</h2>
          <p className="text-muted-foreground mb-4">
            En aucun cas, la Société, ses administrateurs, employés, partenaires, agents, fournisseurs ou affiliés ne seront responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris, sans limitation, la perte de profits, de données, d'utilisation, de clientèle ou d'autres pertes intangibles, résultant de votre accès ou utilisation ou impossibilité d'accéder ou d'utiliser les Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">8. Modifications des Conditions</h2>
          <p className="text-muted-foreground mb-4">
            Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. En continuant à accéder ou à utiliser nos Services après que ces révisions soient devenues effectives, vous acceptez d'être lié par les conditions révisées.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">9. Nous Contacter</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant ces Conditions, veuillez nous contacter à legal@autoelite.com.
          </p>
        </div>
        
        <div className="flex space-x-4 justify-center mt-12">
          <Link to="/privacy" className="text-primary hover:underline">
            Politique de Confidentialité
          </Link>
          <Link to="/data-protection" className="text-primary hover:underline">
            Protection des Données
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
