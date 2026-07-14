# React Assignment - My Mini Profile

This repository contains a small React application built with Vite for a mini profile assignment.

## Features

- `ProfileCard` component receives `name` and `bio` as props
- `Like` button with state that increments on click
- Skills list rendered from an array using `.map()` with unique keys
- Conditional rendering for `Show more` / `Show less`
- Controlled status input with `value` and `onChange`
- `useEffect` keeps the browser tab title in sync with the number of likes

## Files

- `src/App.jsx` - main app and state management
- `src/ProfileCard.jsx` - reusable profile card component
- `src/index.css` - styling for the app
- `package.json` - dependencies and scripts
- `vite.config.js` - Vite configuration

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.
