import heroBg from "@/assets/hero-bg.jpg";
import people1 from "@/assets/people-1.jpg";
import people2 from "@/assets/people-2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building2, TrendingUp } from "lucide-react";

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

        {/* Industry tags */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-sm border-t border-white/10 py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-white/50 font-medium mr-2">
                Our industry specialization:
              </span>
              {industries.map((ind) =>
                ind.href ? (
                  <a
                    key={ind.label}
                    href={ind.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs font-medium px-4 py-1.5 border border-teal/50 text-teal hover:bg-teal hover:text-white transition-all duration-200 tracking-wide"
                  >
                    {ind.label}
                  </a>
                ) : (
                  <span
                    key={ind.label}
                    className="font-body text-xs font-medium px-4 py-1.5 border border-white/20 text-white/60 tracking-wide"
                  >
                    {ind.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-6">
              What We <em>Do</em>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We deliver strategic advantage across multiple disciplines, combining decades of expertise with a truly global perspective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group p-8 bg-card border border-border hover:border-teal/40 transition-all duration-300 shadow-card hover:shadow-elevated"
              >
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <svc.icon size={18} className="text-teal" />
                </div>
                <h3 className="font-display text-2xl text-foreground font-medium mb-4">{svc.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-teal font-body text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/services">Learn more</Link>
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People section */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-6">
                We bring the right <em>people together</em>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base mb-8">
                Setting and implementing the right strategy is imperative for our clients. After determining your goals, we help you develop a plan that targets the right audience through the right channels at the right time.
              </p>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 bg-navy text-white font-body text-sm font-medium px-8 py-3.5 hover:bg-navy-mid transition-colors duration-200"
              >
                Meet Our Leadership <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={people1}
                alt="Business consulting professionals"
                className="w-full h-64 object-cover shadow-card"
              />
              <img
                src={people2}
                alt="Business consulting team"
                className="w-full h-64 object-cover shadow-card mt-8"
              />
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
