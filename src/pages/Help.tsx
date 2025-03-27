
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, MessageCircle, PhoneCall, Info } from "lucide-react";

const Help = () => {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  
  const helpCategories = [
    { id: "general", label: "Guide Général" },
    { id: "purchase", label: "Achat de Véhicule" },
    { id: "support", label: "Support Client" },
    { id: "account", label: "Votre Compte" }
  ];
  
  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-medium text-center mb-4 text-primary">Centre d'Aide</h1>
        <p className="text-center text-muted-foreground mb-8 text-sm max-w-xl mx-auto">
          Nous sommes là pour vous aider à trouver les réponses à vos questions
        </p>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {helpCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "neo-morph hover:bg-secondary/50"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Help Content */}
        <div className="mb-16">
          {activeCategory === "general" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Comment fonctionne notre service
                  </CardTitle>
                  <CardDescription>Comprendre le processus d'achat de véhicule</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Notre plateforme simplifie l'achat de véhicules premium en trois étapes:</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Parcourez notre catalogue de véhicules soigneusement sélectionnés.</li>
                    <li>Utilisez nos outils d'évaluation pour comparer les options.</li>
                    <li>Contactez-nous pour organiser un essai routier ou finaliser votre achat.</li>
                  </ol>
                  <div className="mt-6">
                    <Link to="/how-it-works" className="text-primary hover:underline">
                      En savoir plus sur notre processus
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Accordion type="single" collapsible className="neo-morph">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Comment puis-je trouver le véhicule idéal?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>Pour trouver le véhicule qui correspond parfaitement à vos besoins:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Utilisez les filtres de recherche pour affiner les résultats selon vos critères</li>
                      <li>Consultez les descriptions détaillées et les galeries photos</li>
                      <li>Comparez les caractéristiques et les prix</li>
                      <li>Lisez les avis d'autres clients</li>
                    </ul>
                    <div className="mt-4">
                      <Link to="/vehicles" className="text-primary hover:underline">
                        Explorer notre catalogue
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Comment contacter un conseiller?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>
                      Nos conseillers sont disponibles pour répondre à toutes vos questions.
                      Vous pouvez nous contacter par:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Téléphone: +33 (0)1 23 45 67 89</li>
                      <li>Email: contact@autoelite.com</li>
                      <li>Formulaire de contact sur notre site</li>
                    </ul>
                    <div className="mt-4">
                      <Link to="/contact" className="text-primary hover:underline">
                        Nous contacter
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
          
          {activeCategory === "purchase" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Processus d'achat
                  </CardTitle>
                  <CardDescription>Tout ce que vous devez savoir pour acheter un véhicule</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Notre processus d'achat a été conçu pour être simple et transparent:</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Sélectionnez votre véhicule et demandez des informations supplémentaires</li>
                    <li>Organisez un essai routier si vous le souhaitez</li>
                    <li>Discutez des options de financement et d'assurance</li>
                    <li>Finalisez votre achat et recevez votre véhicule</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Accordion type="single" collapsible className="neo-morph">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Quelles sont les options de financement disponibles?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>Nous proposons plusieurs options de financement flexibles:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Paiement comptant</li>
                      <li>Crédit automobile avec des taux compétitifs</li>
                      <li>Location avec option d'achat (LOA)</li>
                      <li>Leasing pour les professionnels</li>
                    </ul>
                    <p className="mt-3">Nos conseillers financiers peuvent vous aider à choisir la meilleure option selon votre situation.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Les véhicules sont-ils garantis?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>
                      Tous nos véhicules bénéficient d'une garantie:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Garantie constructeur pour les véhicules neufs</li>
                      <li>Garantie minimum de 12 mois pour les véhicules d'occasion</li>
                      <li>Extensions de garantie disponibles</li>
                    </ul>
                    <p className="mt-3">Chaque véhicule est minutieusement inspecté par nos techniciens avant la vente.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
          
          {activeCategory === "support" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader className="text-center">
                    <PhoneCall className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle>Support Téléphonique</CardTitle>
                    <CardDescription>Contactez-nous directement</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-medium">+33 (0)1 23 45 67 89</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Lun-Ven: 9h-19h<br />
                      Sam: 10h-17h
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-1">
                  <CardHeader className="text-center">
                    <MessageCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Écrivez-nous</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-medium">support@autoelite.com</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Réponse sous 24h<br />
                      7j/7
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-1">
                  <CardHeader className="text-center">
                    <HelpCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle>FAQ</CardTitle>
                    <CardDescription>Questions fréquentes</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Consultez notre base de connaissances pour les réponses à vos questions
                    </p>
                    <Link 
                      to="/faq"
                      className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors text-sm"
                    >
                      Voir la FAQ
                    </Link>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Service après-vente</CardTitle>
                  <CardDescription>Besoin d'assistance après votre achat?</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Notre équipe de service après-vente est à votre disposition pour:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>L'entretien régulier de votre véhicule</li>
                    <li>Les réparations sous garantie</li>
                    <li>Les mises à jour techniques</li>
                    <li>Les conseils d'utilisation</li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="text-primary hover:underline">
                      Contacter le service après-vente
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeCategory === "account" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion de votre compte</CardTitle>
                  <CardDescription>Optimisez votre expérience utilisateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Avec votre compte personnel, vous pouvez:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sauvegarder vos véhicules favoris</li>
                    <li>Accéder à l'historique de vos recherches</li>
                    <li>Recevoir des alertes personnalisées</li>
                    <li>Suivre l'état de vos demandes</li>
                    <li>Accéder à vos documents et factures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Accordion type="single" collapsible className="neo-morph">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Comment modifier mes informations personnelles?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>Pour modifier vos informations personnelles:</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-2">
                      <li>Connectez-vous à votre compte</li>
                      <li>Accédez à la section "Profil"</li>
                      <li>Cliquez sur "Modifier" à côté des informations que vous souhaitez mettre à jour</li>
                      <li>Enregistrez vos modifications</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="px-6 py-4">
                    Comment configurer les alertes?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p>
                      Les alertes vous permettent d'être informé des nouveaux véhicules correspondant à vos critères:
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-2">
                      <li>Accédez à la section "Mes alertes"</li>
                      <li>Cliquez sur "Créer une alerte"</li>
                      <li>Définissez vos critères de recherche</li>
                      <li>Choisissez la fréquence des notifications</li>
                      <li>Confirmez pour activer l'alerte</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
        
        {/* Contact Section */}
        <div className="text-center p-8 neo-morph">
          <h2 className="text-xl font-normal mb-3">Besoin d'aide supplémentaire?</h2>
          <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <Link to="/contact" className="inline-block">
            <button className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full transition-colors">
              Nous Contacter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
