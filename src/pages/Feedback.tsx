
import { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    // We don't need the recaptcha script for the new iframe
    // so we can remove this useEffect if it's not needed elsewhere
  }, []);

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-normal text-center mb-2">Évaluations et avis clients</h1>
        <p className="text-center text-muted-foreground mb-8 text-sm max-w-xl mx-auto">
          Consultez les avis de nos clients ou partagez votre expérience avec notre service
        </p>
        
        <div className="neo-morph p-6 mb-12">
          <iframe 
            style={{ width: "100%", height: "700px" }} 
            scrolling="yes" 
            className="responsive-item" 
            src="https://digitalreviews.icu/api/widgets/embedded/1/3?tabs=no&hide_search=yes" 
            allowFullScreen={true}
            title="Customer Reviews"
          />
        </div>
        
        <div className="text-center p-8 neo-morph">
          <h2 className="text-xl font-normal mb-3">Votre avis compte</h2>
          <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">
            Vos commentaires nous aident à améliorer continuellement notre service.
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
