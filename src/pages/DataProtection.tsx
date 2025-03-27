
import { Link } from "react-router-dom";

const DataProtection = () => {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-medium mb-8">Déclaration de Protection des Données</h1>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">1. Principes de Protection des Données</h2>
          <p className="text-muted-foreground mb-4">
            AutoElite s'engage à traiter les données conformément à ses responsabilités en vertu des lois et réglementations applicables en matière de protection des données. Ces principes exigent que les données personnelles soient :
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Traitées de manière licite, équitable et transparente</li>
            <li>Collectées à des fins déterminées, explicites et légitimes</li>
            <li>Adéquates, pertinentes et limitées à ce qui est nécessaire</li>
            <li>Exactes et, si nécessaire, tenues à jour</li>
            <li>Conservées uniquement pendant la durée nécessaire</li>
            <li>Traitées d'une manière qui garantit une sécurité appropriée</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">2. Base Juridique du Traitement</h2>
          <p className="text-muted-foreground mb-4">
            Nous traitons vos données personnelles sur les bases juridiques suivantes :
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li><strong>Consentement :</strong> Lorsque vous avez explicitement accepté notre traitement de vos données personnelles à une ou plusieurs fins spécifiques</li>
            <li><strong>Contrat :</strong> Lorsque le traitement est nécessaire à l'exécution d'un contrat avec vous ou pour prendre des mesures à votre demande avant de conclure un contrat</li>
            <li><strong>Obligation Légale :</strong> Lorsque le traitement est nécessaire pour respecter nos obligations légales</li>
            <li><strong>Intérêts Légitimes :</strong> Lorsque le traitement est nécessaire à nos intérêts légitimes ou à ceux d'un tiers, sauf si ces intérêts sont supplantés par vos intérêts ou vos droits et libertés fondamentaux</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">3. Vos Droits en Matière de Protection des Données</h2>
          <p className="text-muted-foreground mb-4">
            Selon votre emplacement et la loi applicable, vous pouvez disposer des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li><strong>Droit d'Accès :</strong> Vous avez le droit de demander des copies de vos données personnelles</li>
            <li><strong>Droit de Rectification :</strong> Vous avez le droit de demander que nous corrigions toute information inexacte ou que nous complétions toute information incomplète</li>
            <li><strong>Droit à l'Effacement :</strong> Vous avez le droit de demander que nous supprimions vos données personnelles dans certaines circonstances</li>
            <li><strong>Droit à la Limitation du Traitement :</strong> Vous avez le droit de demander que nous limitions le traitement de vos données personnelles dans certaines circonstances</li>
            <li><strong>Droit à la Portabilité des Données :</strong> Vous avez le droit de demander que nous transférions vos données personnelles à une autre organisation ou directement à vous</li>
            <li><strong>Droit d'Opposition :</strong> Vous avez le droit de vous opposer à notre traitement de vos données personnelles dans certaines circonstances</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Pour exercer l'un de ces droits, veuillez nous contacter à privacy@autoelite.com. Nous pouvons avoir besoin de demander des informations spécifiques pour nous aider à confirmer votre identité et garantir votre droit d'accéder à vos données personnelles.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">4. Transferts Internationaux de Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons transférer vos données personnelles vers des pays situés en dehors de votre pays de résidence, qui peuvent avoir des lois différentes en matière de protection des données. Lorsque nous transférons des données personnelles à l'international, nous prenons des mesures appropriées pour garantir que vos données personnelles restent protégées.
          </p>
          <p className="text-muted-foreground mb-4">
            Ces mesures peuvent inclure :
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Des clauses contractuelles types approuvées par les autorités de protection des données compétentes</li>
            <li>Des règles d'entreprise contraignantes pour les transferts au sein de notre groupe d'entreprises</li>
            <li>L'adhésion à des mécanismes de certification reconnus ou à des codes de conduite</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">5. Conservation des Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire aux obligations légales, comptables ou de reporting. Pour déterminer la période de conservation appropriée, nous prenons en compte la quantité, la nature et la sensibilité des données personnelles, le risque potentiel de préjudice résultant d'une utilisation ou d'une divulgation non autorisée, et les exigences légales applicables.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">6. Sécurité des Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer un niveau de sécurité adapté au risque, notamment :
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Le chiffrement des données personnelles lorsque cela est approprié</li>
            <li>Des tests et évaluations réguliers des mesures de sécurité</li>
            <li>Des contrôles d'accès et des mesures d'authentification</li>
            <li>La formation du personnel à la protection des données et à la sécurité</li>
            <li>Des procédures de réponse aux incidents</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">7. Notification de Violation de Données</h2>
          <p className="text-muted-foreground mb-4">
            En cas de violation de données personnelles, nous informerons l'autorité de contrôle compétente sans retard injustifié et, si possible, au plus tard 72 heures après en avoir pris connaissance, à moins que la violation ne soit pas susceptible d'engendrer un risque pour vos droits et libertés.
          </p>
          <p className="text-muted-foreground mb-4">
            Si la violation est susceptible d'entraîner un risque élevé pour vos droits et libertés, nous vous en informerons directement sans retard injustifié.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">8. Délégué à la Protection des Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous avons nommé un Délégué à la Protection des Données (DPO) qui est responsable de superviser les questions relatives à cette Déclaration de Protection des Données et à nos pratiques de protection des données. Si vous avez des questions concernant cette déclaration ou nos pratiques de protection des données, veuillez contacter notre DPO à dpo@autoelite.com.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">9. Réclamations</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez une préoccupation concernant notre traitement de vos données personnelles, veuillez nous contacter à privacy@autoelite.com afin que nous puissions répondre à votre préoccupation. Vous avez également le droit de déposer une plainte auprès d'une autorité de contrôle si vous estimez que notre traitement de vos données personnelles enfreint les lois sur la protection des données.
          </p>
        </div>
        
        <div className="flex space-x-4 justify-center mt-12">
          <Link to="/legal" className="text-primary hover:underline">
            Conditions d'Utilisation
          </Link>
          <Link to="/privacy" className="text-primary hover:underline">
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataProtection;
