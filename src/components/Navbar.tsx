import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const subsidiaries = [
  { name: "502 Notary", url: "http://502notary.com/" },
  { name: "Fresnaye Card", url: "http://fresnayecard.com/" },
  { name: "Travel by Fresnaye", url: "http://travelbyfresnaye.com/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subsidOpen, setSubsidOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSubsidOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-navy shadow-elevated"
          : "bg-navy/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold text-white tracking-wide">
              F<span className="text-teal">&</span>C
            </span>
            <span className="font-body text-[9px] uppercase tracking-[0.25em] text-white/60 font-light">
              Fresnaye & Company
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Services", path: "/services" },
            { label: "Team", path: "/team" },
            { label: "Enterprise Support", path: "/enterprise-support" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-teal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Subsidiaries dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setSubsidOpen(true)}
              onMouseLeave={() => setSubsidOpen(false)}
              className={`flex items-center gap-1 font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive("/subsidiaries") ? "text-teal" : "text-white/80 hover:text-white"
              }`}
            >
              <Link to="/subsidiaries">Our Subsidiaries</Link>
              <ChevronDown size={14} className={`transition-transform ${subsidOpen ? "rotate-180" : ""}`} />
            </button>
            {subsidOpen && (
              <div
                onMouseEnter={() => setSubsidOpen(true)}
                onMouseLeave={() => setSubsidOpen(false)}
                className="absolute top-full left-0 mt-2 w-52 bg-white shadow-elevated rounded overflow-hidden"
              >
                {subsidiaries.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-body text-foreground hover:bg-muted hover:text-teal transition-colors border-b border-border last:border-0"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="font-body text-sm font-medium px-5 py-2 border border-teal text-teal hover:bg-teal hover:text-white transition-all duration-200 tracking-wide"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 pb-6">
          <div className="container mx-auto px-6 flex flex-col gap-1 pt-4">
            {[
              { label: "Services", path: "/services" },
              { label: "Team", path: "/team" },
              { label: "Enterprise Support", path: "/enterprise-support" },
              { label: "Our Subsidiaries", path: "/subsidiaries" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-3 font-body text-sm font-medium border-b border-white/10 ${
                  isActive(item.path) ? "text-teal" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="mt-4 text-center font-body text-sm font-medium px-5 py-2.5 border border-teal text-teal"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
