import { cleanFormValue } from './formSecurity';

export interface AccountAddress {
  fullName: string;
  phone: string;
  address1: string;
  city: string;
  stateProvince: string;
  zip: string;
  country: string;
}

export interface AccountProfile {
  email: string;
  shipping: AccountAddress;
  billing: AccountAddress;
}

const profileStorageKey = 'mstarAccountProfile';

export const emptyAddress: AccountAddress = {
  fullName: '',
  phone: '',
  address1: '',
  city: '',
  stateProvince: '',
  zip: '',
  country: '',
};

const fallbackAddress: AccountAddress = {
  fullName: 'Mstar Player',
  phone: '+66 00 000 0000',
  address1: 'Saved address pending',
  city: 'Bangkok',
  stateProvince: 'Bangkok',
  zip: '00000',
  country: 'Thailand',
};

export function getStoredAccountProfile(): AccountProfile {
  const savedProfile = localStorage.getItem(profileStorageKey);

  if (savedProfile) {
    try {
      const parsedProfile = JSON.parse(savedProfile) as Partial<AccountProfile>;
      return {
        email: parsedProfile.email ?? '',
        shipping: { ...fallbackAddress, ...parsedProfile.shipping },
        billing: { ...fallbackAddress, ...parsedProfile.billing },
      };
    } catch {
      localStorage.removeItem(profileStorageKey);
    }
  }

  return {
    email: '',
    shipping: fallbackAddress,
    billing: fallbackAddress,
  };
}

export function saveAccountProfile(profile: AccountProfile) {
  localStorage.setItem(profileStorageKey, JSON.stringify(profile));
}

export function accountAddressFromForm(formData: Record<string, FormDataEntryValue>): AccountAddress {
  const firstName = cleanFormValue(formData.firstName ?? '');
  const lastName = cleanFormValue(formData.lastName ?? '');
  const fullName = cleanFormValue(formData.fullName ?? `${firstName} ${lastName}`);

  return {
    fullName: fullName || fallbackAddress.fullName,
    phone: cleanFormValue(formData.phone ?? ''),
    address1: cleanFormValue(formData.address1 ?? ''),
    city: cleanFormValue(formData.city ?? ''),
    stateProvince: cleanFormValue(formData.stateProvince ?? ''),
    zip: cleanFormValue(formData.zip ?? ''),
    country: cleanFormValue(formData.country ?? ''),
  };
}
