import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import heroSubsidiaries from "@/assets/hero-subsidiaries.jpg";

const subsidiaries = [
  {
    name: "502 Notary",
    url: "http://502notary.com/",
    description: "Professional notary and legal documentation services.",
    category: "Legal Services",
  },
  {
    name: "Fresnaye Card",
    url: "http://fresnayecard.com/",
    description: "Exclusive financial card services for our global clientele.",
    category: "Financial Services",
  },
  {
    name: "Travel by Fresnaye",
    url: "http://travelbyfresnaye.com/",
    description: "Premium travel management and concierge services.",
    category: "Travel & Lifestyle",
  },
  {
    name: "Rogét Albert",
    url: "https://rogetalbert.com/",
    description: "Elite legal services and international advisory.",
    category: "Legal",
  },
  {
    name: "Centurion",
    url: "http://centurion.ae/",
    description: "Financial services excellence in the Middle East and beyond.",
    category: "Financial Services",
  },
  {
    name: "Gideon Aerospace",
    url: "http://gideonaerospace.com/",
    description: "Aerospace innovation and strategic consulting.",
    category: "Aerospace",
  },
  {
    name: "Looking Glass",
    url: "http://lookingglass.ch/",
    description: "Artificial intelligence solutions and research.",
    category: "A.I.",
  },
  {
    name: "Caelum Bank",
    url: "https://caelumbank.com/",
    description: "Venture capital and emerging market investments.",
    category: "V.C.",
  },
  {
    name: "Festung Health",
    url: "https://festunghealth.com/",
    description: "Advanced health analytics and medical intelligence.",
    category: "Health Analytics",
  },
];

export default function Subsidiaries() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="pt-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroSubsidiaries})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "ken-burns 26s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(220 60% 8% / 0.92) 0%, hsl(218 55% 14% / 0.80) 50%, hsl(175 70% 41% / 0.18) 100%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(175 70% 41%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 41%) 1px, transparent 1px)", backgroundSize: "70px 70px" }}
        />
        <div className="container mx-auto px-6 py-28 relative">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fade-in 0.6s ease both" }}>
            <div className="w-12 h-px bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
              Our Portfolio
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6" style={{ animation: "fade-in 0.7s ease 0.1s both" }}>
            Our <em>Subsidiaries</em>
          </h1>
          <p className="font-body text-white/65 text-lg max-w-2xl leading-relaxed" style={{ animation: "fade-in 0.7s ease 0.2s both" }}>
            Fresnaye & Company's portfolio of specialized subsidiaries spans legal, financial, technology, aerospace, and health sectors — delivering focused expertise across every dimension of global business.
          </p>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 97%))" }} />
      </div>

      {/* Subsidiaries grid */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((sub) => (
              <a
                key={sub.name}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-card border border-border hover:border-teal/40 transition-all duration-300 shadow-card hover:shadow-elevated block"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-body text-[10px] uppercase tracking-[0.25em] text-teal font-semibold bg-teal/10 px-3 py-1">
                    {sub.category}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground group-hover:text-teal transition-colors"
                  />
                </div>
                <div className="w-8 h-0.5 bg-teal/30 group-hover:bg-teal mb-4 transition-colors" />
                <h3 className="font-display text-2xl text-foreground font-medium mb-3 group-hover:text-teal transition-colors">
                  {sub.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {sub.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-teal font-body text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit website →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
