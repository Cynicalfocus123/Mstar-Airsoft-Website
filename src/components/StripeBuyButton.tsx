import { createElement } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  className?: string;
  publishableKey: string;
}

export function StripeBuyButton({ buyButtonId, className, publishableKey }: StripeBuyButtonProps) {
  const wrapperClassName = ['stripe-buy-button-wrap', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassName}>
      {createElement('stripe-buy-button', {
        'buy-button-id': buyButtonId,
        'publishable-key': publishableKey,
      })}
    </div>
  );
}
