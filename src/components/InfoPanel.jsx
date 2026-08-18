import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowUpRight } from 'react-icons/fi';
import planets from '../data/planets';

const InfoPanel = ({ selectedId, onClose }) => {
  const planet = planets.find((p) => p.id === selectedId);

  return (
    <AnimatePresence>
      {planet && (
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed right-4 top-24 z-40 w-[calc(100%-2rem)] max-w-sm"
        >
          <div
            className="glass rounded-2xl p-6"
            style={{ borderTop: `3px solid ${planet.color}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {planet.id}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[var(--text)]">
                  {planet.info.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            {planet.info.subtitle && (
              <p className="mt-2 text-sm font-semibold" style={{ color: planet.color }}>
                {planet.info.subtitle}
              </p>
            )}

            {planet.info.description && (
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {planet.info.description}
              </p>
            )}

            {planet.info.points.length > 0 && (
              <ul className="mt-4 space-y-2">
                {planet.info.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-[var(--muted)]"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: planet.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {planet.info.links.length > 0 && (
              <div className="mt-5 space-y-2 border-t border-[var(--border)] pt-4">
                {planet.info.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                  >
                    {link.label}
                    <FiArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;
