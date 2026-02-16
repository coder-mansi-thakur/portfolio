# Developer Portfolio

A modern, performant developer portfolio built with Next.js and server-side rendering, inspired by [lynnandtonic.com](https://lynnandtonic.com).

## Features

- **Server-Side Rendering (SSR)** with Next.js App Router
- **Sections**: Hero, About, Projects showcase, Experience timeline, Blog posts, Playground experiments, Contact
- **Responsive Design** with mobile-first approach
- **Playful Aesthetics** inspired by lynnandtonic.com with bold colors and asymmetric layouts
- **Accessibility** focused with semantic HTML, ARIA landmarks, and keyboard navigation
- **Performance Optimized** with static generation where possible
- **Type-Safe** with TypeScript throughout
- **Testing Ready** with Vitest and React Testing Library
- **Netlify Deploy** configured with Next.js runtime adapter

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (no Tailwind)
- **Testing**: Vitest + React Testing Library
- **Deployment**: Netlify with `@netlify/next` adapter
- **Linting**: ESLint with Next.js config

## Getting Started

### Prerequisites

- Node.js 20 or higher (see `.nvmrc`)
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For Netlify local development:

```bash
npm run dev:netlify
```

### Building

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Testing

Run tests:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with Header/Footer
│   │   ├── page.tsx          # Home page composition
│   │   └── globals.css       # Global styles & theme tokens
│   ├── components/
│   │   ├── Header.tsx        # Site header with navigation
│   │   ├── Footer.tsx        # Site footer
│   │   └── sections/         # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Blog.tsx
│   │       ├── Playground.tsx
│   │       └── Contact.tsx
│   └── data/
│       └── content.ts        # Structured content data
├── netlify.toml              # Netlify deployment config
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── vitest.config.ts          # Vitest test configuration
└── package.json
```

## Customization

### Content

Edit `src/data/content.ts` to update:
- Profile information (name, role, bio)
- Projects with descriptions, tags, and links
- Experience timeline
- Blog post links
- Playground experiments
- Contact details and social links

### Styling

Global styles and theme tokens are in `src/app/globals.css`. Update CSS custom properties:

```css
:root {
  --color-bg: #0a0a0a;
  --color-accent: #ff6b35;
  --color-secondary: #4ecdc4;
  /* ... more tokens */
}
```

### Sections

Add, remove, or reorder sections by editing `src/app/page.tsx`.

## Deployment

### Netlify

This project is configured for Netlify with the Next.js runtime:

1. Push your code to GitHub
2. Connect to Netlify
3. Build settings are auto-detected from `netlify.toml`
4. Deploy!

The `@netlify/next` adapter enables SSR on Netlify's infrastructure.

### Other Platforms

For Vercel, AWS Amplify, or other platforms, remove `@netlify/next` dependency and adjust build settings accordingly.

## Design Inspiration

Visual direction inspired by [Lynn Fisher's portfolio](https://lynnandtonic.com):
- Bold, contrasting color palette
- Playful geometric shapes and animations
- Asymmetric layouts with strong hierarchy
- Generous whitespace and clear typography

## License

MIT

## Notes

- Placeholder content and links are included - replace with your actual projects, experience, and contact info
- External links in Projects, Blog, and Playground sections should be updated
- Social links in the footer should point to your profiles
- Email in Contact section should be your real email address
- Consider adding actual images/screenshots for projects once available
