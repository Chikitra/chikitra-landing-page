import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import ChikitraLogo from "./ChikitraLogo";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/chikitra_official?utm_source=qr&igsh=aWluN2tia3JyeXNv",
    label: "Instagram"
  },
  { 
    icon: MessageCircle, 
    href: "https://wa.me/918637389951",
    label: "WhatsApp"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/chikitra/",
    label: "LinkedIn"
  },
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/share/17XUQhvto8/",
    label: "Facebook"
  },
];

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <ChikitraLogo variant="dark" showTagline size="md" />
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-chikitra-teal mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("community")}
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-chikitra-teal mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("book-demo")}
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  Book a demo
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/918637389951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-semibold text-chikitra-teal mb-4">Get in touch</h4>
            <a 
              href="mailto:hello@chikitra.com"
              className="text-chikitra-mint/80 hover:text-chikitra-mint transition-colors text-sm block mb-6"
            >
              hello@chikitra.com
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-chikitra-mint/30 text-chikitra-mint/80 hover:text-chikitra-mint hover:border-chikitra-mint transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-chikitra-mint/20 pt-8">
          <p className="text-center text-chikitra-mint/60 text-sm">
            © 2025 Chikitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
