import { Link } from "react-router-dom";
import iconLogo from "@/assets/chikitra-logo.avif";
import chikitraLogo from "@/assets/Long_logo_original_final.png";

interface PolicyLayoutProps {
  title: string;
  children?: React.ReactNode;
}

const PolicyLayout = ({ title, children }: PolicyLayoutProps) => {
  
  

  return (
    <div style={{ backgroundColor: '#ECF5EA', minHeight: '100vh' }}>
      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between relative"
        style={{ backgroundColor: '#E5F2E3' }}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={iconLogo} alt="Chikitra Icon" className="h-7 w-auto object-contain" />
          <img src={chikitraLogo} alt="Chikitra" className="h-5 w-auto object-contain" />
        </Link>

        <nav className="flex items-center gap-3 sm:gap-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-20">
          <Link
            to="/"
            className="text-xs md:text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#033F3D' }}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="text-xs md:text-sm font-medium transition-colors hover:opacity-80 whitespace-nowrap"
            style={{ color: '#033F3D' }}
          >
            About us
          </Link>
          <Link
            to="/#book-demo"
            className="text-xs md:text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#033F3D' }}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main className="w-full">
        <div className="w-full px-6 pt-1 flex justify-end">
          <p className="text-sm" style={{ color: '#008080' }}>
            Last Updated: 30.03.2026
          </p>
        </div>
        <div className="container mx-auto px-6 pt-4 max-w-4xl">
          <h1 className="text-3xl font-semibold text-center mb-14" style={{ color: '#008080' }}>
            {title}
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PolicyLayout;
