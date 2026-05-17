import { useState, type FormEvent } from 'react';
import type { CountryRegion, CreateAccountContent } from '../types/siteContent';
import { getCleanFormData } from '../utils/formSecurity';

interface AccountSettingsPageProps {
  content: CreateAccountContent;
  countryRegions: CountryRegion[];
}

const editableFields = new Set(['email', 'address1', 'city', 'stateProvince', 'zip', 'country', 'phone']);

export function AccountSettingsPage({ content, countryRegions }: AccountSettingsPageProps) {
  const [country, setCountry] = useState(countryRegions.find((item) => item.country === 'Thailand')?.country ?? countryRegions[0]?.country ?? '');
  const regions = countryRegions.find((item) => item.country === country)?.regions ?? [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info('Account settings payload ready for future API integration:', getCleanFormData(event.currentTarget));
  }

  return (
    <main className="auth-page">
      <section className="auth-panel create-account-panel">
        <p className="eyebrow">My Account</p>
        <h1>Account Settings</h1>
        <form className="account-form" onSubmit={handleSubmit}>
          {content.fields.filter((field) => editableFields.has(field.id)).map((field) => {
            if (field.id === 'country') {
              return (
                <label className="field" key={field.id}>
                  <span>{field.label}</span>
                  <select name={field.id} value={country} required={field.required} autoComplete="country-name" onChange={(event) => setCountry(event.target.value)}>
                    {countryRegions.map((item) => (
                      <option key={item.country} value={item.country}>
                        {item.country}
                      </option>
                    ))}
                  </select>
                </label>
              );
            }

            if (field.id === 'stateProvince') {
              return (
                <label className="field" key={field.id}>
                  <span>{field.label}</span>
                  {regions.length > 0 ? (
                    <select name={field.id} required={field.required} autoComplete="address-level1">
                      {regions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input name={field.id} type="text" placeholder="Region, province, or area" required={field.required} autoComplete="address-level1" maxLength={120} />
                  )}
                </label>
              );
            }

            return (
              <label className="field" key={field.id}>
                <span>{field.label}</span>
                <input name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} maxLength={180} />
              </label>
            );
          })}
          <button className="btn btn-gold form-submit" type="submit">
            Save Account Settings
          </button>
        </form>
        <section className="orders-panel" id="orders" aria-label="Orders">
          <h2>Orders</h2>
          <p>Your future event registrations and orders will appear here once backend order history is connected.</p>
        </section>
      </section>
    </main>
  );
}
