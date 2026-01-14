# Martijn van Houten - Portfolio

Een moderne, Nederlandse portfolio website gebouwd met Next.js, TypeScript, Tailwind CSS en shadcn/ui.

## Features

- **Next.js 16** met App Router en TypeScript
- **Tailwind CSS v4** voor styling
- **shadcn/ui** componenten
- **Dark mode** met systeem- en handmatige toggle
- **i18n-ready** structuur (Nederlands als standaard, Engels voorbereid)
- **Responsive design** met mobile-first approach
- **SEO geoptimaliseerd** met metadata, sitemap en robots.txt
- **Toegankelijk** met keyboard navigatie en focus states

## Snel starten

### Vereisten

- Node.js 18.17 of hoger
- npm of yarn

### Installatie

```bash
# Clone de repository
git clone https://github.com/martynvhouten/martijn-portfolio.git
cd martijn-portfolio

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build voor productie
npm run start    # Start productie server
npm run lint     # Run ESLint
```

## Projectstructuur

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout met Navbar/Footer
│   ├── page.tsx            # Home pagina
│   ├── work/               # Werk pagina's
│   ├── about/              # Over mij pagina
│   └── contact/            # Contact pagina
├── components/
│   ├── ui/                 # shadcn/ui componenten
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Home page secties
├── content/
│   ├── i18n/               # Vertalingen (nl.json, en.json)
│   └── projects.ts         # Project data
├── lib/
│   ├── i18n.ts             # i18n utilities
│   └── utils.ts            # Helper functies
└── public/                 # Statische bestanden
```

## i18n (Internationalisatie)

De website is voorbereid voor meertaligheid:

- **Standaardtaal**: Nederlands (`content/i18n/nl.json`)
- **Engels**: Placeholder (`content/i18n/en.json`) - klaar om in te vullen

### Vertalingen gebruiken

```typescript
import { t } from '@/lib/i18n';

const translations = t();
console.log(translations.hero.headline);
```

### Toekomstige uitbreiding

Om volledige meertaligheid toe te voegen:

1. Vul `content/i18n/en.json` met Engelse vertalingen
2. Voeg een `[locale]` segment toe aan de App Router
3. Of gebruik middleware voor taaldetectie

## Theming

De website gebruikt CSS variabelen voor theming met een baby-blue accent kleur:

- **Light mode**: Zachte tinten met goede leesbaarheid
- **Dark mode**: Aangepaste kleuren voor donkere context

De dark mode toggle respecteert systeemvoorkeur en kan handmatig worden aangepast.

## Aanpassen

### Projecten bewerken

Bewerk `content/projects.ts` om projecten toe te voegen of aan te passen:

```typescript
export const projects: Project[] = [
  {
    slug: 'project-naam',
    title: 'Project Titel',
    shortDescription: 'Korte beschrijving...',
    tags: ['Webdesign', 'Development'],
    // ...meer velden
  },
];
```

### Kleuren aanpassen

Pas de accent kleuren aan in `app/globals.css` onder de CSS variabelen.

## Deployment

### Vercel (aanbevolen)

```bash
npm install -g vercel
vercel
```

### Andere platforms

```bash
npm run build
npm run start
```

## Technologieën

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI componenten
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode

## Licentie

MIT
