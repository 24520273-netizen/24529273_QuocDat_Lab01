# Work Breakdown Structure

| Task ID | Name | Scope | Out of scope | Acceptance criteria |
|---|---|---|---|---|
| T-01 | Semantic DOM landmarks | index.html only (HTML structure, no styling, no JS) | CSS, JavaScript, images, forms | 0 `<div>` elements; 1 skip-link; exactly 1 `<h1>`; landmarks: `<header>`, `<nav>`, `<main>`; `<footer>` optional |
| T-02A | Tokens & Reset | CSS design tokens and global box-sizing reset | Grid layout, JavaScript theme engine | Reusable CSS variables in `:root`; global `border-box` reset; no component layout |
| T-02B | 2D Grid Layout | Responsive project grid using CSS Grid | JavaScript theme engine | Responsive grid using `repeat(auto-fit, minmax(...))`; zero horizontal scroll at 375px |
| T-02C | Theme Engine | JavaScript dark/light theme switching | Additional application features | Theme toggles without console errors; state persists using `localStorage` key `theme` |