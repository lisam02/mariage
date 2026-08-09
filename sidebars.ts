import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'programme',
    'lieu',
    'transport',
    'hebergement',
    'infos',
    'cagnotte',
     {
      type: 'link',
      label: 'Votre réponse',
      href: '/rsvp',
    },
  ],
};

export default sidebars;