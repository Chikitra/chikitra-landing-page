import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import chikitraLogo from "@/assets/Long_logo_original_final.png";
import iconLogo from "@/assets/chikitra-logo.avif";

const navItems = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About us", href: "#about", sectionId: "about" },
  { label: "Features", href: "#features", sectionId: "features" },
  { label: "Contact", href: "#book-demo", sectionId: "book-demo" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "chaos", "why-chikitra", "features", "community", "about", "pricing", "book-demo"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (sectionId === "chaos" || sectionId === "why-chikitra") {
              setActiveSection("hero");
            } else if (sectionId === "community") {
              setActiveSection("about");
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm" style={{ backgroundColor: 'rgba(235, 245, 233, 0.95)' }}>
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={iconLogo}
            alt="Chikitra Icon"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <img
            src={chikitraLogo}
            alt="Chikitra"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links - hidden below 1024px (lg breakpoint) */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-12 flex-1 justify-center mx-4 lg:mx-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className="text-sm lg:text-base font-medium transition-colors whitespace-nowrap"
                style={{
                  color: '#053F3D',
                  fontWeight: activeSection === item.sectionId ? '600' : '500'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Book a demo - outlined pill */}
          <li>
            <button
              onClick={handleBookDemo}
              className="btn-pill text-xs lg:text-sm whitespace-nowrap"
              style={{
                color: '#053F3D',
                borderColor: '#016361',
                borderWidth: '2px',
                borderStyle: 'solid',
                backgroundColor: 'transparent'
              }}
            >
              Book a demo
            </button>
          </li>
        </ul>

        {/* Right side: Sign in + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Sign in button */}
          <Link
            to="/signin"
            className="btn-pill text-xs lg:text-sm whitespace-nowrap"
            style={{
              color: '#DBEFE9',
              backgroundColor: '#016361'
            }}
          >
            Sign in
          </Link>

          {/* Hamburger Menu Button - visible below lg (1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#053F3D' }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 right-0 border-t shadow-lg"
          style={{ backgroundColor: 'rgba(235, 245, 233, 0.98)', borderColor: '#016361' }}
        >
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                  className="block py-3 px-4 text-base font-medium transition-colors rounded-lg"
                  style={{
                    color: '#053F3D',
                    fontWeight: activeSection === item.sectionId ? '600' : '500',
                    backgroundColor: activeSection === item.sectionId ? 'rgba(1, 99, 97, 0.1)' : 'transparent'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={handleBookDemo}
                className="w-full py-3 px-4 text-base font-medium rounded-lg transition-colors"
                style={{
                  color: '#053F3D',
                  borderColor: '#016361',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  backgroundColor: 'transparent'
                }}
              >
                Book a demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
