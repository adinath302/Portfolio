import React, { useState } from 'react';

const tabs = [
  {
    id: 'profile',
    filename: 'profile.ts',
    lang: 'TS',
    lines: [
      { type: 'comment', text: '// Adinath Gaware — Front-End Engineer' },
      { type: 'keyword', text: 'const' },
      { type: 'plain', text: ' developer = ' },
      { type: 'punct', text: '{' },
      { type: 'indent', level: 1, keys: 'name', value: 'Adinath Gaware', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'role', value: 'Front-End Engineer', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'stack', value: "['React', 'Next.js', 'TypeScript']", valueClass: 'arr' },
      { type: 'indent', level: 1, keys: 'experience', value: '3+ years', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'location', value: 'India', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'openToWork', value: 'true', valueClass: 'kw' },
      { type: 'punct', text: '};' },
    ],
  },
  {
    id: 'stack',
    filename: 'stack.ts',
    lang: 'TS',
    lines: [
      { type: 'comment', text: '// Core technologies' },
      { type: 'keyword', text: 'const' },
      { type: 'plain', text: ' stack: TechStack = ' },
      { type: 'punct', text: '[' },
      { type: 'indent', level: 1, keys: '', value: 'React · Next.js · TypeScript', valueClass: 'str' },
      { type: 'indent', level: 1, keys: '', value: 'Tailwind CSS · Three.js · GSAP', valueClass: 'str' },
      { type: 'indent', level: 1, keys: '', value: 'Node.js · Selenium · pSEO', valueClass: 'str' },
      { type: 'punct', text: '];' },
    ],
  },
  {
    id: 'contact',
    filename: 'contact.ts',
    lang: 'TS',
    lines: [
      { type: 'comment', text: '// Let’s work together' },
      { type: 'keyword', text: 'const' },
      { type: 'plain', text: ' contact = ' },
      { type: 'punct', text: '{' },
      { type: 'indent', level: 1, keys: 'email', value: 'adinathgaware23072003@gmail.com', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'github', value: 'github.com/adinath302', valueClass: 'str' },
      { type: 'indent', level: 1, keys: 'linkedin', value: 'adinath-gaware-97a68225a', valueClass: 'str' },
      { type: 'punct', text: '};' },
    ],
  },
];

const COLOR_MAP = {
  kw: 'text-[var(--accent)]',
  key: 'text-[var(--secondary)]',
  str: 'text-[#047857] dark:text-[#6ee7b7]',
  arr: 'text-[#b45309] dark:text-[#fbbf24]',
  comment: 'text-[var(--muted)] italic',
  punct: 'text-[var(--muted)]',
  plain: 'text-[var(--text)]',
};

const CodeWindow = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const tab = tabs.find((t) => t.id === activeTab);

  return (
    <div className="glass overflow-hidden rounded-2xl text-left">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#f87171]" />
        <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
        <span className="h-3 w-3 rounded-full bg-[#4ade80]" />

        <div className="ml-3 flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`rounded-t-md px-3 py-1 font-mono text-xs ${
                activeTab === t.id
                  ? 'bg-[var(--surface)] text-[var(--text)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.filename}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-sm leading-7">
          {tab.lines.map((line, i) => {
            if (line.type === 'indent') {
              return (
                <div key={i} className="whitespace-pre">
                  {'  '.repeat(line.level)}
                  {line.keys && (
                    <span className={COLOR_MAP.key}>{line.keys}: </span>
                  )}
                  <span className={COLOR_MAP[line.valueClass]}>{line.value}</span>
                  {line.keys && <span className={COLOR_MAP.punct}>,</span>}
                </div>
              );
            }
            return (
              <div key={i} className="whitespace-pre">
                <span className={COLOR_MAP[line.type]}>{line.text}</span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;
