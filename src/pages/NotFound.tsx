
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center neo-morph p-8 md:p-12 max-w-md">
        <h1 className="text-6xl font-medium mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <CustomButton>
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
