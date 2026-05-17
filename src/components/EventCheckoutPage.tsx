import { useState, type FormEvent } from 'react';
import type { EventCard } from '../types/siteContent';
import {
  type AccountAddress,
  accountAddressFromForm,
  getStoredAccountProfile,
  saveAccountProfile,
} from '../utils/accountProfile';
import { getCleanFormData } from '../utils/formSecurity';

interface EventCheckoutPageProps {
  event?: EventCard;
  isAuthenticated: boolean;
}

interface AddressSectionProps {
  title: string;
  address: AccountAddress;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (address: AccountAddress) => void;
}

const addressFields = [
  { id: 'fullName', label: 'Full name', autoComplete: 'name' },
  { id: 'phone', label: 'Phone number', autoComplete: 'tel' },
  { id: 'address1', label: 'Address', autoComplete: 'street-address' },
  { id: 'city', label: 'City/suburb', autoComplete: 'address-level2' },
  { id: 'stateProvince', label: 'State/province', autoComplete: 'address-level1' },
  { id: 'zip', label: 'Zip/postcode', autoComplete: 'postal-code' },
  { id: 'country', label: 'Country', autoComplete: 'country-name' },
] as const;

function AddressSection({ title, address, isEditing, onEdit, onSave }: AddressSectionProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(accountAddressFromForm(getCleanFormData(event.currentTarget)));
  }

  return (
    <section className="checkout-section">
      <div className="checkout-section-header">
        <h2>{title}</h2>
        {!isEditing && (
          <button className="checkout-edit" type="button" onClick={onEdit}>
            EDIT
          </button>
        )}
      </div>
      {isEditing ? (
        <form className="checkout-address-form" onSubmit={handleSubmit}>
          {addressFields.map((field) => (
            <label className="checkout-field" key={field.id}>
              <span>{field.label}</span>
              <input
                name={field.id}
                type="text"
                defaultValue={address[field.id]}
                autoComplete={field.autoComplete}
                required
                maxLength={180}
              />
            </label>
          ))}
          <button className="btn btn-gold checkout-save" type="submit">
            Save {title}
          </button>
        </form>
      ) : (
        <div className="checkout-address-display">
          <strong>{address.fullName}</strong>
          <span>{address.phone}</span>
          <span>{address.address1}</span>
          <span>
            {address.city}, {address.stateProvince} {address.zip}
          </span>
          <span>{address.country}</span>
        </div>
      )}
    </section>
  );
}

export function EventCheckoutPage({ event, isAuthenticated }: EventCheckoutPageProps) {
  const [profile, setProfile] = useState(getStoredAccountProfile);
  const [editingSection, setEditingSection] = useState<'shipping' | 'billing' | null>(null);

  function saveAddress(section: 'shipping' | 'billing', address: AccountAddress) {
    const nextProfile = { ...profile, [section]: address };
    setProfile(nextProfile);
    saveAccountProfile(nextProfile);
    setEditingSection(null);
  }

  if (!event) {
    return (
      <main className="page-shell checkout-page-shell">
        <section className="checkout-page">
          <p className="eyebrow">Cart</p>
          <h1>Event Not Found</h1>
          <p>This checkout cannot load because the selected event is not available.</p>
          <a className="btn btn-gold" href="#/events">
            View Events
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell checkout-page-shell">
      <section className="checkout-page">
        <div className="checkout-title-row">
          <div>
            <p className="checkout-kicker">Cart / Checkout</p>
            <h1>Event Registration</h1>
          </div>
          <a className="checkout-back-link" href={`#/events/${event.id}`}>
            Back to event
          </a>
        </div>

        {!isAuthenticated && (
          <section className="checkout-auth-callout">
            <div>
              <h2>Sign in to finish registration</h2>
              <p>Create an account or log in, then your event checkout will continue here.</p>
            </div>
            <div className="checkout-auth-actions">
              <a
                className="btn btn-secondary"
                href="#/signin"
                onClick={() => sessionStorage.setItem('mstarAuthReturnTo', `#/checkout/${event.id}`)}
              >
                Login
              </a>
              <a
                className="btn btn-gold"
                href="#/signup"
                onClick={() => sessionStorage.setItem('mstarAuthReturnTo', `#/checkout/${event.id}`)}
              >
                Register
              </a>
            </div>
          </section>
        )}

        <section className="checkout-event-card">
          <img src={event.imagePath} alt="" />
          <div>
            <span>{event.status}</span>
            <h2>{event.title}</h2>
            <dl>
              <div>
                <dt>Date</dt>
                <dd>{event.date}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{event.location}</dd>
              </div>
              <div>
                <dt>Entry fee</dt>
                <dd>{event.entryFee}</dd>
              </div>
              {event.attendance && (
                <div>
                  <dt>Attendance</dt>
                  <dd>{event.attendance}</dd>
                </div>
              )}
            </dl>
          </div>
        </section>

        {isAuthenticated && (
          <div className="checkout-body">
            <AddressSection
              title="Shipping"
              address={profile.shipping}
              isEditing={editingSection === 'shipping'}
              onEdit={() => setEditingSection('shipping')}
              onSave={(address) => saveAddress('shipping', address)}
            />
            <AddressSection
              title="Billing"
              address={profile.billing}
              isEditing={editingSection === 'billing'}
              onEdit={() => setEditingSection('billing')}
              onSave={(address) => saveAddress('billing', address)}
            />
            <section className="checkout-section">
              <div className="checkout-section-header">
                <h2>Payment</h2>
                <div className="card-brands" aria-label="Accepted cards">
                  <span>Visa</span>
                  <span>Mastercard</span>
                  <span>Amex</span>
                  <span>Discover</span>
                </div>
              </div>
              <form className="payment-form">
                <label className="checkout-field checkout-field-wide">
                  <span>Credit Card Number</span>
                  <input name="cardNumber" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="0000 0000 0000 0000" maxLength={23} />
                </label>
                <label className="checkout-field">
                  <span>Name on Card</span>
                  <input name="cardName" type="text" autoComplete="cc-name" placeholder="Name on card" maxLength={180} />
                </label>
                <label className="checkout-field">
                  <span>Expiration date</span>
                  <input name="cardExpiry" type="text" inputMode="numeric" autoComplete="cc-exp" placeholder="MM / YY" maxLength={7} />
                </label>
                <label className="checkout-field">
                  <span>CVV</span>
                  <input name="cardCvv" type="text" inputMode="numeric" autoComplete="cc-csc" placeholder="CVV" maxLength={4} />
                </label>
                <button className="btn btn-gold checkout-save" type="button">
                  Complete Registration
                </button>
              </form>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
