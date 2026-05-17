import type { RuleItem } from '../types/siteContent';

interface RulesProps {
  rules: RuleItem[];
}

export function Rules({ rules }: RulesProps) {
  return (
    <section className="section section-anchor section-rib" id="rules">
      <div className="section-heading">
        <p className="eyebrow">Field Code</p>
        <h2>Rules And Safety</h2>
      </div>
      <div className="rule-list">
        {rules.map((rule) => (
          <article className="rule-item" key={rule.title}>
            <h3>{rule.title}</h3>
            <p>{rule.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
