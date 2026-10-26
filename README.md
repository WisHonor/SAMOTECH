# SAMOTECH Services Inc. website

Single-page marketing site built with Next.js (App Router), React and TypeScript.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Filling in placeholders

Everything still to be supplied lives in `lib/site.ts`:

- `logoSrc` — put the logo in `public/` (e.g. `public/logo.png`) and set `logoSrc: "/logo.png"`.
  Until then the header and footer keep an empty slot for it.
- `founderPhotoSrc` — same idea for the founder portrait in the About section.
- `contact` — email, phone, location and LinkedIn URL used in the Contact section and footer.

## Structure

- `app/` — root layout, page and global styles (Manrope is self-hosted from `public/fonts`).
- `components/` — one component per page section, each with its own CSS module.
- The contact form currently only shows a confirmation message; it does not send data anywhere yet
  (see the TODO in `components/ContactForm.tsx`).
