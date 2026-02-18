import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Building2, Globe, Users, BarChart3, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "Strategy & Planning",
    desc: "Making the right moves involves using granular analysis to choose the right submarkets, and upending the traditional approach. We partner with leadership teams to craft strategies that create durable competitive advantage.",
  },
  {
    icon: Building2,
    title: "Financial Services",
    desc: "We bring our clients unrivaled transaction and integration expertise, deep industry knowledge, a global network cultivated over the course of nearly 50 years. Our financial advisory services span M&A, capital raising, and restructuring.",
  },
  {
    icon: Globe,
    title: "Management",
    desc: "We bring an unrivaled skill to integrate structure, process optimization, and people for a holistic impact. Our management consulting practice transforms organizations from the inside out.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    desc: "Cultivating the next generation of leaders is central to sustainable organizational growth. We work with executive teams to build the capabilities required to navigate complex, rapidly changing environments.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Our research and intelligence capabilities provide clients with the data-driven insights they need to make confident decisions. We analyze markets, competitors, and trends to inform strategy at every level.",
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    desc: "In today's regulatory environment, proactive risk management is a strategic imperative. We help clients identify, assess, and mitigate risks across operational, financial, and reputational dimensions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="pt-20 bg-navy-dark">
        <div className="container mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
              What We Offer
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            Our <em>Services</em>
          </h1>
          <p className="font-body text-white/65 text-lg max-w-xl leading-relaxed">
            A comprehensive suite of advisory and consulting services designed for the world's most ambitious organizations.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group p-8 bg-card border border-border hover:border-teal/40 transition-all duration-300 shadow-card hover:shadow-elevated"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <svc.icon size={20} className="text-teal" />
                </div>
                <h3 className="font-display text-2xl text-foreground font-medium mb-4">{svc.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6">
            Ready to accelerate your <em>growth</em>?
          </h2>
          <p className="font-body text-white/65 mb-10 max-w-xl mx-auto">
            Contact our team to explore how Fresnaye & Company can support your organization's strategic objectives.
          </p>
          <Link
            to="/enterprise-support"
            className="inline-flex items-center gap-2 bg-teal text-white font-body text-sm font-medium px-8 py-3.5 hover:bg-teal-light transition-colors duration-200 shadow-teal"
          >
            Enterprise Support <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
