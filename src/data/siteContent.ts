import logoPath from '../assets/mstar-airsoft-logo.png';
import type { SiteContent } from '../types/siteContent';

export const siteContent: SiteContent = {
  identity: {
    name: 'Mstar Airsoft',
    logoPath,
    tagline: 'Competitive tactical airsoft events',
  },
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Rules', href: '#rules' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
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
    },
    {
      id: 'night-grid',
      title: 'Night Grid Invitational',
      date: 'July 12, 2026',
      location: 'Eastern Training Zone',
      entryFee: 'THB 2,000 / player',
      teamSize: '6 players',
      status: 'Limited Slots',
    },
    {
      id: 'final-front',
      title: 'Final Front Championship',
      date: 'August 30, 2026',
      location: 'Mstar Event Arena',
      entryFee: 'THB 10,000 / team',
      teamSize: '5 players + sub',
      status: 'Coming Soon',
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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Rules', href: '#rules' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
};
