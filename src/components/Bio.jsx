import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-8 md:p-12">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
          Transmission from Earth
        </h2>

        <p className="mt-6 text-center text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          I'm a Front-End Engineer who thrives in the zero-to-one phase. I
          partner with founders to define products, ship MVPs in weeks, and
          iterate based on real user feedback.
        </p>

        <p className="mt-4 text-center text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          Expert in <span className="font-semibold text-[var(--text)]">React</span>{' '}
          and <span className="font-semibold text-[var(--text)]">Next.js</span>,
          I believe business needs should drive development — not the other way
          around.
        </p>
      </div>
    </section>
  );
};

export default About;
