export const SITE_NAME = 'DanRyanNeff.com';
export const SITE_URL = 'https://danryanneff.com';
export const DEFAULT_DESCRIPTION =
  'Conversations and clarity sessions that help thoughtful people move meaningful work forward with stronger structure and connection.';
export const OG_IMAGE = 'https://danryanneff.com/images/og-preview.png';

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Work With Me', href: '/work-with-me/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerLinks = [
  { label: 'Projects', href: '/mandalafy/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
];

export const seoMetadata = {
  '/': {
    title: 'DanRyanNeff.com - Dan Ryan Neff personal brand website',
    description: DEFAULT_DESCRIPTION,
    ogImage: OG_IMAGE,
  },
  '/about/': {
    title: 'Dan Ryan Neff | Clarity and Structure Partner - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/work-with-me/': {
    title: 'Work With Dan Ryan Neff | Clarity and Structure - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/contact/': {
    title: 'Contact - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/mandalafy/': {
    title: 'Mandalafy — Interactive Mandala Tool - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/privacy-policy/': {
    title: 'Privacy Policy - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
};
