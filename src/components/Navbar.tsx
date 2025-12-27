import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ChikitraLogo from "./ChikitraLogo";

const navItems = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About us", href: "#about", sectionId: "about" },
  { label: "Features", href: "#features", sectionId: "features" },
  { label: "Contact", href: "#book-demo", sectionId: "book-demo" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
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
            // Map chaos and why-chikitra to hero for nav highlight
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-chikitra-mint/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <ChikitraLogo variant="light" size="md" />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className={`text-sm font-medium transition-colors hover:text-chikitra-teal ${
                  activeSection === item.sectionId
                    ? "text-chikitra-teal font-semibold"
                    : "text-chikitra-dark"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Book a demo - outlined pill */}
          <li>
            <button
              onClick={handleBookDemo}
              className="btn-pill-outline text-sm"
            >
              Book a demo
            </button>
          </li>
        </ul>

        {/* Sign in button */}
        <Link
          to="/signin"
          className="btn-pill-filled text-sm"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
