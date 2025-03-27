
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactForm = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
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
