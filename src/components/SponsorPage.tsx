import type {
  SponsorFeatureCard,
  SponsorPageContent,
} from "../types/siteContent";
import { getPublicAssetPath } from "../utils/publicAssetPath";

interface SponsorPageProps {
  content: SponsorPageContent;
}

type SponsorSection = SponsorPageContent["sections"][number];
type SponsorIconName =
  | "box"
  | "check"
  | "flag"
  | "food"
  | "gear"
  | "growth"
  | "handshake"
  | "megaphone"
  | "screen"
  | "search"
  | "star"
  | "storefront"
  | "tools"
  | "users"
  | "vehicle"
  | "video";

function SponsorIcon({
  name,
  className = "",
}: {
  name: SponsorIconName;
  className?: string;
}) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `sponsor-svg-icon ${className}`.trim(),
    "aria-hidden": true,
  };

  switch (name) {
    case "box":
      return (
        <svg {...commonProps}>
          <path d="M4 8.4 12 4l8 4.4-8 4.4L4 8.4Z" />
          <path d="M4 8.4v7.2L12 20l8-4.4V8.4" />
          <path d="M12 12.8V20" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
          <path d="m8 12.2 2.4 2.4L16.5 8.8" stroke="#fff" />
        </svg>
      );
    case "flag":
      return (
        <svg {...commonProps}>
          <path d="M5 21V4" />
          <path d="M5 5.5c3.2-1.5 5.6 1.5 9 0 1.5-.6 2.6-.9 4-.7v9.1c-1.4-.2-2.5.1-4 .7-3.4 1.5-5.8-1.5-9 0" />
        </svg>
      );
    case "food":
      return (
        <svg {...commonProps}>
          <path d="M7 3v8" />
          <path d="M4.5 3v8" />
          <path d="M9.5 3v8" />
          <path d="M4.5 11h5L7 14v7" />
          <path d="M15 3c2.8 1.8 4 4.2 4 7.4 0 2.3-1.2 4-3 4.6v6" />
          <path d="M15 3v18" />
        </svg>
      );
    case "gear":
      return (
        <svg {...commonProps}>
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          <path d="m4.9 9.6 1.4-.8.2-1.2-1-1.3 1.9-1.9 1.3 1 1.2-.5.5-1.6h3.2l.5 1.6 1.2.5 1.3-1 1.9 1.9-1 1.3.2 1.2 1.4.8v2.8l-1.4.8-.2 1.2 1 1.3-1.9 1.9-1.3-1-1.2.5-.5 1.6h-3.2l-.5-1.6-1.2-.5-1.3 1-1.9-1.9 1-1.3-.2-1.2-1.4-.8V9.6Z" />
        </svg>
      );
    case "growth":
      return (
        <svg {...commonProps}>
          <path d="M4 19h16" />
          <path d="M6 16v-4" />
          <path d="M11 16V9" />
          <path d="M16 16V6" />
          <path d="m5 10 5-4 4 2 5-5" />
          <path d="M15.5 3H19v3.5" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...commonProps} viewBox="0 0 32 24">
          <path d="M2.8 8.4 8.1 3l4.4 4.4" />
          <path d="M29.2 8.4 23.9 3l-4.4 4.4" />
          <path d="M8 8.5h5.1l2.5 2.3c.7.7 1.9.7 2.6 0 .7-.7.7-1.9 0-2.6L16 6h-4.1L8.2 9.7c-.8.8-2 .8-2.8 0L3.8 8.1" />
          <path d="m8.8 12.1 5.1 5.1c.9.9 2.3.9 3.2 0l.4-.4" />
          <path d="m17.1 16.8 1.1 1.1c.9.9 2.4.9 3.3 0l4.9-4.9" />
          <path d="m23.9 8.1 4.3 4.3" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...commonProps}>
          <path d="M4 12.8h3.4l9.4 4.7v-11l-9.4 4.7H4v1.6Z" />
          <path d="M7.4 12.8 8.6 19h3.1l-1.5-4.9" />
          <path d="M18.9 9.1c.8.7 1.3 1.7 1.3 2.9s-.5 2.2-1.3 2.9" />
          <path d="M21.3 6.8c1.2 1.4 1.9 3.2 1.9 5.2s-.7 3.8-1.9 5.2" />
        </svg>
      );
    case "screen":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <circle cx="10.5" cy="10.5" r="2.4" />
          <path d="m15.4 15.4 5.1 5.1" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="m12 2.2 2.9 6 6.6.9-4.8 4.7 1.2 6.6-5.9-3.1-5.9 3.1 1.2-6.6L2.5 9.1l6.6-.9L12 2.2Z" />
        </svg>
      );
    case "storefront":
      return (
        <svg {...commonProps}>
          <path d="M4 10h16" />
          <path d="M5 10 6.3 4h11.4L19 10" />
          <path d="M6 10v9h12v-9" />
          <path d="M9 19v-5h6v5" />
          <path d="M3.8 10c0 1.3 1 2.3 2.2 2.3S8.2 11.3 8.2 10c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3" />
        </svg>
      );
    case "tools":
      return (
        <svg {...commonProps}>
          <path d="M4 20 15.7 8.3" />
          <path d="m14.6 5.7 2.5-2.5 3.1 3.1-2.5 2.5" />
          <path d="m13.2 7.1 3.7 3.7" />
          <path d="M5.8 4.2 9.2 7.6" />
          <path d="M4.2 5.8 7.6 9.2" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <path d="M12 11a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" />
          <path d="M5.5 20c.7-3.5 3-5.4 6.5-5.4s5.8 1.9 6.5 5.4" />
          <path d="M5.3 10.5a2.6 2.6 0 1 0 0-5.2" />
          <path d="M2 18c.3-2.2 1.4-3.7 3.3-4.5" />
          <path d="M18.7 10.5a2.6 2.6 0 1 1 0-5.2" />
          <path d="M22 18c-.3-2.2-1.4-3.7-3.3-4.5" />
        </svg>
      );
    case "vehicle":
      return (
        <svg {...commonProps}>
          <path d="M3.8 15.7V8.4c0-1.2 1-2.2 2.2-2.2h7.3l3 4.1h3.9v5.4" />
          <path d="M3.8 11.2h12.5" />
          <path d="M7.2 18.2a2 2 0 1 0 0-4.1 2 2 0 0 0 0 4.1Z" />
          <path d="M17.2 18.2a2 2 0 1 0 0-4.1 2 2 0 0 0 0 4.1Z" />
        </svg>
      );
    case "video":
      return (
        <svg {...commonProps}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3" />
          <path
            d="m8.5 9.5 4 2.5-4 2.5v-5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    default:
      return null;
  }
}

function getSectionIcon(section: SponsorSection): SponsorIconName {
  if (section.pillText === "SPONSORSHIP") return "handshake";
  if (section.pillText === "CAMPAIGN REACH") return "megaphone";
  if (section.pillText === "PARTNER VALUE") return "handshake";
  if (section.pillText === "MEDIA INVENTORY") return "video";
  if (section.tone === "green") return "search";
  if (section.tone === "red") return "check";
  return "storefront";
}

function getPillIconPath(section: SponsorSection): string | undefined {
  switch (section.pillText) {
    case "EVENT OVERVIEW":
      return "/images/sponsor/icons/magnifying.png";
    case "VENDOR PROGRAM":
      return "/images/sponsor/icons/vendor-booth.png";
    case "MEDIA INVENTORY":
      return "/images/sponsor/icons/media-player.png";
    case "PARTNER VALUE":
      return "/images/sponsor/icons/hand-shake.png";
    default:
      return undefined;
  }
}

function getCardIcon(icon?: string): SponsorIconName | undefined {
  switch (icon) {
    case "box":
      return "box";
    case "flag":
      return "flag";
    case "food":
      return "food";
    case "growth":
      return "growth";
    case "screen":
      return "screen";
    case "service":
      return "gear";
    case "tools":
      return "tools";
    case "vehicle":
      return "vehicle";
    default:
      return undefined;
  }
}

function SectionHeader({
  section,
  isPageTitle = false,
}: {
  section: SponsorSection;
  isPageTitle?: boolean;
}) {
  const pillIconPath = getPillIconPath(section);

  return (
    <header className="sponsor-section-header">
      <span className="sponsor-title-mark" aria-hidden="true" />
      {isPageTitle ? <h1>{section.heading}</h1> : <h2>{section.heading}</h2>}
      <span className="sponsor-pill">
        {pillIconPath ? (
          <img
            className="sponsor-pill-icon sponsor-pill-image-icon"
            src={getPublicAssetPath(pillIconPath)}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        ) : (
          <SponsorIcon
            name={getSectionIcon(section)}
            className="sponsor-pill-icon"
          />
        )}
        {section.pillText}
      </span>
    </header>
  );
}

function BulletList({
  items,
  className = "",
}: {
  items?: string[];
  className?: string;
}) {
  if (!items?.length) return null;

  return (
    <ul className={`sponsor-bullet-list ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ImageFrame({ section }: { section: SponsorSection }) {
  if (!section.imagePath) return null;

  return (
    <figure className="sponsor-image-frame">
      <img
        src={getPublicAssetPath(section.imagePath)}
        alt={section.imageAlt ?? ""}
        loading="lazy"
        data-image-fit={
          section.id === "premium-placements" ? "contain" : "cover"
        }
      />
    </figure>
  );
}

function CardGrid({
  cards,
  columns = "two",
  showStepNumbers = false,
}: {
  cards?: SponsorFeatureCard[];
  columns?: "two" | "three" | "four";
  showStepNumbers?: boolean;
}) {
  if (!cards?.length) return null;

  return (
    <div className={`sponsor-card-grid sponsor-card-grid-${columns}`}>
      {cards.map((card, index) => (
        <article className="sponsor-card" key={card.title}>
          <span className="sponsor-card-band" aria-hidden="true" />
          {getCardIcon(card.icon) && (
            <SponsorIcon
              name={getCardIcon(card.icon)!}
              className="sponsor-card-icon"
            />
          )}
          {card.stat && (
            <strong className="sponsor-card-stat">{card.stat}</strong>
          )}
          <h3>{card.title}</h3>
          {card.body && <p>{card.body}</p>}
          <BulletList items={card.bullets} />
          {showStepNumbers && (
            <span className="sponsor-step-number" aria-hidden="true">
              {index + 1}
            </span>
          )}
        </article>
      ))}
    </div>
  );
}

function ScopeSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-scope-layout">
      <article className="sponsor-open-copy sponsor-highlight-copy">
        <SponsorIcon name="star" className="sponsor-large-icon" />
        <h3>{section.leftTitle}</h3>
        <BulletList items={section.bullets} className="sponsor-check-list" />
      </article>
      <article className="sponsor-open-copy">
        <div className="sponsor-subhead-row">
          <SponsorIcon name="users" className="sponsor-large-icon" />
          <h3>{section.rightTitle}</h3>
        </div>
        <div className="sponsor-audience-grid">
          {section.audienceCards?.map((card) => (
            <article
              className="sponsor-card sponsor-audience-card"
              key={card.title}
            >
              <span className="sponsor-card-band" aria-hidden="true" />
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </article>
    </div>
  );
}

function ImageTextSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout">
      <article className="sponsor-open-copy">
        <h3>{section.leftTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <BulletList items={section.bullets} className="sponsor-icon-list" />
      </article>
      <ImageFrame section={section} />
    </div>
  );
}

function RetailSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-retail-layout">
      <ImageFrame section={section} />
      <article className="sponsor-open-copy">
        <h3>{section.rightTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <CardGrid cards={section.cards} columns="two" />
      </article>
    </div>
  );
}

function ImageListSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-media-layout">
      <article className="sponsor-open-copy">
        <h3>{section.leftTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <BulletList items={section.bullets} className="sponsor-plain-list" />
      </article>
      <ImageFrame section={section} />
    </div>
  );
}

function CardImageSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-card-image-layout">
      <CardGrid cards={section.cards} columns="two" />
      <ImageFrame section={section} />
    </div>
  );
}

function BenefitsSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-benefit-grid">
      {section.benefits?.map((benefit) => (
        <div className="sponsor-benefit-item" key={benefit}>
          <span className="sponsor-benefit-check" aria-hidden="true" />
          <p>{benefit}</p>
        </div>
      ))}
    </div>
  );
}

function renderSectionBody(section: SponsorSection) {
  switch (section.variant) {
    case "scope":
      return <ScopeSection section={section} />;
    case "imageText":
      return <ImageTextSection section={section} />;
    case "twoCards":
      return <CardGrid cards={section.cards} columns="two" />;
    case "retail":
      return <RetailSection section={section} />;
    case "stats":
      return <CardGrid cards={section.cards} columns="four" />;
    case "imageList":
      return <ImageListSection section={section} />;
    case "cardImage":
      return <CardImageSection section={section} />;
    case "threeCards":
      return <CardGrid cards={section.cards} columns="three" />;
    case "steps":
      return <CardGrid cards={section.cards} columns="three" showStepNumbers />;
    case "benefits":
      return <BenefitsSection section={section} />;
    default:
      return null;
  }
}

export function SponsorPage({ content }: SponsorPageProps) {
  return (
    <main className="sponsor-page">
      {content.sections.map((section, index) => (
        <section
          id={section.id}
          className={`sponsor-section sponsor-theme-${section.tone} sponsor-section-${section.variant}`}
          key={section.id}
        >
          <SectionHeader section={section} isPageTitle={index === 0} />
          {renderSectionBody(section)}
        </section>
      ))}
    </main>
  );
}
