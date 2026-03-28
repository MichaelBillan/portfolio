import { config } from '../data';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 mb-8"
            style={{ animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold text-5xl sm:text-7xl text-text-primary leading-[1.05] mb-4"
            style={{ animation: 'fadeUp 0.6s ease 0.1s forwards', opacity: 0 }}
          >
            {config.name}
            <span className="text-accent-cyan">.</span>
          </h1>

          {/* Title */}
          <p
            className="font-display text-xl sm:text-2xl text-accent-cyan font-medium mb-6"
            style={{ animation: 'fadeUp 0.6s ease 0.2s forwards', opacity: 0 }}
          >
            {config.title}
          </p>

          {/* Bio */}
          <p
            className="font-body text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-10"
            style={{ animation: 'fadeUp 0.6s ease 0.3s forwards', opacity: 0 }}
          >
            {config.bio}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.6s ease 0.4s forwards', opacity: 0 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent-cyan text-bg-primary font-display font-bold text-sm rounded-lg hover:bg-accent-cyan/90 transition-all duration-200 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={config.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-bg-border text-text-secondary font-display font-medium text-sm rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 flex items-center gap-2"
            >
              <GitHubIcon />
              GitHub Profile
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-bg-border text-text-secondary font-display font-medium text-sm rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 flex items-center gap-2"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
