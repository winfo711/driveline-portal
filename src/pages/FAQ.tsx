
import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/custom-button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the buying process work?",
    answer: "Our buying process is designed to be simple and transparent. You can browse our inventory online, select a vehicle that interests you, and either proceed with a purchase application or schedule a test drive. Once you've decided to buy, you can choose from our financing options or pay in full. We'll handle the paperwork, and you can choose between home delivery or pickup at one of our locations.",
    category: "Buying Process",
  },
  {
    question: "Can I test drive a vehicle before buying?",
    answer: "Yes, we encourage test drives. You can schedule a test drive through our website or by contacting our customer service team. We'll bring the vehicle to your location at your convenience, or you can visit one of our facilities.",
    category: "Buying Process",
  },
  {
    question: "What financing options are available?",
    answer: "We offer a variety of financing options to fit your needs. You can apply for financing online through our secure portal. We work with multiple lenders to ensure you get competitive rates. You can also use our payment calculator to estimate monthly payments based on different down payments and terms.",
    category: "Financing",
  },
  {
    question: "Do you offer warranties on your vehicles?",
    answer: "Yes, all our vehicles come with a standard warranty that covers major components. We also offer extended warranty options for additional peace of mind. The specific coverage details vary by vehicle and warranty plan, but our representatives can provide detailed information during the purchasing process.",
    category: "Warranty & Returns",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 5-day money-back guarantee on all vehicle purchases. If you're not completely satisfied, you can return the vehicle within 5 days for a full refund, provided the vehicle is in the same condition as when delivered and hasn't exceeded 200 miles beyond the delivery mileage.",
    category: "Warranty & Returns",
  },
  {
    question: "How do you ensure vehicle quality?",
    answer: "Every vehicle in our inventory undergoes a comprehensive 150+ point inspection conducted by certified technicians. We check mechanical components, electrical systems, interior and exterior condition, and more. Only vehicles that meet our strict quality standards are listed for sale. All inspection reports are available for your review before purchase.",
    category: "Vehicle Quality",
  },
  {
    question: "Do you deliver vehicles nationwide?",
    answer: "Yes, we offer nationwide delivery for most of our vehicles. Delivery fees vary based on your location and the vehicle's current location. The exact delivery cost will be calculated and presented to you before finalizing your purchase.",
    category: "Delivery & Logistics",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary depending on your location and the vehicle's current location. Typically, local deliveries are completed within 1-3 days, while nationwide deliveries may take 5-10 days. Our team will provide you with a specific delivery window when you complete your purchase.",
    category: "Delivery & Logistics",
  },
  {
    question: "What documents do I need to purchase a vehicle?",
    answer: "To purchase a vehicle, you'll need a valid driver's license, proof of insurance, and proof of income (if financing). If you're trading in a vehicle, you'll also need the title and registration for that vehicle. Our team will guide you through any additional documentation requirements based on your specific situation and location.",
    category: "Documentation",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Yes, we accept trade-ins as part of the purchasing process. You can get an initial trade-in estimate through our website by providing details about your vehicle's make, model, year, condition, and mileage. A final offer will be made after we inspect the vehicle. The trade-in value can be applied directly to your purchase.",
    category: "Trade-ins",
  },
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  const toggleItem = (question: string) => {
    setOpenItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };
  
  const filteredFaqs = activeCategory 
    ? faqs.filter(faq => faq.category === activeCategory) 
    : faqs;
  
  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="font-medium mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services, buying process, and policies.
          Can't find what you're looking for? Contact our support team.
        </p>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            !activeCategory ? "bg-primary text-primary-foreground" : "neo-morph hover:bg-secondary/50"
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All
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
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="neo-morph overflow-hidden">
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
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <div className="mt-16 neo-morph p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-medium mb-3">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to help you with any questions or concerns you may have.
        </p>
        <Link to="/contact">
          <CustomButton>Contact Us</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
