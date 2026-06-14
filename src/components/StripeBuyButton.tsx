import { createElement } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
  className?: string;
}

export function StripeBuyButton({ buyButtonId, publishableKey, className }: StripeBuyButtonProps) {
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
