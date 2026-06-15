export type JsonLdSchema = Record<string, unknown> | Array<Record<string, unknown>>;

export interface SeoEntry {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article';
  twitterCard: 'summary' | 'summary_large_image';
  schema: JsonLdSchema;
}
