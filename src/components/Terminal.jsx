import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioStore from './useStore';
import { FiGithub, FiLinkedin, FiTwitter, FiExternalLink } from 'react-icons/fi';
import TechIcons from './tech-icons.jsx';

const BANNER = [
  '  ╔═══════════════════════════════════════════╗',
  '  ║   ADINATH GAWARE — FRONT-END ENGINEER     ║',
  '  ║   react · next.js · typescript · tailwind  ║',
  '  ╚═══════════════════════════════════════════╝',
];

const HELP = [
  { cmd: 'help', desc: 'show this help menu' },
  { cmd: 'whoami', desc: 'about me, in a nutshell' },
  { cmd: 'about', desc: 'read my story' },
  { cmd: 'skills', desc: 'the tools I use' },
  { cmd: 'projects', desc: 'things I have built' },
  { cmd: 'contact', desc: 'ways to reach me' },
  { cmd: 'theme', desc: 'toggle night / dawn sky' },
  { cmd: 'clear', desc: 'wipe the screen' },
];

const projects = [
  {
    title: 'Sub-Agents Directory',
    tech: ['Next.js', 'Tailwind CSS', 'Claude API'],
    description:
      'Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, engineered system prompts, and custom development pipelines.',
    livePreview: '#',
    repoUrl: '#',
  },
  {
    title: 'Codejeet',
    tech: ['Next.js', 'TypeScript', 'Selenium', 'pSEO'],
    description:
      'System Design and DSA learning platform featuring 17,000+ company-wise LeetCode questions scraped via automated Selenium drivers and rendered using programmatic SEO.',
    livePreview: '#',
    repoUrl: '#',
  },
];

const socials = [
  { label: 'GitHub', value: 'adinath302', href: 'https://github.com/adinath302', icon: FiGithub },
  {
    label: 'LinkedIn',
    value: 'adinath-gaware',
    href: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
    icon: FiLinkedin,
  },
  { label: 'X', value: '@Adinath302', href: 'https://x.com/Adinath302', icon: FiTwitter },
];

const Terminal = () => {
  const toggleTheme = PortfolioStore((state) => state.toggle);
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const lineId = useRef(0);

  const addLines = (newLines) => {
    setLines((prev) => [
      ...prev,
      ...newLines.map((l) => ({ ...l, id: lineId.current++ })),
    ]);
  };

  const echo = (text, type = 'text') => addLines([{ type, text }]);
  const echoRich = (node) => addLines([{ type: 'rich', node }]);

  // Boot sequence
  useEffect(() => {
    let cancelled = false;
    let t;
    const boot = async () => {
      addLines(BANNER.map((b) => ({ type: 'banner', text: b })));
      await new Promise((r) => setTimeout(r, 500));
      if (cancelled) return;
      echo('Welcome to my portfolio. Type help to explore.', 'muted');
      await new Promise((r) => setTimeout(r, 300));
      if (cancelled) return;
      echo('guest@portfolio:~$ ', 'prompt-label');
      setBooted(true);
    };
    t = boot();
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const renderSkills = () => {
    const techStack = TechIcons();
    return (
      <div className="mt-2">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.name} className="flex items-center gap-2 py-0.5">
              <span className="text-[var(--accent)]">▸</span>
              <Icon className={`h-4 w-4 ${tech.iconColor}`} />
              <span className="font-mono text-sm text-[var(--text)]">{tech.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderProjects = () => (
    <div className="mt-2 space-y-4">
      {projects.map((project) => (
        <div key={project.title} className="rounded-lg border border-[var(--border)] p-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-base font-bold text-[var(--text)]">
              {project.title}
            </span>
            {project.tech.map((techItem, index) => (
              <span
                key={index}
                className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]"
              >
                {techItem}
              </span>
            ))}
          </div>
          <p className="mt-2 font-mono text-sm text-[var(--muted)]">
            {project.description}
          </p>
          <div className="mt-3 flex gap-5">
            <a
              href={project.livePreview}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-[var(--secondary)] hover:underline"
            >
              <FiExternalLink className="h-3.5 w-3.5" /> live
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-[var(--secondary)] hover:underline"
            >
              <FiGithub className="h-3.5 w-3.5" /> source
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContact = () => (
    <div className="mt-2">
      <p className="font-mono text-sm text-[var(--text)]">
        mail: <span className="text-[var(--accent)]">adinathgaware23072003@gmail.com</span>
      </p>
      <div className="mt-3 space-y-1">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              <Icon className="h-4 w-4" />
              {social.label.toLowerCase()}: {social.value}
            </a>
          );
        })}
      </div>
    </div>
  );

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    addLines([{ type: 'input', text: `guest@portfolio:~$ ${raw}` }]);

    switch (cmd) {
      case 'help':
        echo('Available commands:', 'muted');
        echoRich(
          <div className="mt-1">
            {HELP.map((h) => (
              <div key={h.cmd} className="flex gap-4 py-0.5 font-mono text-sm">
                <span className="w-24 text-[var(--accent)]">{h.cmd}</span>
                <span className="text-[var(--muted)]">{h.desc}</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'whoami':
        echo('Front-End Engineer crafting zero-to-one products with React & Next.js.', 'text');
        break;
      case 'about':
        echo(
          "I'm a Front-End Engineer who thrives in the zero-to-one phase. I partner with founders to define products, ship MVPs in weeks, and iterate on real user feedback. I believe business needs should drive development — not the other way around.",
          'muted'
        );
        break;
      case 'skills':
        echoRich(renderSkills());
        break;
      case 'projects':
        echoRich(renderProjects());
        break;
      case 'contact':
        echoRich(renderContact());
        break;
      case 'theme':
        toggleTheme();
        echo('sky toggled ✓', 'accent');
        break;
      case 'clear':
        setLines([]);
        break;
      case 'sudo':
        echo('nice try. you are already root of this universe. ✦', 'accent');
        break;
      default:
        echo(`command not found: ${cmd} — try 'help'`, 'error');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      if (input.trim()) {
        setHistory((prev) => [...prev, input]);
      }
      setHistIndex(-1);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(idx);
      setInput(history[idx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = histIndex + 1;
      if (idx >= history.length) {
        setHistIndex(-1);
        setInput('');
      } else {
        setHistIndex(idx);
        setInput(history[idx] || '');
      }
    }
  };

  const lineClass = {
    banner: 'font-mono text-[var(--secondary)]',
    input: 'font-mono text-[var(--text)]',
    prompt: 'font-mono text-[var(--accent)]',
    text: 'font-mono text-[var(--text)]',
    muted: 'font-mono text-[var(--muted)]',
    accent: 'font-mono text-[var(--accent)]',
    error: 'font-mono text-[#ff6b6b]',
  };

  return (
    <section className="relative mx-auto flex min-h-screen max-w-4xl items-center px-4 py-10 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass w-full overflow-hidden rounded-2xl shadow-2xl"
      >
        {/* Terminal title bar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">
            guest@portfolio — zsh
          </span>
          <button
            type="button"
            onClick={() => {
              toggleTheme();
              echo('sky toggled ✓', 'accent');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            aria-label="Toggle theme"
          >
            ✦
          </button>
        </div>

        {/* Output */}
        <div
          ref={scrollRef}
          className="term-scroll h-[60vh] overflow-y-auto px-4 py-4 md:h-[65vh] md:px-6"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line) =>
            line.type === 'rich' ? (
              <div key={line.id} className="text-[var(--text)]">
                {line.node}
              </div>
            ) : (
              <div key={line.id} className={`whitespace-pre-wrap ${lineClass[line.type] || 'font-mono text-[var(--text)]'}`}>
                {line.text}
              </div>
            )
          )}

          {/* Active prompt */}
          {booted && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-[var(--accent)]">
                guest@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
                className="flex-1 bg-transparent font-mono text-[var(--text)] caret-[var(--accent)] outline-none"
              />
            </div>
          )}
        </div>

        {/* Quick commands */}
        {booted && (
          <div className="flex flex-wrap gap-2 border-t border-[var(--border)] px-4 py-3">
            {['help', 'about', 'skills', 'projects', 'contact', 'theme', 'clear'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => runCommand(c)}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Terminal;
