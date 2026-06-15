import { useState, type FormEvent } from 'react';
import type { EventCard } from '../types/siteContent';
import {
  type AccountAddress,
  accountAddressFromForm,
  getStoredAccountProfile,
  saveAccountProfile,
} from '../utils/accountProfile';
import { getCleanFormData } from '../utils/formSecurity';
import { getPublicAssetPath } from '../utils/publicAssetPath';

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

interface SummaryRowProps {
  label: string;
  value: string;
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

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="checkout-summary-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function AddressSection({ title, address, isEditing, onEdit, onSave }: AddressSectionProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(accountAddressFromForm(getCleanFormData(event.currentTarget)));
  }

  return (
    <section className="checkout-line-section">
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
                type={field.id === 'phone' ? 'tel' : 'text'}
                inputMode={field.id === 'phone' ? 'tel' : undefined}
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

  const customerEmail = profile.email || 'customer@mstarairsoft.example';

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
        <div className="checkout-layout">
          <div className="checkout-main">
            {!isAuthenticated && (
              <section className="checkout-line-section checkout-auth-strip">
                <div className="checkout-section-header">
                  <div>
                    <h2>Sign in to finish registration</h2>
                    <p>Create an account or log in, then your event checkout will continue here.</p>
                  </div>
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

            {isAuthenticated && (
              <section className="checkout-line-section">
                <div className="checkout-section-header">
                  <h2>Customer</h2>
                  <button className="checkout-edit" type="button" onClick={() => { window.location.hash = '#/account'; }}>
                    Edit
                  </button>
                </div>
                <div className="checkout-customer-email">{customerEmail}</div>
              </section>
            )}

            {isAuthenticated && (
              <AddressSection
                title="Shipping"
                address={profile.shipping}
                isEditing={editingSection === 'shipping'}
                onEdit={() => setEditingSection('shipping')}
                onSave={(address) => saveAddress('shipping', address)}
              />
            )}

            {isAuthenticated && (
              <AddressSection
                title="Billing"
                address={profile.billing}
                isEditing={editingSection === 'billing'}
                onEdit={() => setEditingSection('billing')}
                onSave={(address) => saveAddress('billing', address)}
              />
            )}

            {isAuthenticated && (
              <section className="checkout-line-section">
                <div className="checkout-section-header">
                  <h2>Payment</h2>
                  <div className="card-brands" aria-label="Accepted cards">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Amex</span>
                    <span>Discover</span>
                  </div>
                </div>
                <p className="checkout-payment-label">Secure payment is not connected on this static preview. No card details are collected here.</p>
                <div className="payment-form">
                  <button className="btn btn-gold checkout-save" type="button" disabled>
                    Complete Registration
                  </button>
                </div>
              </section>
            )}
          </div>

          <aside className="checkout-sidebar">
            <section className="checkout-summary">
              <div className="checkout-summary-header">
                <h2>Order Summary</h2>
                <a className="checkout-summary-link" href={`#/events/${event.id}`}>
                  Edit Cart
                </a>
              </div>

              <div className="checkout-summary-item">
                <img src={getPublicAssetPath(event.imagePath)} alt="" />
                <div className="checkout-summary-copy">
                  <div className="checkout-summary-title-row">
                    <h3>{event.title}</h3>
                    <strong>{event.entryFee}</strong>
                  </div>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                  {event.attendance && <p>Attendance: {event.attendance}</p>}
                  <span>{event.status}</span>
                </div>
              </div>

              <dl className="checkout-summary-totals">
                <SummaryRow label="Registration" value={event.entryFee} />
                <SummaryRow label="Processing" value="Free" />
                <SummaryRow label="Total" value={event.entryFee} />
              </dl>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
