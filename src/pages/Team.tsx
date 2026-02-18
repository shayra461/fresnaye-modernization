import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const leadership = [
  {
    name: "Global Managing Director",
    title: "Global Managing Director",
    bio: "Leading Fresnaye & Company's global operations and strategic direction.",
  },
  {
    name: "Board Director",
    title: "Board of Directors",
    bio: "Overseeing governance, strategy and long-term organizational direction.",
  },
  {
    name: "Acceleration Team",
    title: "Acceleration Team Lead",
    bio: "Overseeing subsidiary & regional operations along with the leaders of our offices and practices.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="pt-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroTeam})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            animation: "ken-burns 22s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(220 60% 8% / 0.93) 0%, hsl(218 55% 14% / 0.78) 55%, hsl(220 30% 10% / 0.85) 100%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(175 70% 41%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 41%) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="container mx-auto px-6 py-28 relative">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fade-in 0.6s ease both" }}>
            <div className="w-12 h-px bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
              Our People
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6" style={{ animation: "fade-in 0.7s ease 0.1s both" }}>
            Leadership <em>Team</em>
          </h1>
          <p className="font-body text-white/65 text-lg max-w-2xl leading-relaxed" style={{ animation: "fade-in 0.7s ease 0.2s both" }}>
            Fresnaye & Company is led by our Global Managing Director & our elected board of directors. A global leadership team known as the Acceleration Team oversees subsidiary & regional operations along with the leaders of our offices and practices.
          </p>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 97%))" }} />
      </div>

      {/* Leadership structure */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl text-foreground font-light mb-4">
              Our <em>Structure</em>
            </h2>
            <p className="font-body text-muted-foreground">
              Our leadership model is designed for agility and precision, ensuring that the right expertise reaches every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-border hover:border-teal/40 transition-all duration-300 shadow-card hover:shadow-elevated"
              >
                <div className="h-64 bg-navy/5 flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="font-display text-4xl text-navy/40 font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-8 h-0.5 bg-teal mb-4" />
                  <h3 className="font-display text-xl text-foreground font-medium mb-1">{member.name}</h3>
                  <p className="font-body text-xs text-teal uppercase tracking-wider font-semibold mb-3">{member.title}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <h2 className="font-display text-4xl text-foreground font-light mb-6">
                A team built for <em>global impact</em>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Fresnaye & Company is led by our Global Managing Director & our elected board of directors. A global leadership team known as the Acceleration Team oversees subsidiary & regional operations along with the leaders of our offices and practices.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our diverse team brings together expertise from finance, law, technology, healthcare and government to deliver comprehensive solutions to our global client base.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Years of Combined Experience", value: "50+" },
                { label: "Countries Served", value: "30+" },
                { label: "Global Partners", value: "100+" },
                { label: "Industries Covered", value: "8+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card p-6 border border-border">
                  <div className="font-display text-4xl text-teal font-semibold mb-2">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6">
            Explore <em>career opportunities</em>
          </h2>
          <p className="font-body text-white/65 mb-10 max-w-xl mx-auto">
            Join a global team of experts committed to accelerating innovation and growth.
          </p>
          <a
            href="https://fresnaye.com/career-hub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white font-body text-sm font-medium px-8 py-3.5 hover:bg-teal-light transition-colors duration-200 shadow-teal"
          >
            View Careers <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
