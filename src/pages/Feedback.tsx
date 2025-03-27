
import { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    // Ensure the iframe loads properly
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-6">Avis et Commentaires</h1>
        <p className="text-center text-muted-foreground mb-8">
          Découvrez ce que nos clients disent de nous ou laissez votre propre avis sur notre service.
        </p>
        
        <div className="neo-morph p-6 mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.966560784485!2d2.3404197!3d48.8725175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e145ccb3091%3A0x9495031c81665108!2sGoogle%20Reviews!5e0!3m2!1sfr!2sfr!4v1653894913311!5m2!1sfr!2sfr"
            width="100%" 
            height="600" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Reviews"
            className="rounded-lg"
          />
        </div>
        
        <div className="text-center p-8 neo-morph">
          <h2 className="text-xl font-medium mb-3">Nous Apprécions Vos Commentaires</h2>
          <p className="text-muted-foreground mb-6">
            Vos avis nous aident à améliorer continuellement notre service. Merci de prendre le temps de partager votre expérience.
          </p>
          <a 
            href="https://g.page/r/CZyCxQy4h4YYEB0/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full transition-colors">
              Laisser un Avis Google
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
