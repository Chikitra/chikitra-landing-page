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
        className="sticky top-0 z-50 px-6 py-3 flex items-center relative"
        style={{ backgroundColor: '#E5F2E3' }}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={iconLogo} alt="Chikitra Icon" className="h-7 w-auto object-contain" />
          <img src={chikitraLogo} alt="Chikitra" className="h-5 w-auto object-contain" />
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-20">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#033F3D' }}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#033F3D' }}
          >
            About us
          </Link>
          <Link
            to="/#book-demo"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#033F3D' }}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-3xl font-semibold text-center mb-8" style={{ color: '#008080' }}>
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
};

export default PolicyLayout;
