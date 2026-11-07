# META RECOVERY

A premium recovery education and support platform built with React, TypeScript, Tailwind, and Supabase-ready authentication.

## Features

- Public marketing website and pricing page
- Registration, login, and password reset flows
- Premium checkout flow with env-based safeguards
- User dashboard with module access and payment status
- Admin dashboard with role-protected routing
- 10 educational modules and 40+ recovery scenarios
- Secure, server-side design guidance for Supabase and payment providers

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Supabase Auth client
- Lucide icons
- React Router

## Local setup

1. Install dependencies:
   npm install
2. Copy the environment file:
   cp .env.example .env
3. Fill in Supabase and payment provider values if available.
4. Run the app:
   npm run dev

## Production deployment

- Deploy to Vercel or any Node-compatible host.
- Add the same environment variables in the deployment environment.
- Configure a real Supabase project and Stripe/PayPal webhooks for a live checkout flow.

## Payment and security notes

- The app will not claim a successful payment without verified provider credentials.
- Premium access remains locked until real payment verification is completed by the backend provider.
- Secret keys must remain on the server and never be exposed in client code.

## Admin access in demo mode

A demo admin user is available locally in setup mode using:

- Email: admin@metarecovery.test
- Password: demo1234

This is not a real production credential and should be replaced by a real Supabase admin setup.
