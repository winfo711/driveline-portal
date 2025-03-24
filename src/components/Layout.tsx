
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [isPageChanging, setIsPageChanging] = useState(false);
  
  useEffect(() => {
    setIsPageChanging(true);
    const timer = setTimeout(() => {
      setIsPageChanging(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isPageChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-300 ease-in-out`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
