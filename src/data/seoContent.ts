import type { SeoEntry, JsonLdSchema } from '../types/seo';

const siteUrl = 'https://mstarairsoft.com';
const siteName = 'MSTAR Airsoft';
const defaultImage = `${siteUrl}/images/events/force-of-conquest-card.png`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

type SeoInput = Omit<SeoEntry, 'canonical' | 'robots' | 'ogTitle' | 'ogDescription' | 'ogImage' | 'ogType' | 'twitterCard' | 'schema'> & {
  path: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: SeoEntry['ogType'];
  twitterCard?: SeoEntry['twitterCard'];
  schema?: JsonLdSchema;
};

const routeAliases: Record<string, string> = {
  '/equipment': '/ship-your-equipment',
  '/ship-your-equipment': '/ship-your-equipment',
  '/accommodation-and-campground': '/accommodation',
  '/accommodation': '/accommodation',
  '/travel-preparation': '/how-to-get-to-the-event',
};

function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

function webPage(path: string, name: string, description: string, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': websiteId },
    publisher: { '@id': organizationId },
  };
}

function breadcrumbs(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function makeSeo(input: SeoInput): SeoEntry {
  return {
    title: input.title,
    description: input.description,
    canonical: absoluteUrl(input.path),
    robots: input.robots ?? 'index, follow',
    ogTitle: input.ogTitle ?? input.title,
    ogDescription: input.ogDescription ?? input.description,
    ogImage: input.ogImage ?? defaultImage,
    ogType: input.ogType ?? 'website',
    twitterCard: input.twitterCard ?? 'summary_large_image',
    schema: input.schema ?? [
      webPage(input.path, input.title, input.description),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: input.title, path: input.path },
      ]),
    ],
  };
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'MSTAR Airsoft',
  url: siteUrl,
  logo: defaultImage,
  email: 'info@mstarairsoft.com',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: siteName,
  url: siteUrl,
  publisher: { '@id': organizationId },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  '@id': `${siteUrl}/events/force-of-conquest#event`,
  name: 'MSTAR Airsoft Festival - Force of Conquest',
  description: 'An intense, realistic large-scale airsoft combat experience set deep in the jungle.',
  startDate: '2027-01-08T09:00:00+07:00',
  endDate: '2027-01-10T17:30:00+07:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [defaultImage],
  location: {
    '@type': 'Place',
    name: 'Mstar Jungle Land',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
    },
  },
  organizer: { '@id': organizationId },
  offers: {
    '@type': 'Offer',
    name: 'Force of Conquest Presale Ticket',
    url: absoluteUrl('/ticket'),
    price: '120.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    validThrough: '2026-11-20',
  },
};

export const seoContent: Record<string, SeoEntry> = {
  '/': makeSeo({
    path: '/',
    title: 'MSTAR Airsoft Festival Thailand | Force of Conquest',
    description: 'Join MSTAR Airsoft Festival in Thailand for Force of Conquest, a tactical airsoft event with jungle gameplay, travel guides, tickets, and event support.',
    schema: [
      organizationSchema,
      websiteSchema,
      webPage('/', 'MSTAR Airsoft Festival Thailand | Force of Conquest', 'Join MSTAR Airsoft Festival in Thailand for Force of Conquest, a tactical airsoft event with jungle gameplay, travel guides, tickets, and event support.'),
      breadcrumbs([{ name: 'Home', path: '/' }]),
    ],
  }),
  '/about': makeSeo({
    path: '/about',
    title: 'About MSTAR Airsoft | Thailand Tactical Festival',
    description: 'Learn about the MSTAR Airsoft Festival experience, combining tactical jungle gameplay, entertainment, camping, food, and adventure in Thailand.',
  }),
  '/ticket': makeSeo({
    path: '/ticket',
    title: 'MSTAR Airsoft Tickets | Force of Conquest Presale',
    description: 'Buy MSTAR Airsoft Force of Conquest presale tickets and camping experience add-ons for the Thailand tactical airsoft festival.',
    schema: [
      webPage('/ticket', 'MSTAR Airsoft Tickets | Force of Conquest Presale', 'Buy MSTAR Airsoft Force of Conquest presale tickets and camping experience add-ons for the Thailand tactical airsoft festival.'),
      eventSchema,
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Tickets', path: '/ticket' },
      ]),
    ],
  }),
  '/events': makeSeo({
    path: '/events',
    title: 'MSTAR Airsoft Events | Tactical Airsoft Thailand',
    description: 'Explore MSTAR Airsoft events in Thailand, including Force of Conquest and upcoming tactical airsoft tournament experiences.',
    schema: [
      webPage('/events', 'MSTAR Airsoft Events | Tactical Airsoft Thailand', 'Explore MSTAR Airsoft events in Thailand, including Force of Conquest and upcoming tactical airsoft tournament experiences.', 'CollectionPage'),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: eventSchema,
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Thing',
              name: 'MSTAR Airsoft TBA Event',
              description: 'Event details will be announced soon.',
            },
          },
        ],
      },
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
      ]),
    ],
  }),
  '/events/force-of-conquest': makeSeo({
    path: '/events/force-of-conquest',
    title: 'Force of Conquest | MSTAR Airsoft Thailand',
    description: 'View Force of Conquest event details for MSTAR Airsoft, including jungle gameplay, timing, location, attendance, and ticket information.',
    schema: [
      eventSchema,
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Force of Conquest', path: '/events/force-of-conquest' },
      ]),
    ],
  }),
  '/events/force-of-conquest/mission-scenario': makeSeo({
    path: '/events/force-of-conquest/mission-scenario',
    title: 'Mission Scenario | Force of Conquest 2027',
    description: 'Read the Force of Conquest 2027 three-day campaign storyline, including Day 1 Jungle Storm, Day 2 Golden Triangle, and Day 3 Final Conquest.',
    ogType: 'article',
    schema: [
      webPage('/events/force-of-conquest/mission-scenario', 'Mission Scenario | Force of Conquest 2027', 'Read the Force of Conquest 2027 three-day campaign storyline, including Day 1 Jungle Storm, Day 2 Golden Triangle, and Day 3 Final Conquest.', 'Article'),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Force of Conquest', path: '/events/force-of-conquest' },
        { name: 'Mission Scenario', path: '/events/force-of-conquest/mission-scenario' },
      ]),
    ],
  }),
  '/events/force-of-conquest/event-info': makeSeo({
    path: '/events/force-of-conquest/event-info',
    title: 'Event Info | Force of Conquest 2027',
    description: 'Read bilingual Force of Conquest 2027 event information covering the MilSim experience, tickets, facilities, camping, safety, and participation requirements.',
    ogType: 'article',
    schema: [
      webPage('/events/force-of-conquest/event-info', 'Event Info | Force of Conquest 2027', 'Read bilingual Force of Conquest 2027 event information covering the MilSim experience, tickets, facilities, camping, safety, and participation requirements.', 'Article'),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Force of Conquest', path: '/events/force-of-conquest' },
        { name: 'Event Info', path: '/events/force-of-conquest/event-info' },
      ]),
    ],
  }),
  '/events/night-grid': makeSeo({
    path: '/events/night-grid',
    title: 'TBA Event | MSTAR Airsoft',
    description: 'MSTAR Airsoft event details will be announced soon.',
    robots: 'noindex, follow',
  }),
  '/events/final-front': makeSeo({
    path: '/events/final-front',
    title: 'TBA Event | MSTAR Airsoft',
    description: 'MSTAR Airsoft event details will be announced soon.',
    robots: 'noindex, follow',
  }),
  '/things-to-know': makeSeo({
    path: '/things-to-know',
    title: 'Things to Know | MSTAR Airsoft Thailand Travel Guide',
    description: 'Plan your MSTAR Airsoft trip with guides for visa, transportation, equipment shipping, accommodation, rules, and activities in Thailand.',
    schema: [
      webPage('/things-to-know', 'Things to Know | MSTAR Airsoft Thailand Travel Guide', 'Plan your MSTAR Airsoft trip with guides for visa, transportation, equipment shipping, accommodation, rules, and activities in Thailand.'),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'How to Get to the Event', url: absoluteUrl('/how-to-get-to-the-event') },
          { '@type': 'ListItem', position: 2, name: 'Immigration Visa', url: absoluteUrl('/immigration-visa') },
          { '@type': 'ListItem', position: 3, name: 'Ship Your Equipment', url: absoluteUrl('/ship-your-equipment') },
          { '@type': 'ListItem', position: 4, name: 'Rules & Regulation', url: absoluteUrl('/rules-and-regulation') },
          { '@type': 'ListItem', position: 5, name: 'Accommodation & Campground', url: absoluteUrl('/accommodation') },
          { '@type': 'ListItem', position: 6, name: 'Activity', url: absoluteUrl('/activity') },
        ],
      },
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Things to Know', path: '/things-to-know' },
      ]),
    ],
  }),
  '/rules-and-regulation': makeSeo({
    path: '/rules-and-regulation',
    title: 'Rules & Regulation | MSTAR Airsoft Festival',
    description: 'Review MSTAR Airsoft rules, safety requirements, gameplay conduct, chronograph guidance, and event regulations before attending.',
  }),
  '/immigration-visa': makeSeo({
    path: '/immigration-visa',
    title: 'Immigration Visa Guide | MSTAR Airsoft Thailand',
    description: 'Read entry and visa guidance for international players traveling to Thailand for the MSTAR Airsoft Force of Conquest event.',
  }),
  '/how-to-get-to-the-event': makeSeo({
    path: '/how-to-get-to-the-event',
    title: 'How to Get to the Event | MSTAR Airsoft Thailand',
    description: 'Find travel guidance for reaching the MSTAR Airsoft event venue in Thailand, including arrival planning and transfer information.',
  }),
  '/ship-your-equipment': makeSeo({
    path: '/ship-your-equipment',
    title: 'Ship Your Equipment | MSTAR Airsoft Travel Guide',
    description: 'Learn how to prepare and ship airsoft equipment for the MSTAR Airsoft event in Thailand with safety and travel planning guidance.',
  }),
  '/accommodation': makeSeo({
    path: '/accommodation',
    title: 'Accommodation & Campground | MSTAR Airsoft Festival',
    description: 'View accommodation and campground information for MSTAR Airsoft attendees planning their Thailand event experience.',
  }),
  '/activity': makeSeo({
    path: '/activity',
    title: 'Activities & Entertainment | MSTAR Airsoft Festival',
    description: 'Explore outdoor adventure, entertainment, jungle activities, waterfalls, and festival experiences around the MSTAR Airsoft event.',
  }),
  '/what-to-do-in-thailand': makeSeo({
    path: '/what-to-do-in-thailand',
    title: 'What to Do in Thailand | MSTAR Airsoft Guide',
    description: 'Explore waterfalls, national parks, kayaking, cafes, restaurants, and entertainment near the MSTAR Airsoft event in Thailand.',
  }),
  '/travel-preparation': makeSeo({
    path: '/travel-preparation',
    title: 'Travel Preparation | MSTAR Airsoft Thailand',
    description: 'Prepare documents, arrival plans, travel timing, and practical details for attending the MSTAR Airsoft event in Thailand.',
  }),
  '/become-a-vendor': makeSeo({
    path: '/become-a-vendor',
    title: 'Become a Vendor | Force of Conquest 2027',
    description: 'Apply to operate a stall or exhibit at the MSTAR Airsoft Force of Conquest 2027 event.',
  }),
  '/contact': makeSeo({
    path: '/contact',
    title: 'Contact MSTAR Airsoft | Event Support',
    description: 'Contact MSTAR Airsoft for general inquiries, support issues, media questions, and Force of Conquest event information.',
    schema: [
      webPage('/contact', 'Contact MSTAR Airsoft | Event Support', 'Contact MSTAR Airsoft for general inquiries, support issues, media questions, and Force of Conquest event information.', 'ContactPage'),
      {
        ...organizationSchema,
        contactPoint: [
          { '@type': 'ContactPoint', email: 'info@mstarairsoft.com', contactType: 'general inquiries' },
          { '@type': 'ContactPoint', email: 'support@mstarairsoft.com', contactType: 'customer support' },
          { '@type': 'ContactPoint', email: 'press@mstarairsoft.com', contactType: 'media inquiries' },
        ],
      },
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  }),
  '/terms-and-conditions': makeSeo({
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | MSTAR Airsoft',
    description: 'Read the terms and conditions for using the MSTAR Airsoft website, event information, ticketing pages, and related services.',
    ogType: 'article',
  }),
  '/cancellation-and-refund': makeSeo({
    path: '/cancellation-and-refund',
    title: 'Cancellation and Refund | MSTAR Airsoft',
    description: 'Read the Force of Conquest event cancellation, refund, transfer, postponement, and no-show policy in English and Thai.',
    ogType: 'article',
  }),
  '/privacy': makeSeo({
    path: '/privacy',
    title: 'Privacy Policy | MSTAR Airsoft',
    description: 'Read the MSTAR Airsoft privacy policy covering website use, contact information, event inquiries, and data handling practices.',
    ogType: 'article',
  }),
  '/complaints': makeSeo({
    path: '/complaints',
    title: 'Complaints | MSTAR Airsoft Support',
    description: 'Submit or review complaint guidance for MSTAR Airsoft event support, website issues, ticket questions, and attendee communication.',
  }),
  '/products': makeSeo({
    path: '/products',
    title: 'Products | MSTAR Airsoft',
    description: 'MSTAR Airsoft product planning placeholder.',
    robots: 'noindex, follow',
  }),
  '/gallery': makeSeo({
    path: '/gallery',
    title: 'Gallery | MSTAR Airsoft',
    description: 'MSTAR Airsoft gallery placeholder.',
    robots: 'noindex, nofollow',
  }),
  '/immigration': makeSeo({
    path: '/immigration-visa',
    title: 'Immigration Visa Guide | MSTAR Airsoft Thailand',
    description: 'Read entry and visa guidance for international players traveling to Thailand for the MSTAR Airsoft Force of Conquest event.',
  }),
  '/how-to-pack': makeSeo({
    path: '/ship-your-equipment',
    title: 'Ship Your Equipment | MSTAR Airsoft Travel Guide',
    description: 'Learn how to prepare and ship airsoft equipment for the MSTAR Airsoft event in Thailand with safety and travel planning guidance.',
  }),
  '/thailand-laws-and-regulations': makeSeo({
    path: '/thailand-laws-and-regulations',
    title: 'Thailand Laws and Regulations | MSTAR Airsoft',
    description: 'Placeholder local guidance for MSTAR Airsoft travelers.',
    robots: 'noindex, follow',
  }),
  '/faq': makeSeo({
    path: '/faq',
    title: 'FAQ | MSTAR Airsoft',
    description: 'MSTAR Airsoft frequently asked questions placeholder.',
    robots: 'noindex, follow',
  }),
  '/signin': makeSeo({
    path: '/signin',
    title: 'Sign In | MSTAR Airsoft',
    description: 'Sign in to your MSTAR Airsoft account.',
    robots: 'noindex, nofollow',
  }),
  '/signup': makeSeo({
    path: '/signup',
    title: 'Create Account | MSTAR Airsoft',
    description: 'Create an MSTAR Airsoft account.',
    robots: 'noindex, nofollow',
  }),
  '/account': makeSeo({
    path: '/account',
    title: 'Account | MSTAR Airsoft',
    description: 'Manage your MSTAR Airsoft account.',
    robots: 'noindex, nofollow',
  }),
};

export function getSeoPath(pathname: string) {
  const basePath = new URL(import.meta.env.BASE_URL, siteUrl).pathname.replace(/\/+$/, '');
  const rawPath = pathname.replace(/\/+$/, '') || '/';
  const cleanPath = basePath && rawPath.startsWith(`${basePath}/`)
    ? rawPath.slice(basePath.length) || '/'
    : rawPath;
  if (cleanPath.startsWith('/checkout/')) return '/checkout';
  if (cleanPath.startsWith('/events/')) return cleanPath;
  return routeAliases[cleanPath] ?? cleanPath;
}

export function getSeoForPath(pathname: string) {
  const seoPath = getSeoPath(pathname);

  if (seoPath === '/checkout') {
    return makeSeo({
      path: '/checkout',
      title: 'Checkout | MSTAR Airsoft',
      description: 'MSTAR Airsoft event checkout.',
      robots: 'noindex, nofollow',
    });
  }

  return seoContent[seoPath] ?? seoContent['/'];
}

export const sitemapRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/ticket', priority: '0.9' },
  { path: '/events', priority: '0.9' },
  { path: '/events/force-of-conquest', priority: '0.9' },
  { path: '/events/force-of-conquest/mission-scenario', priority: '0.8' },
  { path: '/events/force-of-conquest/event-info', priority: '0.8' },
  { path: '/things-to-know', priority: '0.8' },
  { path: '/rules-and-regulation', priority: '0.8' },
  { path: '/contact', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/immigration-visa', priority: '0.7' },
  { path: '/how-to-get-to-the-event', priority: '0.7' },
  { path: '/ship-your-equipment', priority: '0.7' },
  { path: '/accommodation', priority: '0.7' },
  { path: '/activity', priority: '0.7' },
  { path: '/what-to-do-in-thailand', priority: '0.7' },
  { path: '/travel-preparation', priority: '0.7' },
  { path: '/become-a-vendor', priority: '0.7' },
  { path: '/terms-and-conditions', priority: '0.6' },
  { path: '/cancellation-and-refund', priority: '0.6' },
  { path: '/privacy', priority: '0.6' },
  { path: '/complaints', priority: '0.5' },
] as const;
