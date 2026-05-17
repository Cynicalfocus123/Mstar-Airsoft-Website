import logoPath from '../assets/mstar-airsoft-logo.png';
import type { SiteContent } from '../types/siteContent';

export const siteContent: SiteContent = {
  identity: {
    name: 'Mstar Airsoft',
    logoPath,
    tagline: 'Competitive tactical airsoft events',
  },
  navLinks: [
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Rules', href: '#rules' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  authLinks: [
    { label: 'Login', href: '#/signin' },
    { label: 'Sign Up', href: '#/signup' },
  ],
  heroSlides: [
    {
      id: 'gold-rush',
      imagePath: '/banners/gold-rush.svg',
      eyebrow: 'Featured Tournament',
      title: 'Gold Rush Open',
      body: 'Squad-based tournament registration is open now for the next Mstar Airsoft operation.',
      cta: { label: 'Sign Up Now', href: '#/signup', variant: 'primary' },
    },
    {
      id: 'night-shift',
      imagePath: '/banners/night-shift.svg',
      eyebrow: 'Night Event',
      title: 'Night Shift CQB',
      body: 'Low-light objective rounds, marshal-controlled lanes, and competitive scoring.',
      cta: { label: 'Sign Up Now', href: '#/signup', variant: 'primary' },
    },
    {
      id: 'final-line',
      imagePath: '/banners/final-line.svg',
      eyebrow: 'Championship Path',
      title: 'Final Line Series',
      body: 'Qualify through seasonal events and fight for the championship bracket.',
      cta: { label: 'Sign Up Now', href: '#/signup', variant: 'primary' },
    },
  ],
  hero: {
    kicker: 'Tournament Operations',
    title: 'MSTAR AIRSOFT',
    subtitle:
      'Tactical airsoft tournaments and competitive events built for organized teams, clear rules, and mission-focused play.',
    buttons: [
      { label: 'Join Tournament', href: '#registration', variant: 'primary' },
      { label: 'View Events', href: '#events', variant: 'secondary' },
    ],
    stats: [
      { value: '5v5', label: 'Squad format' },
      { value: 'CQB', label: 'Scenario rounds' },
      { value: '2026', label: 'Season ready' },
    ],
  },
  about: {
    eyebrow: 'Built For Teams',
    title: 'Competitive airsoft with clean structure and strong field discipline.',
    body:
      'Mstar Airsoft is a tournament-focused brand for players who want organized schedules, balanced match formats, safety-first operations, and a serious event-day experience.',
    highlights: [
      'Structured brackets and objective-based matches',
      'Clear registration flow for teams and solo players',
      'Rules, safety, and gear details ready for admin updates',
    ],
  },
  events: [
    {
      id: 'urban-rush',
      title: 'Urban Rush Qualifier',
      date: 'June 21, 2026',
      location: 'Bangkok Tactical Field',
      entryFee: 'THB 1,500 / player',
      teamSize: '5 players',
      status: 'Registration Open',
      summary: 'A fast-paced qualifier built around urban lanes, short rotations, and clean team scoring.',
      imagePath: '/banners/event-urban.svg',
    },
    {
      id: 'night-grid',
      title: 'Night Grid Invitational',
      date: 'July 12, 2026',
      location: 'Eastern Training Zone',
      entryFee: 'THB 2,000 / player',
      teamSize: '6 players',
      status: 'Limited Slots',
      summary: 'Low-light missions with tight objective windows and strict safety control.',
      imagePath: '/banners/event-night.svg',
    },
    {
      id: 'final-front',
      title: 'Final Front Championship',
      date: 'August 30, 2026',
      location: 'Mstar Event Arena',
      entryFee: 'THB 10,000 / team',
      teamSize: '5 players + sub',
      status: 'Coming Soon',
      summary: 'Season-end championship bracket for qualified teams and invited squads.',
      imagePath: '/banners/event-final.svg',
    },
    {
      id: 'ridge-line',
      title: 'Ridge Line Assault',
      date: 'September 19, 2026',
      location: 'Northern Ridge Field',
      entryFee: 'THB 1,800 / player',
      teamSize: '7 players',
      status: 'Roster Preview',
      summary: 'Outdoor objective play with longer lanes, hold points, and rotating command roles.',
      imagePath: '/banners/event-ridge.svg',
    },
    {
      id: 'steel-yard',
      title: 'Steel Yard Clash',
      date: 'October 10, 2026',
      location: 'Industrial Yard Arena',
      entryFee: 'THB 1,600 / player',
      teamSize: '5 players',
      status: 'Coming Soon',
      summary: 'Compact arena tournament designed for quick pushes and precise communication.',
      imagePath: '/banners/event-steel.svg',
    },
    {
      id: 'black-zone',
      title: 'Black Zone Finals',
      date: 'November 15, 2026',
      location: 'Mstar Main Field',
      entryFee: 'THB 12,000 / team',
      teamSize: '6 players + sub',
      status: 'Invite Watch',
      summary: 'Final high-pressure tournament with ranked seeds, finals staging, and broadcast-ready timing.',
      imagePath: '/banners/event-black.svg',
    },
  ],
  registrationFields: [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+66 00 000 0000', required: true },
    { id: 'teamName', label: 'Team name', type: 'text', placeholder: 'Team callsign', required: true },
    { id: 'players', label: 'Number of players', type: 'number', placeholder: '5', required: true },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Event, roster, or special notes', required: false },
  ],
  gallery: [
    {
      id: 'staging-zone',
      title: 'Staging Zone',
      imagePath: '/gallery/staging-zone.webp',
      alt: 'Airsoft staging zone placeholder',
    },
    {
      id: 'field-layout',
      title: 'Field Layout',
      imagePath: '/gallery/field-layout.webp',
      alt: 'Airsoft field layout placeholder',
    },
    {
      id: 'match-brief',
      title: 'Match Brief',
      imagePath: '/gallery/match-brief.webp',
      alt: 'Tournament briefing placeholder',
    },
  ],
  rules: [
    {
      title: 'Safety rules',
      description:
        'Eye protection stays on inside active areas. Marshals control start, pause, and stop calls.',
    },
    {
      title: 'FPS limits placeholder',
      description:
        'Final FPS limits will be confirmed per venue and published before each event.',
    },
    {
      title: 'Required gear',
      description:
        'Players must bring approved eye protection, team markers, hydration, and event-ready replicas.',
    },
    {
      title: 'Fair play rules',
      description:
        'Call hits clearly, respect marshal decisions, and keep conduct professional on and off field.',
    },
  ],
  contact: {
    email: 'events@mstarairsoft.example',
    social: '@mstarairsoft',
    location: 'Bangkok, Thailand',
  },
  footerLinks: [
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#/events' },
    { label: 'Rules', href: '#rules' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  signIn: {
    title: 'SIGN IN',
    fields: [
      { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', required: true },
    ],
    benefits: [
      'Faster tournament registration',
      'Save team and contact details',
      'Track event status and roster updates',
    ],
  },
  createAccount: {
    title: 'CREATE ACCOUNT',
    fields: [
      { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Create password', required: true },
      { id: 'firstName', label: 'First name', type: 'text', placeholder: 'First name', required: true },
      { id: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name', required: true },
      { id: 'address1', label: 'Address 1', type: 'text', placeholder: 'Street address', required: true },
      { id: 'companyName', label: 'Company name optional', type: 'text', placeholder: 'Company name', required: false },
      { id: 'city', label: 'Suburb/City', type: 'text', placeholder: 'City', required: true },
      { id: 'stateProvince', label: 'State/Province', type: 'text', placeholder: 'State or province', required: true },
      { id: 'zip', label: 'Zip/Postcode', type: 'text', placeholder: 'Zip or postcode', required: true },
      { id: 'country', label: 'Country', type: 'text', placeholder: 'Country', required: true },
      { id: 'phone', label: 'Phone number', type: 'tel', placeholder: '+66 00 000 0000', required: true },
    ],
  },
  countryRegions: [
    {
      country: 'United States',
      regions: ['Alabama', 'California', 'Florida', 'New York', 'Texas', 'Washington'],
    },
    {
      country: 'Thailand',
      regions: ['Bangkok', 'Chiang Mai', 'Chonburi', 'Phuket', 'Nakhon Ratchasima', 'Nonthaburi'],
    },
    {
      country: 'Canada',
      regions: ['Alberta', 'British Columbia', 'Manitoba', 'Ontario', 'Quebec', 'Saskatchewan'],
    },
    {
      country: 'Japan',
      regions: ['Aichi', 'Chiba', 'Hokkaido', 'Osaka', 'Tokyo', 'Yokohama'],
    },
    {
      country: 'Australia',
      regions: ['Australian Capital Territory', 'New South Wales', 'Queensland', 'Victoria', 'Western Australia'],
    },
  ],
};
