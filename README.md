# description of the bug

svelte-preprocess vite integration can't track changes in font-face at rules added through tailwindcss plugin

only changes to `tailwind.config.js` or `app.postcss` trigger a page reload that is needed to update fonts on the page

# steps to reproduce

1. clone this repo
2. `npm install`
3. `npm run dev`
4. open [`localhost:8000`](https://localhost:8000) in your browser
5. change `font-BarlowSemiCondensed-800-i` to `font-BarlowSemiCondensed-100` and hit <kbd>CMD</kbd> + <kbd>S</kbd>
6. observe that font on the page didn't change
7. go to `app.postcss` and hit <kbd>CMD</kbd> + <kbd>S</kbd> again
8. observe that font on the page did change
