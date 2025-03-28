
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import { useSiteSettings } from "@/hooks/use-site-settings";

interface ContactFormProps {
  siteName?: string;
}

const ContactForm = ({ siteName }: ContactFormProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { data: settingsData } = useSiteSettings();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://admin.bpraceloc.com/api';
  
  const siteNameValue = siteName || settingsData?.data?.settings?.site_name || "AutoElite";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      setIsSubmitted(true);
      toast({
        title: "Message Envoyé",
        description: `Nous avons bien reçu votre message et vous répondrons rapidement.`,
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="neo-morph p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-medium">Envoyez-Nous un Message</h2>
      </div>
      
      {isSubmitted ? (
        <div className="absolute inset-0 bg-background/95 flex flex-col items-center justify-center p-6 animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-[scale-in_0.3s_ease-out,bounce_1s_ease-in-out_0.3s]">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-medium mb-2 animate-fade-in">Message Envoyé!</h3>
          <p className="text-center text-muted-foreground animate-fade-in">
            Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      ) : null}
      
      {submitError && !isSubmitted && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
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
            className={`w-full ${isMobile ? 'py-3' : ''}`}
            size={isMobile ? "sm" : "lg"}
            isLoading={isSubmitting}
          >
            {!isSubmitting && <Send className="h-4 w-4 mr-2" style={{ transform: 'rotate(45deg)' }} />}
            Envoyer le Message
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
