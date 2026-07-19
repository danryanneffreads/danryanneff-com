export const SITE_NAME = 'DanRyanNeff.com';
export const SITE_URL = 'https://danryanneff.com';

export const DEFAULT_DESCRIPTION =
  'Good judgment, clear thinking, digital fluency, and practical support for people working through real situations.';

export const OG_IMAGE = 'https://danryanneff.com/images/og-preview.png';

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Work With Me', href: '/work-with-me/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
];

export const seoMetadata = {
  '/': {
    title: 'DanRyanNeff.com - Dan Ryan Neff',
    description: DEFAULT_DESCRIPTION,
    ogImage: OG_IMAGE,
  },
  '/about/': {
    title: 'About Dan Ryan Neff - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/work-with-me/': {
    title: 'Work With Dan Ryan Neff - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/projects/': {
    title: 'Projects - DanRyanNeff.com',
    description: 'Digital projects by Dan Ryan Neff, including Mandalafy, LandingBio, Systems Atlas, and ImagineThis.Site.',
  },
  '/contact/': {
    title: 'Contact - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
  '/mandalafy/': {
    title: 'Mandalafy - DanRyanNeff.com',
    description: 'A digital playground for creating your own mandalas.',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy - DanRyanNeff.com',
    description: DEFAULT_DESCRIPTION,
  },
};