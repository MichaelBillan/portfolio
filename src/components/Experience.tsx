import { experience } from '../data';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mt-1">
            Where I've been
          </h2>
        </div>

        <div ref={ref} className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-bg-border ml-1 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`sm:pl-10 relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-accent-cyan border-2 border-bg-secondary -translate-x-[3px]" />

                <div className="bg-bg-card border border-bg-border rounded-xl p-6 hover:border-accent-cyan/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="font-body text-accent-cyan text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-text-muted bg-bg-secondary px-3 py-1 rounded-full border border-bg-border whitespace-nowrap self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-3 font-body text-sm text-text-secondary">
                        <span className="text-accent-cyan mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-text-muted border border-bg-border px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
