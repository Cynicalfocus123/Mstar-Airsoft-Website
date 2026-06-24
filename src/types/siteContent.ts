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

export interface TicketRegistrationStep {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  highlight?: string;
  iconLabel: string;
}

export interface TicketFormLink {
  label: string;
  href?: string;
  pendingLabel?: string;
}

export interface TicketFormSection {
  id: string;
  title: string;
  description: string;
  links: TicketFormLink[];
}

export interface TicketPageContent {
  eyebrow: string;
  title: string;
  description: string;
  registrationGuide: {
    title: string;
    subtitle: string;
    backgroundImagePath: string;
    steps: TicketRegistrationStep[];
    formSections: TicketFormSection[];
  };
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
  detail?: {
    heroTitle: string;
    heroDescription: string;
    heroCtas: CtaButton[];
    overviewTitle: string;
    missionTitle: string;
    missionBody: string;
    detailRows: Array<{
      label: string;
      value: string;
    }>;
    timeline: Array<{
      label: string;
      title: string;
      body: string;
    }>;
    requirements: string[];
    factions?: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{
        name: string;
        imagePath: string;
        description: string;
      }>;
    };
    missionScenario: {
      eyebrow: string;
      backgroundImagePath: string;
      href: string;
      bannerText: string;
      bannerSubtext: string;
      defaultLanguage: 'en' | 'th';
      languages: Array<{
        code: 'en' | 'th';
        label: string;
        htmlLang: string;
        heading: string;
        subheading: string;
        dateLocation: string;
        backgroundHeading: string;
        backgroundParagraphs: string[];
        scheduleHeading: string;
        days: Array<{
          label: string;
          title: string;
          subtitle: string;
          intro: string;
          bodyParagraphs: string[];
          schedule: Array<{
            time: string;
            mission: string;
          }>;
          objectivesTitle: string;
          objectives: string[];
          extraIntro?: string;
          extraTitle?: string;
          extraItems?: string[];
          victoryIntro?: string;
          victoryTitle?: string;
          victoryItems?: string[];
          endGameTitle?: string;
          endGameParagraphs?: string[];
        }>;
        nightFestival: {
          label: string;
          title: string;
          intro: string;
          groups: Array<{
            title: string;
            items: string[];
          }>;
        };
        closingLine: string;
        closingParagraphs: string[];
        closingCalls: string[];
      }>;
    };
    footerTitle: string;
    footerCta: CtaButton;
  };
}

export interface EventCountdownContent {
  eyebrow: string;
  title: string;
  description: string;
  targetIso: string;
  gateLabel: string;
  completeLabel: string;
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
  items?: Array<{
    type: 'paragraph' | 'bullet';
    text: string;
  }>;
  paragraphs?: string[];
  bullets?: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
}

export interface InfoLanguageVersion {
  id: string;
  label: string;
  lang: string;
  sections: InfoSection[];
}

export interface InfoPageContent {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroAlign?: 'start' | 'center';
  cards?: InfoCard[];
  sections?: InfoSection[];
  languageVersions?: InfoLanguageVersion[];
}

export interface SiteContent {
  identity: SiteIdentity;
  navLinks: NavLink[];
  heroSlides: HeroSlide[];
  hero: HeroContent;
  about: AboutContent;
  ticketPage: TicketPageContent;
  events: EventCard[];
  eventCountdown: EventCountdownContent;
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
