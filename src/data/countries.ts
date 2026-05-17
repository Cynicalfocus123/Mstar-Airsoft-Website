import { allCountries } from 'country-region-data';
import type { CountryRegion } from '../types/siteContent';

export const countryRegions: CountryRegion[] = allCountries
  .map(([country, , regions]) => ({
    country,
    regions: regions.map(([region]) => region).sort((a, b) => a.localeCompare(b)),
  }))
  .sort((a, b) => a.country.localeCompare(b.country));
