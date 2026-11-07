# META RECOVERY

An independent educational resource with practical, privacy-conscious guidance for account recovery and digital safety. This project is not affiliated with or endorsed by Meta or any other social platform.

## What works

- Responsive, accessible landing page with recovery and account-security guidance.
- Searchable guide cards, expandable FAQs, and an interactive safety checklist.
- Links users to the official Meta Help Center rather than collecting account credentials.
- No account login, password collection, payment processing, or backend is configured.

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify a production build:

```bash
npm run build
npm run preview
```

## Deployment

Build with `npm run build` and deploy the generated `dist/` directory to a static hosting provider. Configure the provider to serve `index.html` for the root route.

## Security

This website does not recover accounts and should never ask users for passwords, one-time sign-in codes, backup codes, or password-reset links. Use official provider websites and apps for account recovery. Do not put secret keys in browser environment variables; any future payment or privileged integrations must be implemented and verified on a trusted server.
