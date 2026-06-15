import { useState, type FormEvent } from 'react';
import type { CountryRegion, CreateAccountContent } from '../types/siteContent';
import { getCleanFormData } from '../utils/formSecurity';
import { accountAddressFromForm, saveAccountProfile } from '../utils/accountProfile';

interface CreateAccountPageProps {
  content: CreateAccountContent;
  countryRegions: CountryRegion[];
  onSuccess: () => void;
}

export function CreateAccountPage({ content, countryRegions, onSuccess }: CreateAccountPageProps) {
  const [country, setCountry] = useState(countryRegions[0]?.country ?? '');
  const regions = countryRegions.find((item) => item.country === country)?.regions ?? [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formPayload = getCleanFormData(event.currentTarget);
    const address = accountAddressFromForm(formPayload);
    saveAccountProfile({
      email: String(formPayload.email ?? ''),
      shipping: address,
      billing: address,
    });
    onSuccess();
  }

  return (
    <main className="auth-page">
      <section className="auth-panel create-account-panel">
        <h1>{content.title}</h1>
        <form className="account-form" onSubmit={handleSubmit}>
          {content.fields.map((field) => {
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
                <input name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} maxLength={field.type === 'password' ? 128 : 180} inputMode={field.type === 'tel' ? 'tel' : undefined} autoComplete={field.id === 'email' ? 'email' : field.id === 'password' ? 'new-password' : field.id === 'firstName' ? 'given-name' : field.id === 'lastName' ? 'family-name' : field.id === 'phone' ? 'tel' : field.id === 'address1' ? 'street-address' : field.id === 'city' ? 'address-level2' : field.id === 'zip' ? 'postal-code' : 'off'} />
              </label>
            );
          })}
          <label className="captcha-check">
            <input name="notRobot" type="checkbox" required />
            <span>I'm not a robot</span>
          </label>
          <button className="btn btn-gold form-submit" type="submit">
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}
