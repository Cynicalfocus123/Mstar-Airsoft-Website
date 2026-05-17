import type { FormEvent } from 'react';
import type { SignInContent } from '../types/siteContent';
import { getCleanFormData } from '../utils/formSecurity';

interface SignInPageProps {
  content: SignInContent;
  onSuccess: () => void;
}

export function SignInPage({ content, onSuccess }: SignInPageProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info('Sign in payload ready for future API integration:', getCleanFormData(event.currentTarget));
    onSuccess();
  }

  return (
    <main className="auth-page">
      <section className="auth-layout">
        <div className="auth-panel auth-form-panel">
          <h1>{content.title}</h1>
          <form onSubmit={handleSubmit}>
            {content.fields.map((field) => (
              <label className="field" key={field.id}>
                <span>{field.label}</span>
                <input name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} maxLength={128} />
              </label>
            ))}
            <button className="btn btn-gold" type="submit">
              Sign In
            </button>
            <a className="forgot-link" href="#/signin">
              Forgot your password?
            </a>
          </form>
        </div>
        <aside className="auth-panel auth-new-customer">
          <h2>New Customer?</h2>
          <ul className="check-list">
            {content.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <a className="btn btn-secondary" href="#/signup">
            Create Account
          </a>
        </aside>
      </section>
    </main>
  );
}
