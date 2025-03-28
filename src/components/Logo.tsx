
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

type LogoProps = {
  textSize?: "sm" | "md" | "lg";
  iconSize?: number;
  className?: string;
  siteName?: string;
  logoUrl?: string;
};

const Logo = ({ 
  textSize = "md", 
  iconSize = 24, 
  className = "", 
  siteName = "AutoElite",
  logoUrl
}: LogoProps) => {
  // Define text size classes
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  // Split site name into two parts for styling
  const nameParts = siteName.split(' ');
  const firstPart = nameParts[0] || "Auto";
  const secondPart = nameParts.slice(1).join(' ') || "Elite";

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 font-medium tracking-tight ${className}`}
    >
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={siteName}
          className="h-10 w-auto"
        />
      ) : (
        <>
          <div className="p-1 bg-primary/10 rounded-md">
            <Car size={iconSize} className="text-primary" />
          </div>
          <div className={textSizeClasses[textSize]}>
            <span className="text-primary">{firstPart}</span>
            <span className="text-primary/80">{secondPart}</span>
          </div>
        </>
      )}
    </Link>
  );
};

export default Logo;
