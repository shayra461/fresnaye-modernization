import React from "react";
import heroBg from "@/assets/hero-bg.jpg";
import people1 from "@/assets/people-1.jpg";
import people2 from "@/assets/people-2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building2, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const industries = [
  { label: "Healthcare", href: null },
  { label: "Legal", href: "https://rogetalbert.com/" },
  { label: "Financial Services", href: "http://centurion.ae/" },
  { label: "Consular Services", href: null },
  { label: "Aerospace", href: "http://gideonaerospace.com/" },
  { label: "A.I.", href: "http://lookingglass.ch/" },
  { label: "V.C.", href: "https://caelumbank.com/" },
  { label: "Health Analytics", href: "https://festunghealth.com/" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Strategy & Planning",
    desc: "Making the right moves involves using granular analysis to choose the right submarkets, and upending the traditional approach.",
  },
  {
    icon: Building2,
    title: "Financial Services",
    desc: "We bring our clients unrivaled transaction and integration expertise, deep industry knowledge, a global network cultivated over the course of nearly 50 years.",
  },
  {
    icon: Globe,
    title: "Management",
    desc: "We bring an unrivaled skill to integrate structure, process optimization, and people for a holistic impact.",
  },
];

// Interactive services component
function ServicesInteractive({ services }: { services: { icon: React.ElementType; title: string; desc: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-white/10">
      {/* Left: tab list */}
      <div className="lg:col-span-2 flex flex-col border-r border-white/10">
        {services.map((svc, i) => (
          <button
            key={svc.title}
            onClick={() => setActive(i)}
            className={`group relative flex items-center gap-5 px-8 py-7 text-left transition-all duration-300 border-b border-white/10 last:border-b-0 ${
              active === i
                ? "bg-teal/10"
                : "hover:bg-white/5"
            }`}
          >
            {/* Active indicator bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${active === i ? "bg-teal" : "bg-transparent"}`} />

            {/* Number */}
            <span className={`font-display text-4xl font-bold leading-none transition-colors duration-300 ${active === i ? "text-teal" : "text-white/15 group-hover:text-white/30"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className={`flex items-center gap-2 mb-1 transition-colors duration-300 ${active === i ? "text-white" : "text-white/55 group-hover:text-white/80"}`}>
                <svc.icon size={14} />
                <span className="font-body text-[10px] uppercase tracking-[0.25em] font-semibold">{svc.title}</span>
              </div>
              {/* Progress line under active */}
              {active === i && (
                <div className="h-px bg-teal/40 w-full animate-fade-in" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Right: content panel */}
      <div className="lg:col-span-3 relative overflow-hidden">
        {/* Big decorative number background */}
        <div className="absolute top-4 right-4 font-display text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          {String(active + 1).padStart(2, "0")}
        </div>

        <div key={active} className="relative p-10 lg:p-14 animate-fade-in flex flex-col h-full justify-between min-h-[320px]">
          <div>
            {/* Icon */}
            <div className="w-14 h-14 border border-teal/30 flex items-center justify-center mb-8 bg-teal/5">
              {(() => { const Icon = services[active].icon; return <Icon size={22} className="text-teal" />; })()}
            </div>

            <h3 className="font-display text-4xl md:text-5xl text-white font-light leading-tight mb-6">
              {services[active].title}
            </h3>

            <p className="font-body text-white/60 leading-relaxed text-base max-w-lg">
              {services[active].desc}
            </p>
          </div>

          {/* Bottom row */}
          <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-teal font-body text-xs font-semibold uppercase tracking-widest hover:gap-4 transition-all duration-200"
            >
              Explore this service <ArrowRight size={13} />
            </Link>
            {/* Dots navigation */}
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${i === active ? "w-6 h-1.5 bg-teal" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Scrolling ticker component
function IndustryTicker({ industries }: { industries: { label: string; href: string | null }[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // Duplicate items for seamless loop
  const doubled = [...industries, ...industries];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [industries.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const step = () => {
      pos += 0.6;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex items-center h-full py-3">
      <div ref={trackRef} className="flex items-center gap-0 will-change-transform">
        {doubled.map((ind, i) => {
          const isActive = i % industries.length === activeIdx;
          const El = ind.href ? "a" : "span";
          const extraProps = ind.href
            ? { href: ind.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <El
              key={i}
              {...(extraProps as any)}
              className={`flex-shrink-0 mx-2 px-5 py-1.5 font-body text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                isActive
                  ? "bg-teal text-white shadow-teal scale-105"
                  : ind.href
                  ? "border border-teal/40 text-teal/80 hover:border-teal hover:text-teal"
                  : "border border-white/15 text-white/45"
              }`}
            >
              {ind.label}
            </El>
          );
        })}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `var(--gradient-hero), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-teal" />
              <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
                Global Consulting Firm
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8">
              Accelerating Innovation &{" "}
              <span className="font-semibold italic">Strategic Growth</span>
            </h1>
            <p className="font-body text-lg text-white/75 leading-relaxed mb-12 max-w-xl">
              We are a global firm specializing in accelerating innovation & growth to move the world forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-teal text-white font-body text-sm font-medium px-8 py-3.5 hover:bg-teal-light transition-colors duration-200 shadow-teal"
              >
                Our Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-body text-sm font-medium px-8 py-3.5 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Industry tags — dynamic scrolling ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/95 backdrop-blur-sm border-t border-teal/20 overflow-hidden">
          {/* Top teal line accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

          <div className="flex items-stretch">
            {/* Left label — fixed */}
            <div className="flex-shrink-0 flex items-center gap-3 px-6 py-4 border-r border-white/10 bg-teal/10">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-teal font-semibold whitespace-nowrap">
                Industry Specialization
              </span>
            </div>

            {/* Scrolling track */}
            <div className="flex-1 overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-dark/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-dark/95 to-transparent z-10 pointer-events-none" />

              <IndustryTicker industries={industries} />
            </div>
          </div>
        </div>
      </section>

      {/* Services — Interactive tabbed layout */}
      <section className="relative overflow-hidden bg-navy-dark">
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, hsl(175 70% 41%) 0px, hsl(175 70% 41%) 1px, transparent 1px, transparent 60px)",
          }}
        />

        <div className="relative container mx-auto px-6 py-28">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-px bg-teal" />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-semibold">Core Capabilities</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-tight">
                What We <em className="font-semibold italic text-teal">Do</em>
              </h2>
            </div>
            <p className="font-body text-white/55 leading-relaxed max-w-sm text-sm md:text-right">
              We deliver strategic advantage across multiple disciplines, combining decades of expertise with a truly global perspective.
            </p>
          </div>

          {/* Interactive service cards */}
          <ServicesInteractive services={services} />

          {/* Bottom CTA row */}
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-body text-sm text-white/45 italic">
              Discover our full range of advisory services →
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-body text-sm font-semibold text-white uppercase tracking-[0.15em] group-hover:text-teal transition-colors">
                View All Services
              </span>
              <span className="flex items-center justify-center w-9 h-9 border border-teal/50 text-teal group-hover:bg-teal group-hover:border-teal group-hover:text-white transition-all duration-200">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* People section */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(175 70% 41%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 41%) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative container mx-auto px-6 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">

            {/* Left: Text content */}
            <div className="flex flex-col justify-center py-24 pr-0 lg:pr-16">
              {/* Accent line */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-px bg-teal" />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-semibold">Our Approach</span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-8">
                We bring the<br />
                right <em className="text-teal not-italic font-semibold">people</em><br />
                <em>together</em>
              </h2>

              <p className="font-body text-white/65 leading-relaxed text-base mb-10 max-w-md">
                Setting and implementing the right strategy is imperative for our clients. After determining your goals, we help you develop a plan that targets the right audience through the right channels at the right time.
              </p>

              {/* Inline stats */}
              <div className="flex gap-10 mb-10 border-l-2 border-teal pl-6">
                <div>
                  <div className="font-display text-3xl text-white font-semibold">50<span className="text-teal">+</span></div>
                  <div className="font-body text-xs text-white/50 uppercase tracking-wider mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white font-semibold">30<span className="text-teal">+</span></div>
                  <div className="font-body text-xs text-white/50 uppercase tracking-wider mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white font-semibold">100<span className="text-teal">+</span></div>
                  <div className="font-body text-xs text-white/50 uppercase tracking-wider mt-1">Global Partners</div>
                </div>
              </div>

              <Link
                to="/team"
                className="inline-flex items-center gap-3 group self-start"
              >
                <span className="flex items-center justify-center w-11 h-11 border border-teal text-teal group-hover:bg-teal group-hover:text-white transition-all duration-200">
                  <ArrowRight size={16} />
                </span>
                <span className="font-body text-sm font-semibold text-white uppercase tracking-[0.15em] group-hover:text-teal transition-colors">
                  Meet Our Leadership
                </span>
              </Link>
            </div>

            {/* Right: Image composition */}
            <div className="relative hidden lg:flex items-stretch">
              {/* Tall primary image — flush to right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
                <img
                  src={people2}
                  alt="Business consulting team"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
              </div>

              {/* Overlapping smaller image — left, vertically centered */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[48%] aspect-[4/3] overflow-hidden shadow-elevated border-2 border-navy-dark">
                <img
                  src={people1}
                  alt="Business consulting professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-12 right-6 bg-teal px-6 py-4 shadow-teal">
                <div className="font-display text-3xl text-white font-bold leading-none">8<span className="text-white/70 text-lg">+</span></div>
                <div className="font-body text-[10px] text-white/80 uppercase tracking-widest mt-1">Industries</div>
              </div>

              {/* Decorative teal corner accent */}
              <div className="absolute top-12 right-6 w-16 h-16 border-t-2 border-r-2 border-teal/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Global network */}
      <section
        className="py-28"
        style={{ background: "var(--gradient-section)" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-0.5 bg-teal" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Global Network of <em>Trusted Partners</em>
            </h2>
            <p className="font-body text-white/70 leading-relaxed text-base mb-16">
              Comprised of an exclusive group of senior-level counselors, we work with some of the world's most established international organizations, individuals, businesses and government agencies striving to drive impact and social purpose.
            </p>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { num: "50+", label: "Global Partners" },
                { num: "12+", label: "Global Offices" },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy-mid py-12 px-8">
                  <div className="font-display text-6xl text-teal font-semibold mb-2">{stat.num}</div>
                  <div className="font-body text-sm uppercase tracking-[0.2em] text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-teal" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-6">
            Our <em>Leadership Team</em>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-base mb-10 max-w-2xl mx-auto">
            Fresnaye & Company is led by our Global Managing Director & our elected board of directors. A global leadership team known as the Acceleration Team oversees subsidiary & regional operations along with the leaders of our offices and practices.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 border border-navy text-navy font-body text-sm font-medium px-8 py-3.5 hover:bg-navy hover:text-white transition-all duration-200"
          >
            Meet our team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
