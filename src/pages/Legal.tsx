
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-medium mb-8">Terms of Service</h1>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to AutoElite. These Terms of Service ("Terms") govern your use of our website, services, and applications (collectively, the "Services") provided by AutoElite ("Company", "we", "us", or "our").
          </p>
          <p className="text-muted-foreground mb-4">
            By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">2. Use of Services</h2>
          <p className="text-muted-foreground mb-4">
            Our Services are intended for users who are at least 18 years of age. By using our Services, you represent and warrant that you are at least 18 years old and that you have the legal capacity to enter into these Terms.
          </p>
          <p className="text-muted-foreground mb-4">
            You agree not to use our Services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">3. Vehicle Listings and Purchases</h2>
          <p className="text-muted-foreground mb-4">
            While we strive to provide accurate information about the vehicles listed on our platform, we do not warrant that the descriptions, photographs, or other representations of vehicles are accurate, complete, reliable, current, or error-free.
          </p>
          <p className="text-muted-foreground mb-4">
            All vehicle purchases are subject to our standard purchase agreement, which will be provided to you before completing a transaction. The purchase agreement will outline the specific terms related to pricing, financing, delivery, warranties, and return policies.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">4. User Accounts</h2>
          <p className="text-muted-foreground mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p className="text-muted-foreground mb-4">
            You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">5. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            The Services and their original content, features, and functionality are and will remain the exclusive property of the Company and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p className="text-muted-foreground mb-4">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">6. Termination</h2>
          <p className="text-muted-foreground mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="text-muted-foreground mb-4">
            Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall the Company, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms, please contact us at legal@autoelite.com.
          </p>
        </div>
        
        <div className="flex space-x-4 justify-center mt-12">
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link to="/data-protection" className="text-primary hover:underline">
            Data Protection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
