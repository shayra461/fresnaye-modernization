import { Link } from "react-router-dom";

const subsidiaries = [
  { name: "502 Notary", url: "http://502notary.com/" },
  { name: "Fresnaye Card", url: "http://fresnayecard.com/" },
  { name: "Travel by Fresnaye", url: "http://travelbyfresnaye.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl font-semibold text-white tracking-wide">
                  F<span className="text-teal">&</span>C
                </span>
                <span className="font-body text-[9px] uppercase tracking-[0.25em] text-white/50 font-light">
                  Fresnaye & Company
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm">
              A global firm specializing in accelerating innovation & growth to move the world forward.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-5">Company</h5>
            <ul className="space-y-3">
              {[
                { label: "Services", path: "/services" },
                { label: "Team", path: "/team" },
                { label: "Enterprise Support", path: "/enterprise-support" },
                { label: "Our Subsidiaries", path: "/subsidiaries" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-5">Resources</h5>
            <ul className="space-y-3">
              <li>
                <a href="https://fresnaye.com/career-hub/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://fresnaye.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <Link to="/login" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Client Login
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <h5 className="font-body text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-5">Subsidiaries</h5>
              <ul className="space-y-3">
                {subsidiaries.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © Fresnaye & Company 2026. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://fresnaye.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
