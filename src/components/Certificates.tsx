import { certificates } from '../data';
import { useInView } from '../hooks/useInView';

export default function Certificates() {
  const { ref, inView } = useInView();
  const hasCerts = certificates.length > 0;

  return (
    <section id="certificates" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            Certificates
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mt-1">
            Credentials
          </h2>
        </div>

        <div ref={ref} className="mt-12">
          {!hasCerts ? (
            /* Empty state — shown until you add real certs to src/data/index.ts */
            <div
              className={`border border-dashed border-bg-border rounded-xl p-12 text-center ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div className="w-14 h-14 rounded-full border border-bg-border flex items-center justify-center mx-auto mb-4">
                <BadgeIcon />
              </div>
              <p className="font-display font-semibold text-text-primary mb-1">
                Certifications coming soon
              </p>
              <p className="font-body text-sm text-text-muted max-w-sm mx-auto">
                Currently working towards certifications. Check back soon — or visit my{' '}
                <a
                  href="https://www.linkedin.com/in/michael-billan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  LinkedIn
                </a>{' '}
                for updates.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificates.map((cert, i) => (
                <a
                  key={i}
                  href={cert.credentialUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`group bg-bg-card border border-bg-border rounded-xl p-6 hover:border-accent-cyan/50 transition-all duration-300 hover:-translate-y-1 ${
                    inView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {cert.badgeUrl && (
                    <img
                      src={cert.badgeUrl}
                      alt={cert.title}
                      className="w-14 h-14 object-contain mb-4 rounded-lg"
                    />
                  )}
                  {!cert.badgeUrl && (
                    <div className="w-14 h-14 rounded-lg bg-bg-secondary border border-bg-border flex items-center justify-center mb-4">
                      <BadgeIcon />
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-accent-cyan transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="font-body text-xs text-text-muted mb-3">{cert.issuer}</p>
                  <span className="font-mono text-xs text-text-muted border border-bg-border px-2 py-0.5 rounded">
                    {cert.date}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
