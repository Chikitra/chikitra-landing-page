import { Link } from "react-router-dom";
import logoImage from "@/assets/chikitra-logo.avif";
import footerBrand from "@/assets/footer-brand.png";

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

  // If showTagline is true, use footer-brand.png instead
  if (showTagline) {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <button onClick={scrollToTop} className="block group cursor-pointer bg-transparent border-none p-0">
        <img
          src={footerBrand}
          alt="Chikitra - Your AI Assistant for Smarter Clinics"
          className="w-auto h-auto max-w-[200px] object-contain"
        />
      </button>
    );
  }

  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Logo Icon */}
      <img
        src={logoImage}
        alt="Chikitra Logo"
        className={`${iconContainerClass} object-contain`}
      />

      {/* Brand text */}
      <span className={`font-brand font-bold ${textClass}`}>
        <span style={{ color: '#008080' }}>C</span>
        <span style={{ color: '#3ABDAA' }}>hikitra</span>
      </span>
    </Link>
  );
};

export default ChikitraLogo;
