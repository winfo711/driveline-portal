
import { Check, Search, FileText, CreditCard, Truck, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/custom-button";

const steps = [
  {
    id: 1,
    title: "Browse Our Selection",
    description: "Explore our curated selection of premium vehicles. Use detailed filters to find the perfect match for your needs and preferences.",
    icon: Search,
  },
  {
    id: 2,
    title: "Vehicle Information",
    description: "Each vehicle listing includes comprehensive information, detailed specifications, high-quality images, and transparent pricing.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Financing Options",
    description: "Choose from flexible financing options tailored to your budget. Get pre-approved quickly with our streamlined application process.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Home Delivery",
    description: "We'll deliver your vehicle directly to your doorstep at your convenience, or you can schedule a pickup at one of our locations.",
    icon: Truck,
  }
];

const benefits = [
  {
    title: "5-Day Money-Back Guarantee",
    description: "If you're not completely satisfied, return the vehicle within 5 days for a full refund.",
    icon: Clock,
  },
  {
    title: "150+ Point Inspection",
    description: "Every vehicle undergoes a comprehensive inspection to ensure quality and reliability.",
    icon: Check,
  },
  {
    title: "Extended Warranty Options",
    description: "Additional peace of mind with our flexible warranty plans to protect your investment.",
    icon: Shield,
  }
];

const HowItWorks = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-medium mb-4">How It Works</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've reimagined the car buying experience to make it simple, transparent, and enjoyable.
          From browsing to delivery, here's what you can expect.
        </p>
      </div>
      
      {/* Steps Section */}
      <div className="relative mb-20">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 -ml-px w-0.5 bg-gray-100 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={step.id} className="md:grid md:grid-cols-2 md:gap-8">
              <div className={`md:flex ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                <div className={`relative flex md:basis-4/5 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  {/* Mobile Timeline Dot */}
                  <div className="absolute top-0 left-0 md:hidden -ml-1">
                    <div className="h-16 w-16 rounded-full neo-morph flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Desktop Timeline Dot */}
                  <div className="hidden md:flex absolute top-0 md:top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="h-16 w-16 rounded-full neo-morph flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className={`pt-3 pl-20 md:pl-0 md:pt-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white neo-morph p-6 md:mt-6">
                      <div className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 text-primary mb-3">
                        Step {step.id}
                      </div>
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-3">The AutoElite Advantage</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're committed to providing exceptional service and value with every purchase.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="neo-morph p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <benefit.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* FAQ Link */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-medium mb-4">Have Questions?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Check our frequently asked questions for more information about our process.
        </p>
        <Link to="/faq">
          <CustomButton>View FAQ</CustomButton>
        </Link>
      </div>
      
      {/* CTA Section */}
      <div className="neo-morph p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl">
            Browse our premium selection of vehicles and take the first step towards a seamless buying experience.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link to="/vehicles">
            <CustomButton size="lg">Browse Vehicles</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
