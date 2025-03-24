
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-medium mb-8">Privacy Policy</h1>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            At AutoElite, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-muted-foreground mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect several types of information from and about users of our website and services, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Personal information such as name, email address, telephone number, postal address, financial information, and government-issued identification numbers</li>
            <li>Information about your vehicle interests and preferences</li>
            <li>Technical data such as IP address, browser type, device information, and cookies</li>
            <li>Usage data about how you interact with our website and services</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">3. How We Collect Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We collect information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Directly from you when you provide it to us (e.g., when you create an account, fill out forms, or correspond with us)</li>
            <li>Automatically as you navigate through our website (using cookies and similar technologies)</li>
            <li>From third parties, such as business partners, credit reporting agencies, and public databases</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">4. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We may use the information we collect about you to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Provide, maintain, and improve our website and services</li>
            <li>Process transactions and send related information</li>
            <li>Verify your identity and eligibility for our services</li>
            <li>Communicate with you about our services, promotions, and events</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Analyze usage patterns and improve our website and services</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">5. Disclosure of Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We may disclose your personal information to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Our subsidiaries and affiliates</li>
            <li>Business partners, service providers, and contractors who perform services on our behalf</li>
            <li>Financial institutions and payment processors to facilitate transactions</li>
            <li>Government agencies or other third parties when required by law or to protect our rights</li>
            <li>A buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of our assets</li>
          </ul>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">6. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">7. Your Choices</h2>
          <p className="text-muted-foreground mb-4">
            You can review and change your personal information by logging into your account settings. You may also opt-out of receiving marketing communications from us by following the unsubscribe instructions included in each communication.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">8. Children's Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Our website and services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from children under 18. If we learn we have collected or received personal information from a child under 18, we will delete that information.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">9. Changes to Our Privacy Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update our Privacy Policy from time to time. If we make material changes, we will notify you through the website or by other means. Your continued use of our website and services after such changes indicates your acceptance of the updated Privacy Policy.
          </p>
        </div>
        
        <div className="neo-morph p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium mb-4">10. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at privacy@autoelite.com.
          </p>
        </div>
        
        <div className="flex space-x-4 justify-center mt-12">
          <Link to="/legal" className="text-primary hover:underline">
            Terms of Service
          </Link>
          <Link to="/data-protection" className="text-primary hover:underline">
            Data Protection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
