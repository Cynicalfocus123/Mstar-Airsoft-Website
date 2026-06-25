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

function renderStepIcon(stepId: string) {
  switch (stepId) {
    case 'complete-registration':
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M22 12h20" />
          <path d="M24 10h16l2 6H22z" />
          <path d="M18 16h28v38H18z" />
          <path d="M25 28h14" />
          <path d="M25 36h14" />
          <path d="M25 44h9" />
        </svg>
      );
    case 'sign-waiver':
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M18 10h22l8 8v36H18z" />
          <path d="M40 10v10h8" />
          <path d="M24 42c5-8 9-8 12 0 2 5 5 5 10-1" />
          <path d="M24 50h16" />
        </svg>
      );
    case 'make-payment':
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M14 20h36a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4z" />
          <path d="M10 29h44" />
          <path d="M18 40h12" />
          <path d="M40 40h6" />
        </svg>
      );
    case 'receive-confirmation':
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M10 20h44v30H10z" />
          <path d="m10 22 22 17 22-17" />
          <path d="m10 50 16-15" />
          <path d="m54 50-16-15" />
        </svg>
      );
    case 'bring-documents':
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M10 22h17l5 6h22v24H10z" />
          <path d="M14 16h16l5 6h15" />
          <path d="M21 37h22" />
          <path d="M21 45h15" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M18 12h28v40H18z" />
          <path d="M25 26h14" />
          <path d="M25 36h14" />
        </svg>
      );
  }
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
                  <span>{renderStepIcon(step.id)}</span>
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
          <article className="ticket-form-card" id={section.id} key={section.id}>
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
