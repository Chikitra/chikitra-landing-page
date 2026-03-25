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
  const [isInHero, setIsInHero] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "chaos", "why-chikitra", "features", "community", "about", "pricing", "book-demo"];
      const scrollPosition = window.scrollY + 100;

      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setIsInHero(scrollPosition < heroBottom);
      }

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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

  const navBg = isInHero ? '#0B3A35' : '#EBF5E9';
  const linkColor = isInHero ? '#D6EADB' : '#033F3D';
  const bookDemoBg = isInHero ? '#016361' : '#D6EADB';
  const bookDemoText = isInHero ? '#EBF5E9' : '#033F3D';
  const bookDemoBorder = isInHero
    ? '1.5px solid rgba(91, 178, 157, 0.6)'
    : '1.5px solid rgba(91, 178, 157, 0.6)';
  const bookDemoShadow = '0 0 10px rgba(91, 178, 157, 0.4)';
  const signInColor = isInHero ? '#D6EADB' : '#033F3D';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-300"
      style={{ backgroundColor: navBg }}
    >
      <nav className="container mx-auto px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5 lg:flex-1">
          <img src={iconLogo} alt="Chikitra Icon" className="h-7 md:h-8 w-auto object-contain" />
          <img src={chikitraLogo} alt="Chikitra" className="h-5 md:h-6 w-auto object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-12 justify-center mx-4 lg:mx-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className="text-sm lg:text-base font-medium transition-colors duration-300 whitespace-nowrap hover:opacity-80"
                style={{
                  color: linkColor,
                  fontWeight: activeSection === item.sectionId ? '600' : '500'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={handleBookDemo}
              className="text-xs lg:text-sm whitespace-nowrap rounded-full px-3 lg:px-3.5 pt-[5px] pb-[7px] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center"
              style={{
                backgroundColor: bookDemoBg,
                color: bookDemoText,
                border: bookDemoBorder,
                boxShadow: bookDemoShadow,
              }}
            >
              Book a demo
            </button>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 lg:flex-1 justify-end">
          <Link
            to="/signin"
            className="text-xs lg:text-sm whitespace-nowrap font-medium transition-colors duration-300 hover:opacity-80"
            style={{ color: signInColor }}
          >
            Sign in
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: linkColor }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 border-t shadow-lg"
          style={{ backgroundColor: isInHero ? 'rgba(11, 58, 53, 0.98)' : 'rgba(235, 245, 233, 0.98)', borderColor: '#016361' }}
        >
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                  className="block py-3 px-4 text-base font-medium transition-colors rounded-lg"
                  style={{
                    color: linkColor,
                    fontWeight: activeSection === item.sectionId ? '600' : '500',
                    backgroundColor: activeSection === item.sectionId ? (isInHero ? 'rgba(1, 99, 97, 0.3)' : 'rgba(1, 99, 97, 0.1)') : 'transparent'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={handleBookDemo}
                className="w-full pt-[9px] pb-[11px] px-4 text-base font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: bookDemoBg,
                  color: bookDemoText,
                  border: bookDemoBorder,
                  boxShadow: bookDemoShadow,
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
