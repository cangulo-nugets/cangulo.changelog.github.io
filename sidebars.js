/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'idea',
    'implementation',
    'register-the-services',
    {
      type: 'category',
      label: 'How to use it?',
      items: [
        '4a-how-to-update-the-changelog',
        '4b-how-to-create-release-notes'
      ]
    },
    'show-cases'
  ],
};

module.exports = sidebars;
