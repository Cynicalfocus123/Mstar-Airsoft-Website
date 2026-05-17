import type { FormEvent } from 'react';
import type { FormField } from '../types/siteContent';

interface RegistrationProps {
  fields: FormField[];
}

export function Registration({ fields }: RegistrationProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.info('Registration payload ready for future API integration:', Object.fromEntries(formData));
  }

  return (
    <section className="section registration section-anchor" id="registration">
      <div className="section-heading">
        <p className="eyebrow">Register Interest</p>
        <h2>Join Tournament</h2>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label className={field.type === 'textarea' ? 'field field-wide' : 'field'} key={field.id}>
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
              />
            ) : (
              <input
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                min={field.type === 'number' ? 1 : undefined}
              />
            )}
          </label>
        ))}
        <button className="btn btn-primary form-submit" type="submit">
          Submit Registration
        </button>
      </form>
    </section>
  );
}
