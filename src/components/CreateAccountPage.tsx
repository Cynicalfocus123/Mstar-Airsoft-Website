import { useState, type FormEvent } from 'react';
import type { CountryRegion, CreateAccountContent } from '../types/siteContent';

interface CreateAccountPageProps {
  content: CreateAccountContent;
  countryRegions: CountryRegion[];
}

export function CreateAccountPage({ content, countryRegions }: CreateAccountPageProps) {
  const [country, setCountry] = useState(countryRegions[0]?.country ?? '');
  const regions = countryRegions.find((item) => item.country === country)?.regions ?? [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.info('Create account payload ready for future API integration:', Object.fromEntries(formData));
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
                  <select name={field.id} value={country} required={field.required} onChange={(event) => setCountry(event.target.value)}>
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
                  <select name={field.id} required={field.required}>
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </label>
              );
            }

            return (
              <label className="field" key={field.id}>
                <span>{field.label}</span>
                <input name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} />
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
