# Portfolio Project - Copilot Instructions

## Project Overview

This is a developer portfolio built with Next.js 16 (App Router), TypeScript, and SSR, inspired by lynnandtonic.com.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: CSS (no Tailwind) with custom design tokens
- **Testing**: Vitest + React Testing Library
- **Deployment**: Netlify with @netlify/next adapter
- **Node**: v20 (see .nvmrc)

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - React components (Header, Footer, sections)
- `/src/data/content.ts` - Centralized content data
- `/src/app/globals.css` - Global styles and theme tokens

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests with Vitest
- `npm run dev:netlify` - Local Netlify development

## Portfolio Sections

1. Hero - Main headline with CTAs and highlights
2. About - Profile summary and availability
3. Projects - Project cards with tags and links
4. Experience - Timeline of work history
5. Blog - Links to writing/posts
6. Playground - Experimental projects showcase
7. Contact - Email and social links

## Customization Notes

- Update content in `/src/data/content.ts` with real information
- Modify color scheme in CSS custom properties (`:root` in globals.css)
- Replace placeholder links and example.com URLs
- Add actual project images/screenshots when available
- Update email and social media links

## Design Philosophy

- Bold, playful aesthetic inspired by lynnandtonic.com
- Asymmetric layouts with strong visual hierarchy
- Accessibility-first with semantic HTML and ARIA
- Performance-optimized with SSR and static generation
- Mobile-first responsive design

## Deployment

Configured for Netlify deployment with `netlify.toml` and `@netlify/next` adapter. Push to GitHub and connect to Netlify for automatic deployments.
