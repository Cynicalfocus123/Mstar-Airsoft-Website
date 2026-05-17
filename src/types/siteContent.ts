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
  location: string;
  entryFee: string;
  teamSize: string;
  status: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
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

export interface SiteContent {
  identity: SiteIdentity;
  navLinks: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  events: EventCard[];
  registrationFields: FormField[];
  gallery: GalleryItem[];
  rules: RuleItem[];
  contact: ContactContent;
  footerLinks: NavLink[];
}
