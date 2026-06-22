import type { CSSProperties } from 'react';
import type { TicketPageContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeGoogleFormUrl } from '../utils/safeUrl';

interface TicketRegistrationGuideProps {
  content: TicketPageContent['registrationGuide'];
}

type RegisterSectionStyle = CSSProperties & {
  '--register-bg-image'?: string;
};

function renderStepBody(body: string, highlight?: string) {
  if (!highlight || !body.includes(highlight)) return body;

  const [before, after] = body.split(highlight);
  return (
    <>
      {before}
      <strong>{highlight}</strong>
      {after}
    </>
  );
}

export function TicketRegistrationGuide({ content }: TicketRegistrationGuideProps) {
  const backgroundImage = getPublicAssetPath(content.backgroundImagePath);
  const sectionStyle: RegisterSectionStyle = backgroundImage
    ? { '--register-bg-image': `url("${backgroundImage}")` }
    : {};

  return (
    <>
      <section className="register-steps-section" style={sectionStyle} aria-labelledby="ticket-register-title">
        <div className="register-bg-overlay" aria-hidden="true" />
        <div className="register-inner">
          <div className="register-header">
            <h2 id="ticket-register-title">{content.title}</h2>
            <div className="register-subtitle">
              <span className="subtitle-line" />
              <span>{content.subtitle}</span>
              <span className="subtitle-line" />
            </div>
          </div>
          <div className="register-steps-grid">
            {content.steps.map((step, index) => (
              <article className="register-step-card" key={step.id}>
                <div className="corner-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="step-icon" aria-hidden="true">
                  <span>{step.iconLabel}</span>
                </div>
                <h3>{step.eyebrow}</h3>
                <h4>{step.title}</h4>
                <div className="step-divider" />
                <p>{renderStepBody(step.body, step.highlight)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ticket-form-guide" aria-label="Ticket registration forms">
        {content.formSections.map((section) => (
          <article className="ticket-form-card" key={section.id}>
            <div>
              <p className="eyebrow">Required Forms</p>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="ticket-form-actions">
              {section.links.map((link) => {
                const safeUrl = getSafeGoogleFormUrl(link.href);

                return safeUrl ? (
                  <a className="btn btn-gold ticket-form-button" href={safeUrl} target="_blank" rel="noopener noreferrer" key={link.label}>
                    {link.label}
                  </a>
                ) : (
                  <button className="btn ticket-form-button ticket-form-button-disabled" type="button" disabled key={link.label}>
                    {link.pendingLabel ?? `${link.label} - Link Pending`}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
