import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import ChikitraLogo from "./ChikitraLogo";
import botPhone from "@/assets/bot-phone.png";

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
    <footer className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: '#052826' }}>
      {/* Background bot - Extreme right */}
      <div className="absolute right-0 bottom-0 pointer-events-none h-full max-h-[300px] md:max-h-[400px] translate-x-[10%]" style={{ opacity: 0.07 }}>
        <img src={botPhone} alt="" className="h-full w-auto" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo & Tagline - Emphasized */}
          <div className="scale-100 md:scale-110 origin-center md:origin-left mx-auto md:mx-0">
            <ChikitraLogo variant="dark" showTagline size="lg" />
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4" style={{ color: '#E6E7E8' }}>Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="transition-colors text-sm hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="transition-colors text-sm hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="transition-colors text-sm hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4" style={{ color: '#E6E7E8' }}>Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("book-demo")}
                  className="transition-colors text-sm hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Book a demo
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/918637389951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-sm hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4" style={{ color: '#E6E7E8' }}>Get in touch</h4>
            <a
              href="mailto:hello@chikitra.com"
              className="transition-colors text-sm block mb-6 hover:opacity-80"
              style={{ color: '#E6E7E8' }}
            >
              hello@chikitra.com
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors hover:opacity-80"
                  style={{
                    color: '#DEDEDE',
                    borderColor: '#DEDEDE'
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(230, 231, 232, 0.2)' }}>
          <p className="text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 Chikitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
