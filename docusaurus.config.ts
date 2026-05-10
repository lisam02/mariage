import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lisa-Marie & Thomas',
  tagline: '22 mai 2027',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lisam02.github.io',
  baseUrl: '/mariage/',

  organizationName: 'lisam02',
  projectName: 'mariage',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Lisa-Marie & Thomas',
      logo: {
        alt: 'Logo olivier',
        src: 'img/olivier.png',
      },
      items: [
        {to: '/', label: 'Accueil', position: 'left'},
        {to: '/docs/programme', label: 'Programme', position: 'left'},
        {to: '/docs/lieu', label: 'Lieu', position: 'left'},
        {to: '/docs/hebergement', label: 'Hébergement', position: 'left'},
        {to: '/docs/transport', label: 'Transport', position: 'left'},
        {to: '/docs/faq', label: 'FAQ', position: 'left'},
        {to: '/rsvp', label: 'RSVP', position: 'right'},
      ],
    },

    footer: {
      style: 'light',
      copyright: `Lisa-Marie & Thomas — 22 mai 2027`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;