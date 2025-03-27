
import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
  title: string;
  icon: LucideIcon;
  content: string;
  subtext: string;
}

const ContactInfoCard = ({ title, icon: Icon, content, subtext }: ContactInfoProps) => {
  return (
    <div className="neo-morph p-6 text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-foreground mb-1">{content}</p>
      <p className="text-sm text-muted-foreground">{subtext}</p>
    </div>
  );
};

export default ContactInfoCard;
