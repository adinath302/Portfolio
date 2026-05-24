# Text sizing / alignment cleanup - TODO

- [ ] Inspect current typography setup (Tailwind, index.css, App.css) and identify inconsistent font-size/line-height across sections.
- [ ] Add a centralized typography scale via CSS variables and Tailwind-friendly utility classes (e.g., .t-h1, .t-h2, .t-body).
- [ ] Update headings/bio/paragraphs/components to use the new shared classes instead of per-component arbitrary text-[..px].
- [ ] Ensure consistent alignment (text-center vs left) and line-height across mobile/desktop breakpoints.
- [ ] Remove any accidental extra spacing (e.g., invalid classes like `py-` or inconsistent padding) if found.
- [ ] Run lint/build (if available) to ensure no className typos.

