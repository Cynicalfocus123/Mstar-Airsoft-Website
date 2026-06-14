import { createElement } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

export function StripeBuyButton({ buyButtonId, publishableKey }: StripeBuyButtonProps) {
  return (
    <div className="stripe-buy-button-wrap">
      {createElement('stripe-buy-button', {
        'buy-button-id': buyButtonId,
        'publishable-key': publishableKey,
      })}
    </div>
  );
}
