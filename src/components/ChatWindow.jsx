import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink, FiSend } from 'react-icons/fi';
import TechIcons from './tech-icons.jsx';

const projects = [
  {
    title: 'Sub-Agents Directory',
    tech: ['Next.js', 'Tailwind CSS', 'Claude API'],
    description:
      'Curated collection of Claude Code sub-agent prompts and MCP servers.',
    livePreview: '#',
    repoUrl: '#',
  },
  {
    title: 'Codejeet',
    tech: ['Next.js', 'TypeScript', 'Selenium', 'pSEO'],
    description:
      'DSA learning platform with 17,000+ company-wise LeetCode questions.',
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

const SUGGESTIONS = [
  { id: 'about', label: 'Who are you?' },
  { id: 'skills', label: 'Your skills?' },
  { id: 'projects', label: 'Show projects' },
  { id: 'contact', label: 'Contact you' },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState(SUGGESTIONS);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);
  const idRef = useRef(0);

  const push = (msg) => {
    setMessages((prev) => [...prev, { id: idRef.current++, ...msg }]);
  };

  const botDelay = (fn, ms = 900) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      fn();
    }, ms);
  };

  const handleAsk = (id) => {
    const question = SUGGESTIONS.find((s) => s.id === id);
    push({ from: 'user', type: 'text', text: question.label });
    setActiveSuggestions((prev) => prev.filter((s) => s.id !== id));

    switch (id) {
      case 'about':
        botDelay(() => {
          push({
            from: 'bot',
            type: 'text',
            text: "I'm Adinath Gaware — a Front-End Engineer who thrives in the zero-to-one phase. I partner with founders to define products, ship MVPs in weeks, and iterate on real user feedback. I believe business needs should drive development, not the other way around.",
          });
        });
        break;
      case 'skills':
        botDelay(() => {
          const techStack = TechIcons();
          push({
            from: 'bot',
            type: 'skills',
            items: techStack,
          });
        });
        break;
      case 'projects':
        botDelay(() => {
          push({
            from: 'bot',
            type: 'projects',
            items: projects,
          });
        });
        break;
      case 'contact':
        botDelay(() => {
          push({
            from: 'bot',
            type: 'contact',
            email: 'adinathgaware23072003@gmail.com',
            socials,
          });
        });
        break;
      default:
        break;
    }
  };

  const sendText = () => {
    const val = inputValue.trim();
    if (!val) return;
    push({ from: 'user', type: 'text', text: val });
    setInputValue('');
    botDelay(() => {
      push({
        from: 'bot',
        type: 'text',
        text: "I'm a portfolio site, not a chatbot — try one of the suggested questions above, or scroll down to browse everything.",
      });
    });
  };

  useEffect(() => {
    const intro = setTimeout(() => {
      push({
        from: 'bot',
        type: 'text',
        text: 'Hi! I am Adinath. Ask me anything below, or just scroll to browse.',
      });
    }, 400);
    return () => clearTimeout(intro);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const renderBotContent = (msg) => {
    if (msg.type === 'skills') {
      return (
        <div className="flex flex-wrap gap-2">
          {msg.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5"
              >
                <Icon className={`h-4 w-4 ${tech.iconColor}`} />
                <span className="text-xs font-medium text-[var(--text)]">{tech.name}</span>
              </span>
            );
          })}
        </div>
      );
    }

    if (msg.type === 'projects') {
      return (
        <div className="space-y-2">
          {msg.items.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[var(--text)]">{project.title}</p>
                <div className="flex gap-3">
                  <a href={project.livePreview} target="_blank" rel="noreferrer" aria-label="Live preview">
                    <FiExternalLink className="h-4 w-4 text-[var(--secondary)]" />
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="Source code">
                    <FiGithub className="h-4 w-4 text-[var(--secondary)]" />
                  </a>
                </div>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-[var(--muted)]">{project.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (msg.type === 'contact') {
      return (
        <div>
          <a
            href={`mailto:${msg.email}`}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            <FiMail className="h-4 w-4" />
            {msg.email}
          </a>
          <div className="mt-3 flex flex-wrap gap-4">
            {msg.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="glass mx-auto flex h-[520px] w-full max-w-lg flex-col overflow-hidden rounded-3xl shadow-2xl md:h-[560px]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
        <div className="relative">
          <span className="block h-9 w-9 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]" />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-emerald-400" />
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--text)]">Adinath Gaware</p>
          <p className="text-xs text-[var(--muted)]">Front-End Engineer · online</p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="term-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={msg.from === 'user' ? 'flex justify-end' : 'flex justify-start'}
          >
            {msg.from === 'bot' && (
              <span className="mr-2 mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]" />
            )}
            <div
              className={
                msg.from === 'user'
                  ? 'rounded-2xl rounded-br-sm bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white'
                  : 'max-w-[85%] rounded-2xl rounded-bl-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5'
              }
            >
              {msg.type === 'text' ? (
                <p className="text-sm leading-relaxed text-[var(--text)]">{msg.text}</p>
              ) : (
                renderBotContent(msg)
              )}
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <span className="mr-2 mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]" />
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggestions */}
      {activeSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {activeSuggestions.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleAsk(s.id)}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendText();
        }}
        className="flex items-center gap-2 border-t border-[var(--border)] px-4 py-3"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything…"
          aria-label="Chat message"
          className="flex-1 bg-transparent text-sm text-[var(--text)] placeholder-[var(--muted)] outline-none"
        />
        <button
          type="submit"
          aria-label="Send"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-opacity hover:opacity-85"
        >
          <FiSend className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
