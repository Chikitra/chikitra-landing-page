import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";

interface ChikitraLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const ChikitraLogo = ({ variant = "light", showTagline = false, size = "md" }: ChikitraLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const iconContainerClass = sizeClasses[size];
  const textClass = textSizes[size];

  return (
    <Link to="/" className="flex items-start gap-2 group">
      {/* Logo Icon */}
      <div className={`relative ${iconContainerClass} flex-shrink-0`}>
        {/* Main rounded square background */}
        <div className="absolute inset-0 bg-chikitra-teal rounded-lg" />
        
        {/* Heart icon */}
        <Heart 
          className="absolute top-1 left-1 w-3 h-3 text-red-500 fill-red-500" 
        />
        
        {/* Plus icon */}
        <Plus 
          className="absolute top-1 right-1 w-3 h-3 text-chikitra-mint" 
        />
        
        {/* Inner screen area */}
        <div className="absolute bottom-1.5 left-1.5 right-1.5 h-[45%] bg-chikitra-dark rounded-sm" />
      </div>
      
      {/* Brand text */}
      <div className="flex flex-col">
        <span 
          className={`font-brand font-bold ${textClass} ${
            variant === "light" ? "text-chikitra-teal" : "text-chikitra-teal"
          }`}
        >
          Chikitra
        </span>
        
        {showTagline && (
          <div className={`text-xs ${variant === "light" ? "text-chikitra-dark" : "text-chikitra-mint"}`}>
            <p>Your AI Assistant</p>
            <p>for Smarter Clinics</p>
            <p className="mt-1 italic">Just, <span className="text-chikitra-teal">Chikitra</span></p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ChikitraLogo;
