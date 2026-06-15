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

const legacyProfileStorageKey = 'mstarAccountProfile';

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

let mockProfile: AccountProfile = {
  email: '',
  shipping: fallbackAddress,
  billing: fallbackAddress,
};

export function getStoredAccountProfile(): AccountProfile {
  localStorage.removeItem(legacyProfileStorageKey);
  return mockProfile;
}

export function saveAccountProfile(profile: AccountProfile) {
  mockProfile = profile;
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
