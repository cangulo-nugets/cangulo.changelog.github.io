/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'idea',
    'implementation',
    'register-the-requires-services',
    {
      type: 'category',
      label: 'How to use it?',
      items: [
        '4a-how-to-update-the-changelog',
        '4b-how-to-create-release-notes'
      ]
    }
  ],
};

module.exports = sidebars;
