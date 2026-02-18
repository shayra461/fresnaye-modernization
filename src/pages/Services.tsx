import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Building2, Globe, Users, BarChart3, Shield, ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: TrendingUp,
    title: "Strategy & Planning",
    tag: "Advisory",
    desc: "Making the right moves involves using granular analysis to choose the right submarkets, and upending the traditional approach. We partner with leadership teams to craft strategies that create durable competitive advantage.",
    highlight: "Competitive Advantage",
  },
  {
    icon: Building2,
    title: "Financial Services",
    tag: "Transactions",
    desc: "We bring our clients unrivaled transaction and integration expertise, deep industry knowledge, a global network cultivated over the course of nearly 50 years. Our financial advisory services span M&A, capital raising, and restructuring.",
    highlight: "M&A · Capital · Restructuring",
  },
  {
    icon: Globe,
    title: "Management",
    tag: "Consulting",
    desc: "We bring an unrivaled skill to integrate structure, process optimization, and people for a holistic impact. Our management consulting practice transforms organizations from the inside out.",
    highlight: "Organizational Transformation",
  },
  {
    icon: Users,
    title: "Leadership Development",
    tag: "People",
    desc: "Cultivating the next generation of leaders is central to sustainable organizational growth. We work with executive teams to build the capabilities required to navigate complex, rapidly changing environments.",
    highlight: "Executive Capability",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    tag: "Research",
    desc: "Our research and intelligence capabilities provide clients with the data-driven insights they need to make confident decisions. We analyze markets, competitors, and trends to inform strategy at every level.",
    highlight: "Data-Driven Insights",
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    tag: "Governance",
    desc: "In today's regulatory environment, proactive risk management is a strategic imperative. We help clients identify, assess, and mitigate risks across operational, financial, and reputational dimensions.",
    highlight: "Proactive Risk Management",
  },
];

// Intersection observer hook for staggered entrance
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Card background layers */}
      <div className="absolute inset-0 bg-card border border-border transition-all duration-500 group-hover:border-teal/50" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, hsl(175 70% 41% / 0.04) 0%, hsl(218 55% 14% / 0.06) 100%)" }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-teal transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />

      {/* Number watermark */}
      <div className="absolute top-4 right-5 font-display text-6xl font-bold text-muted/30 select-none leading-none transition-all duration-500 group-hover:text-teal/10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative p-8 pb-6">
        {/* Tag + Icon row */}
        <div className="flex items-center justify-between mb-7">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-teal font-semibold border border-teal/30 px-2.5 py-1">
            {svc.tag}
          </span>
          <div
            className="w-11 h-11 flex items-center justify-center border border-border transition-all duration-500 group-hover:border-teal/40 group-hover:bg-teal/8"
            style={{ background: hovered ? "hsl(175 70% 41% / 0.08)" : "transparent" }}
          >
            <svc.icon
              size={18}
              className="transition-all duration-300 group-hover:text-teal"
              style={{ color: hovered ? "hsl(var(--teal))" : "hsl(var(--muted-foreground))" }}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl text-foreground font-medium mb-3 leading-tight group-hover:text-navy transition-colors duration-300">
          {svc.title}
        </h3>

        {/* Highlight chip */}
        <div className="inline-flex items-center gap-1.5 mb-4">
          <div className="w-3 h-px bg-teal" />
          <span className="font-body text-[10px] text-teal/80 uppercase tracking-widest">{svc.highlight}</span>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>

        {/* Bottom CTA row */}
        <div className="flex items-center gap-2 pt-5 border-t border-border transition-all duration-300 group-hover:border-teal/20">
          <span
            className="font-body text-xs font-medium uppercase tracking-widest transition-all duration-300"
            style={{ color: hovered ? "hsl(var(--teal))" : "hsl(var(--muted-foreground))" }}
          >
            Learn More
          </span>
          <MoveRight
            size={13}
            className="transition-all duration-300 group-hover:translate-x-1"
            style={{ color: hovered ? "hsl(var(--teal))" : "hsl(var(--muted-foreground))" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div ref={heroRef} className="pt-20 bg-navy-dark relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(175 70% 41%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 41%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        {/* Floating orbs */}
        <div className="absolute top-12 right-32 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(175 70% 41%), transparent 70%)", animation: "float-y 8s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-40 opacity-10"
          style={{ background: "radial-gradient(ellipse, hsl(175 70% 41% / 0.4), transparent 70%)", filter: "blur(30px)" }} />

        <div className="container mx-auto px-6 py-28 relative">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fade-in 0.6s ease both" }}>
            <div className="w-12 h-px bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">What We Offer</span>
          </div>
          <h1
            className="font-display text-6xl md:text-7xl text-white font-light mb-6 leading-none"
            style={{ animation: "fade-in 0.7s ease 0.1s both" }}
          >
            Our <em className="text-teal not-italic">Services</em>
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl leading-relaxed" style={{ animation: "fade-in 0.7s ease 0.2s both" }}>
            A comprehensive suite of advisory and consulting services designed for the world's most ambitious organizations.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
            <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white rotate-90 origin-center translate-y-4">Scroll</span>
            <div className="w-px h-12 bg-white/30 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-4 bg-teal" style={{ animation: "float-y 1.8s ease-in-out infinite" }} />
            </div>
          </div>
        </div>

        {/* Bottom edge gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 97%))" }} />
      </div>

      {/* Services grid */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-teal" />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">Capabilities</span>
              </div>
              <p className="font-display text-3xl text-foreground font-light max-w-sm leading-snug">
                Six pillars of <em>excellence</em>
              </p>
            </div>
            <div className="hidden md:flex items-center gap-6 pb-1">
              {["01", "02", "03", "04", "05", "06"].map((n, i) => (
                <div key={n} className="flex flex-col items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-teal/40" style={{ animationDelay: `${i * 0.15}s`, animation: "pulse-ring 2s ease-in-out infinite" }} />
                  <span className="font-body text-[9px] text-muted-foreground/50 tracking-wider">{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((svc, i) => (
              <div key={svc.title} className="bg-background">
                <ServiceCard svc={svc} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[200, 350, 500].map((size, i) => (
            <div key={size} className="absolute rounded-full border border-teal/5"
              style={{ width: size, height: size, animation: `spin-slow ${20 + i * 8}s linear infinite ${i % 2 ? "reverse" : ""}` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-teal/50" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal/70 font-medium">Get Started</span>
            <div className="w-8 h-px bg-teal/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
            Ready to accelerate<br/>your <em>growth</em>?
          </h2>
          <p className="font-body text-white/55 mb-10 max-w-xl mx-auto leading-relaxed">
            Contact our team to explore how Fresnaye &amp; Company can support your organization's strategic objectives.
          </p>
          <Link
            to="/enterprise-support"
            className="inline-flex items-center gap-3 bg-teal text-white font-body text-sm font-medium px-10 py-4 hover:bg-teal-light transition-all duration-300 shadow-teal group"
          >
            Enterprise Support
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

