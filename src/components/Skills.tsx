import { skills } from '../data';
import { useInView } from '../hooks/useInView';

const categoryColors: Record<string, string> = {
  Languages: 'text-accent-cyan border-accent-cyan/30',
  'Frameworks & Libraries': 'text-accent-blue border-accent-blue/30',
  'Tools & Platforms': 'text-accent-purple border-accent-purple/30',
  Concepts: 'text-emerald-400 border-emerald-400/30',
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            Skills
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mt-1">
            Tech I work with
          </h2>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skills.map((group, gi) => {
            const colorClass = categoryColors[group.category] ?? 'text-text-secondary border-text-muted/30';
            return (
              <div
                key={group.category}
                className={`bg-bg-card border border-bg-border rounded-xl p-6 ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${gi * 100}ms` }}
              >
                <h3 className={`font-mono text-xs tracking-widest uppercase mb-4 ${colorClass.split(' ')[0]}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`font-body text-sm px-3 py-1 rounded-full border bg-transparent transition-colors hover:bg-bg-border ${colorClass}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
