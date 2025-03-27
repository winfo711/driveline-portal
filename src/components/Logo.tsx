
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

type LogoProps = {
  textSize?: "sm" | "md" | "lg";
  iconSize?: number;
  className?: string;
};

const Logo = ({ textSize = "md", iconSize = 24, className = "" }: LogoProps) => {
  // Define text size classes
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 font-medium tracking-tight ${className}`}
    >
      <div className="p-1 bg-primary/10 rounded-md">
        <Car size={iconSize} className="text-primary" />
      </div>
      <div className={textSizeClasses[textSize]}>
        <span className="text-primary">Auto</span>
        <span className="text-primary/80">Elite</span>
      </div>
    </Link>
  );
};

export default Logo;
