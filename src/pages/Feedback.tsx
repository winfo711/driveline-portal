
import { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    // We don't need the recaptcha script for the new iframe
    // so we can remove this useEffect if it's not needed elsewhere
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
            style={{ width: "100%", height: "700px" }} 
            scrolling="yes" 
            className="responsive-item" 
            src="https://digitalreviews.icu/api/widgets/embedded/1/3?tabs=no&hide_search=yes" 
            allowFullScreen={true}
            title="Customer Reviews"
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
