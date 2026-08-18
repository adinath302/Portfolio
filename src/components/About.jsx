import React from 'react';

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '17K+', label: 'Questions indexed' },
  { value: '2', label: 'Flagship projects' },
  { value: '24h', label: 'Response time' },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <span className="font-mono text-lg text-[var(--accent)]">01.</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--text)]">
          About Me
        </h2>
        <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)]">
          <p>
            I'm a <span className="font-semibold text-[var(--text)]">Front-End Engineer</span>{' '}
            who thrives in the zero-to-one phase. I partner with founders to
            define products, ship MVPs in weeks, and iterate based on real user
            feedback.
          </p>
          <p>
            Expert in{' '}
            <span className="font-semibold text-[var(--text)]">React</span> and{' '}
            <span className="font-semibold text-[var(--text)]">Next.js</span>, I
            believe business needs should drive development — not the other way
            around.
          </p>
          <p>
            Currently pursuing a{' '}
            <span className="font-semibold text-[var(--text)]">B.Tech in Computer Engineering</span>,
            specializing in web performance, product design, and programmatic SEO.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <p className="font-mono text-2xl font-bold text-[var(--accent)]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
