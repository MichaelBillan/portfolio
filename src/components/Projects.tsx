import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useInView } from '../hooks/useInView';
import { config } from '../data';

const langColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30',
  TypeScript: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
  Python: 'bg-green-400/20 text-green-300 border-green-400/30',
  Java: 'bg-orange-400/20 text-orange-300 border-orange-400/30',
  'C++': 'bg-pink-400/20 text-pink-300 border-pink-400/30',
  HTML: 'bg-red-400/20 text-red-300 border-red-400/30',
  CSS: 'bg-purple-400/20 text-purple-300 border-purple-400/30',
  Rust: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  Go: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
};

function getLangClass(lang: string | null) {
  if (!lang) return 'bg-text-muted/20 text-text-muted border-text-muted/30';
  return langColors[lang] ?? 'bg-text-muted/20 text-text-muted border-text-muted/30';
}

export default function Projects() {
  const { projects, loading, error } = useGitHubRepos(config.githubUsername);
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Projects" title="What I've built" />

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-52 rounded-xl bg-bg-card border border-bg-border animate-pulse"
              />
            ))}

          {error && (
            <div className="col-span-3 text-center py-16 text-text-muted font-body">
              <p className="mb-2">Couldn't load repos from GitHub.</p>
              <a
                href={config.github}
                target="_blank"
                rel="noreferrer"
                className="text-accent-cyan hover:underline text-sm"
              >
                View directly on GitHub →
              </a>
            </div>
          )}

          {!loading &&
            !error &&
            projects.length === 0 && (
              <div className="col-span-3 text-center py-16 text-text-muted font-body">
                No public repos found. Push something to GitHub and they'll appear here!
              </div>
            )}

          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`group relative flex flex-col bg-bg-card border border-bg-border rounded-xl p-6 hover:border-accent-cyan/50 transition-all duration-300 hover:-translate-y-1 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <FolderIcon />
                <div className="flex items-center gap-3">
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                      <StarIcon />
                      {project.stars}
                    </span>
                  )}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-accent-cyan transition-colors"
                    aria-label="View on GitHub"
                  >
                    <ExternalIcon />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors"
                      aria-label="Live demo"
                    >
                      <LinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="font-display font-semibold text-base text-text-primary mb-2 group-hover:text-accent-cyan transition-colors capitalize">
                {project.name.replace(/-/g, ' ')}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Bottom row */}
              <div className="flex flex-wrap items-center gap-2">
                {project.language && (
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${getLangClass(
                      project.language
                    )}`}
                  >
                    {project.language}
                  </span>
                )}
                {project.topics.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded border border-bg-border text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href={config.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-accent-cyan transition-colors border border-bg-border hover:border-accent-cyan/50 px-5 py-2.5 rounded-lg"
          >
            See all repositories on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
        {label}
      </span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mt-1">
        {title}
      </h2>
    </div>
  );
}

function FolderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5">
      <path d="M3 7a2 2 0 0 1 2-2h3.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 0 12.828 8H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
