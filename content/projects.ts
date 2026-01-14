export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  role: string;
  stack: string[];
  year: string;
  period: string;
  challenge: string;
  solution: string;
  highlights: string[];
  images: { src: string; alt: string }[];
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'aa-belastingadviseurs',
    title: 'AA Belastingadviseurs',
    shortDescription: 'Professionele website voor een belastingadvieskantoor. Betrouwbare uitstraling met focus op conversie en vindbaarheid.',
    tags: ['Webdesign', 'Development', 'SEO'],
    role: 'Webontwikkelaar & Designer',
    stack: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    year: '2024',
    period: '2024',
    challenge: 'AA Belastingadviseurs had een verouderde website die hun professionaliteit niet goed uitstraalde. Ze wilden een moderne, betrouwbare online aanwezigheid die potentiële klanten overtuigt en makkelijk te beheren is.',
    solution: 'Ik ontwierp en bouwde een strakke, professionele website met WordPress als fundament. De focus lag op duidelijke diensten, een overtuigende over-ons pagina en laagdrempelig contact. De site is volledig responsive en geoptimaliseerd voor lokale SEO.',
    highlights: [
      'Professionele, vertrouwenwekkende uitstraling',
      'Eenvoudig zelf content beheren via WordPress',
      'Geoptimaliseerd voor lokale zoekopdrachten',
      'Snelle laadtijden en mobile-first design'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'AA Belastingadviseurs homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'AA Belastingadviseurs diensten' },
      { src: '/images/placeholder-project.jpg', alt: 'AA Belastingadviseurs contact' }
    ],
    liveUrl: 'https://aabelastingadviseurs.nl',
    featured: true
  },
  {
    slug: 'casa-mi-sueno',
    title: 'Casa Mi Sueño',
    shortDescription: 'Sfeervolle website voor een vakantiewoning in Spanje. Visueel aantrekkelijk met focus op boekingen en beleving.',
    tags: ['Webdesign', 'Development'],
    role: 'Webontwikkelaar & Designer',
    stack: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    year: '2024',
    period: '2024',
    challenge: 'Casa Mi Sueño is een prachtige vakantiewoning in Spanje die meer directe boekingen wilde aantrekken. De bestaande website deed geen recht aan de sfeer en kwaliteit van de accommodatie.',
    solution: 'Ik creëerde een visueel rijke website die de Spaanse sfeer en luxe van de woning perfect overbrengt. Grote, sfeervolle beelden, duidelijke informatie over de omgeving en een eenvoudig boekingsproces zorgen voor een optimale gebruikerservaring.',
    highlights: [
      'Sfeervolle presentatie die de woning tot leven brengt',
      'Duidelijke informatie over faciliteiten en omgeving',
      'Makkelijk zelf foto\'s en tarieven aanpassen',
      'Responsive design voor alle apparaten'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'Casa Mi Sueño homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'Casa Mi Sueño galerij' },
      { src: '/images/placeholder-project.jpg', alt: 'Casa Mi Sueño omgeving' }
    ],
    liveUrl: 'https://casamisueno.nl',
    featured: true
  },
  {
    slug: 'renovatie-nederland',
    title: 'Renovatie Nederland',
    shortDescription: 'Een moderne website voor een landelijk renovatiebedrijf. Focus op leadgeneratie en vertrouwen.',
    tags: ['Webdesign', 'Development', 'SEO'],
    role: 'Lead Developer & Designer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    year: '2024',
    period: 'Januari - Maart 2024',
    challenge: 'Renovatie Nederland had een verouderde website die niet goed presteerde op mobiel en nauwelijks leads opleverde. Ze zochten een moderne, betrouwbare uitstraling die past bij hun kwaliteitsgerichte aanpak.',
    solution: 'Ik ontwierp en bouwde een volledig nieuwe website met een focus op snelheid, gebruiksvriendelijkheid en conversie. De site bevat een intuïtief offerteformulier, projectgalerij en testimonials. Alles is geoptimaliseerd voor SEO en laadt razendsnel.',
    highlights: [
      'Laadtijd onder de 2 seconden op mobiel',
      '40% meer offerteaanvragen binnen 3 maanden',
      'Volledig responsive design',
      'Content beheerbaar via Sanity CMS'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'Renovatie Nederland homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'Renovatie Nederland projectpagina' },
      { src: '/images/placeholder-project.jpg', alt: 'Renovatie Nederland mobiel' }
    ]
  },
  {
    slug: 'studio-bloem',
    title: 'Studio Bloem',
    shortDescription: 'Portfolio website voor een creatief fotostudio. Minimalistisch design met focus op visueel werk.',
    tags: ['Webdesign', 'Development'],
    role: 'Webontwikkelaar',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Cloudinary'],
    year: '2024',
    period: 'April - Mei 2024',
    challenge: 'Studio Bloem wilde een portfolio dat hun fotografiewerk centraal stelt zonder afleiding. De oude website was traag en de beelden kwamen niet tot hun recht.',
    solution: 'Een strak, minimalistisch portfolio met een masonry-grid voor foto\'s. Geoptimaliseerde afbeeldingen via Cloudinary zorgen voor snelle laadtijden zonder kwaliteitsverlies. Subtiele animaties maken de beleving compleet.',
    highlights: [
      'Lighthouse score van 98+ op alle metrics',
      'Geoptimaliseerde beeldweergave voor retina-schermen',
      'Elegante page transitions',
      'Eenvoudig zelf foto\'s toevoegen via CMS'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'Studio Bloem homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'Studio Bloem galerij' }
    ]
  },
  {
    slug: 'koopman-advocaten',
    title: 'Koopman Advocaten',
    shortDescription: 'Corporate website voor een advocatenkantoor. Professioneel, toegankelijk en vertrouwenwekkend.',
    tags: ['Webdesign', 'Development', 'Toegankelijkheid'],
    role: 'Full-stack Developer',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    year: '2023',
    period: 'September - November 2023',
    challenge: 'Het advocatenkantoor had behoefte aan een website die professionaliteit uitstraalt en tegelijk toegankelijk is voor alle bezoekers. WCAG-compliance was een vereiste.',
    solution: 'Ik bouwde een volledig toegankelijke website met heldere navigatie, goed leesbare typografie en voldoende contrast. Een intake-formulier maakt het makkelijk om contact op te nemen. De site voldoet aan WCAG 2.1 AA richtlijnen.',
    highlights: [
      'WCAG 2.1 AA compliant',
      'Gemiddeld 25% meer contactaanvragen',
      'Professionele, vertrouwenwekkende uitstraling',
      'Snelle doorontwikkeling dankzij modulaire opzet'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'Koopman Advocaten homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'Koopman Advocaten teamoverzicht' },
      { src: '/images/placeholder-project.jpg', alt: 'Koopman Advocaten contactpagina' }
    ]
  },
  {
    slug: 'fresh-foods-delivery',
    title: 'Fresh Foods Delivery',
    shortDescription: 'E-commerce platform voor een lokale versbox-service. Bestelflow, abonnementen en betalingen.',
    tags: ['Development', 'E-commerce', 'Integratie'],
    role: 'Lead Developer',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    year: '2023',
    period: 'Mei - Augustus 2023',
    challenge: 'Fresh Foods wilde een online bestelplatform voor hun wekelijkse versboxen. Ze hadden flexibele abonnementen nodig, meerdere betaalmethoden en een overzichtelijk dashboard voor orderbeheer.',
    solution: 'Ik ontwikkelde een volledig e-commerce platform met Stripe-integratie voor betalingen en abonnementen. Klanten kunnen boxen samenstellen, bezorgmomenten kiezen en hun abonnement zelf beheren. Een admin-dashboard geeft real-time inzicht in bestellingen.',
    highlights: [
      'Stripe-integratie voor veilige betalingen',
      'Flexibel abonnementensysteem',
      'Admin-dashboard voor orderbeheer',
      '60% tijdsbesparing op ordermanagement'
    ],
    images: [
      { src: '/images/placeholder-project.jpg', alt: 'Fresh Foods homepage' },
      { src: '/images/placeholder-project.jpg', alt: 'Fresh Foods bestelproces' },
      { src: '/images/placeholder-project.jpg', alt: 'Fresh Foods dashboard' }
    ]
  }
];

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const tags = projects.flatMap((project) => project.tags);
  return [...new Set(tags)];
}

// Helper function to get projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) => project.tags.includes(tag));
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
