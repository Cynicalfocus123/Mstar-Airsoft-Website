export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface CtaButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface SiteIdentity {
  name: string;
  logoPath: string;
  tagline: string;
}

export interface HeroContent {
  kicker: string;
  title: string;
  subtitle: string;
  videos: Array<{
    language: string;
    embedUrl: string;
    title: string;
  }>;
  buttons: CtaButton[];
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface HeroSlide {
  id: string;
  imagePath: string;
  posterPath: string;
  videoMp4Path: string;
  mobileVideoMp4Path?: string;
  videoWebmPath?: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: CtaButton;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  body: string;
  highlights: string[];
  backgroundImagePath?: string;
  mobileBackgroundImagePath?: string;
}

export interface TicketPackageItem {
  label: string;
  price: string;
  originalPrice?: string;
  expiry?: string;
  details: string[];
  perks: string[];
  stripeBuyButtonId?: string;
  stripePublishableKey?: string;
}

export interface TicketPageContent {
  eyebrow: string;
  title: string;
  description: string;
  packages: TicketPackageItem[];
  addons: Array<{
    title: string;
    price: string;
    description: string;
    stripeBuyButtonId: string;
    stripePublishableKey: string;
  }>;
}

export interface EventCard {
  id: string;
  href?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  entryFee: string;
  teams: string;
  attendance: string;
  status: string;
  summary: string;
  overview: string;
  imagePath: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'password' | 'textarea';
  placeholder: string;
  required: boolean;
}

export interface GameTerrainItem {
  id: string;
  title: string;
  description: string;
  videoPath: string;
  posterPath?: string;
}

export interface GameTerrainContent {
  eyebrow: string;
  title: string;
  description: string;
  items: GameTerrainItem[];
}

export interface RuleItem {
  title: string;
  description: string;
}

export interface ContactContent {
  email: string;
  social: string;
  location: string;
}

export interface SignInContent {
  title: string;
  fields: FormField[];
  benefits: string[];
}

export interface CreateAccountContent {
  title: string;
  fields: FormField[];
}

export interface CountryRegion {
  country: string;
  regions: string[];
}

export interface InfoCard {
  id: string;
  title: string;
  summary: string;
  imagePath: string;
  href?: string;
  badge?: string;
  placeholderLabel?: string;
}

export interface InfoSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
}

export interface InfoPageContent {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroAlign?: 'start' | 'center';
  cards?: InfoCard[];
  sections?: InfoSection[];
}

export interface SiteContent {
  identity: SiteIdentity;
  navLinks: NavLink[];
  authLinks: NavLink[];
  heroSlides: HeroSlide[];
  hero: HeroContent;
  about: AboutContent;
  ticketPage: TicketPageContent;
  events: EventCard[];
  registrationFields: FormField[];
  gameTerrain: GameTerrainContent;
  rules: RuleItem[];
  contact: ContactContent;
  footerSections: FooterSection[];
  infoPages: InfoPageContent[];
  signIn: SignInContent;
  createAccount: CreateAccountContent;
  countryRegions: CountryRegion[];
}
