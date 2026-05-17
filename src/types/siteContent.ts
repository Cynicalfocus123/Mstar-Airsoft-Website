export interface NavLink {
  label: string;
  href: string;
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
}

export interface EventCard {
  id: string;
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

export interface GalleryItem {
  id: string;
  title: string;
  imagePath: string;
  alt: string;
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

export interface SiteContent {
  identity: SiteIdentity;
  navLinks: NavLink[];
  authLinks: NavLink[];
  heroSlides: HeroSlide[];
  hero: HeroContent;
  about: AboutContent;
  events: EventCard[];
  registrationFields: FormField[];
  gallery: GalleryItem[];
  rules: RuleItem[];
  contact: ContactContent;
  footerLinks: NavLink[];
  signIn: SignInContent;
  createAccount: CreateAccountContent;
  countryRegions: CountryRegion[];
}
