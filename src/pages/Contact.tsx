
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = [
  {
    title: "Téléphone",
    icon: Phone,
    content: "+1 (800) 555-AUTO",
    subtext: "Lun-Ven, 9h-18h ET",
  },
  {
    title: "Email",
    icon: Mail,
    content: "support@autoelite.com",
    subtext: "Nous répondons sous 24 heures",
  },
  {
    title: "Siège Social",
    icon: MapPin,
    content: "123 Luxury Lane, San Francisco, CA 94103",
    subtext: "Sur rendez-vous uniquement",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Envoyé",
        description: "Nous avons bien reçu votre message et vous répondrons rapidement.",
      });
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <h1 className="font-medium mb-4">Contactez-Nous</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vous avez des questions concernant nos véhicules ou nos services ? Contactez notre équipe et nous nous ferons un plaisir de vous aider.
        </p>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {ContactInfo.map((item, index) => (
          <div key={index} className="neo-morph p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">{item.title}</h3>
            <p className="text-foreground mb-1">{item.content}</p>
            <p className="text-sm text-muted-foreground">{item.subtext}</p>
          </div>
        ))}
      </div>
      
      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="neo-morph p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-medium">Envoyez-Nous un Message</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="neo-morph-inset w-full px-4 py-2.5 text-foreground focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="neo-morph-inset w-full px-4 py-2.5 text-foreground focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone (Optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="neo-morph-inset w-full px-4 py-2.5 text-foreground focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="neo-morph-inset w-full px-4 py-2.5 text-foreground focus:outline-none"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Vehicle Inquiry">Demande de Renseignements sur un Véhicule</option>
                  <option value="Financing Question">Question sur le Financement</option>
                  <option value="Schedule Test Drive">Planifier un Essai</option>
                  <option value="Support">Support</option>
                  <option value="Other">Autre</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="neo-morph-inset w-full px-4 py-2.5 text-foreground focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            
            <div>
              <CustomButton
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer le Message
              </CustomButton>
            </div>
          </form>
        </div>
        
        {/* Map */}
        <div className="neo-morph p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-medium">Visitez Nos Établissements</h2>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* This would be a real map component in a production app */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Une carte interactive serait affichée ici
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-medium">Siège Social</h3>
              <p className="text-muted-foreground">123 Luxury Lane, San Francisco, CA 94103</p>
            </div>
            
            <div>
              <h3 className="font-medium">Succursale Los Angeles</h3>
              <p className="text-muted-foreground">456 Premium Blvd, Los Angeles, CA 90001</p>
            </div>
            
            <div>
              <h3 className="font-medium">Succursale New York</h3>
              <p className="text-muted-foreground">789 Elite Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Hours */}
      <div className="mt-16 neo-morph p-8 text-center">
        <h2 className="text-xl font-medium mb-6">Heures d'Ouverture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Service Commercial</h3>
            <p className="text-muted-foreground">Lundi - Vendredi: 9h - 19h</p>
            <p className="text-muted-foreground">Samedi: 10h - 18h</p>
            <p className="text-muted-foreground">Dimanche: 11h - 17h</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Centre de Service</h3>
            <p className="text-muted-foreground">Lundi - Vendredi: 8h - 18h</p>
            <p className="text-muted-foreground">Samedi: 8h - 16h</p>
            <p className="text-muted-foreground">Dimanche: Fermé</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Service Client</h3>
            <p className="text-muted-foreground">Lundi - Vendredi: 8h - 20h</p>
            <p className="text-muted-foreground">Samedi: 9h - 17h</p>
            <p className="text-muted-foreground">Dimanche: 12h - 17h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
