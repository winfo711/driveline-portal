
import { useState, useEffect } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/custom-button";
import { useQuery } from "@tanstack/react-query";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const fetchFAQs = async () => {
  const response = await fetch("https://admin.bpraceloc.com/api/faq");
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs");
  }
  return await response.json();
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  const { 
    data: faqData,
    isLoading,
    error
  } = useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFAQs
  });
  
  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  const toggleItem = (question: string) => {
    setOpenItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };
  
  // Get FAQs from API or use fallback
  const faqs: FAQItem[] = faqData?.data?.faq || [];
  
  // Extract unique categories from API data
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  
  const filteredFaqs = activeCategory 
    ? faqs.filter(faq => faq.category === activeCategory) 
    : faqs;
  
  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="font-medium mb-4">Foire aux questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trouvez des réponses aux questions courantes sur nos services, notre processus d'achat et nos politiques.
          Vous ne trouvez pas ce que vous cherchez? Contactez notre équipe de support.
        </p>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          <p className="ml-2">Chargement des données FAQ...</p>
        </div>
      ) : error ? (
        <div className="text-center text-destructive p-8 neo-morph">
          <p>Une erreur s'est produite lors du chargement des données FAQ. Veuillez réessayer plus tard.</p>
        </div>
      ) : (
        <>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !activeCategory ? "bg-primary text-primary-foreground" : "neo-morph hover:bg-secondary/50"
              }`}
              onClick={() => setActiveCategory(null)}
            >
              Tout
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category ? "bg-primary text-primary-foreground" : "neo-morph hover:bg-secondary/50"
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="neo-morph overflow-hidden">
                  <button
                    className="w-full p-6 flex items-start justify-between text-left"
                    onClick={() => toggleItem(faq.question)}
                  >
                    <h3 className="font-medium pr-8">{faq.question}</h3>
                    {openItems[faq.question] ? (
                      <MinusCircle className="flex-shrink-0 h-6 w-6 text-primary" />
                    ) : (
                      <PlusCircle className="flex-shrink-0 h-6 w-6 text-primary" />
                    )}
                  </button>
                  
                  {openItems[faq.question] && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-foreground/85 leading-relaxed mt-4 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center p-8 neo-morph">
                <p className="text-muted-foreground">Aucune FAQ trouvée. Veuillez vérifier plus tard.</p>
              </div>
            )}
          </div>
        </>
      )}
      
      {/* Contact Section */}
      <div className="mt-16 neo-morph p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-medium mb-3">Encore des questions?</h2>
        <p className="text-muted-foreground mb-6">
          Notre équipe est là pour vous aider avec toutes vos questions ou préoccupations.
        </p>
        <Link to="/contact">
          <CustomButton>Nous contacter</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
