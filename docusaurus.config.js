// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {
  addJsxCode,
  alignTableCenter } = require('@cangulo-blog/components/dist/remark-plugins');

const commonImports = [
  'import { CaptionDocusaurus, ShareDocusaurus } from \'@cangulo-blog/components\''
]


const jsxElementsEnding = [

]
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Angulo',
  url: 'https://cangulo-nugets.github.io',
  baseUrl: '/cangulo.changelog.github.io/',
  organizationName: 'cangulo',
  projectName: 'cangulo.changelog.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  customFields: {
    rawGitUrl: 'https://raw.githubusercontent.com/cangulo-nugets/cangulo.changelog.github.io/main/blog/'
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [
            require.resolve('@cangulo-blog/components/dist/css/blog-styles.css'),
            require.resolve('./src/css/custom.css')
          ],
        },
        docs: {
          id: 'docs',
          path: 'docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // editUrl: ({ versionDocsDirPath, docPath }) =>
          //   `https://github.com/cangulo-nugets/cangulo.changelog.github.io/blob/${versionDocsDirPath}/${docPath}`,
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          beforeDefaultRemarkPlugins: [
            alignTableCenter,
            [
              addJsxCode, {
                importStatement: commonImports,
                position: 'start'
              }
            ]],
          remarkPlugins: [
            require('mdx-mermaid'),
            require('remark-code-import'),
            [
              addJsxCode, {
                jsx: jsxElementsEnding
              }
            ]
          ]
        },
        blog: false,
        pages: {
          beforeDefaultRemarkPlugins: [
            alignTableCenter,
            [
              addJsxCode, {
                importStatement: commonImports,
                position: 'start'
              }
            ]],
          remarkPlugins: [
            require('mdx-mermaid'),
            require('remark-code-import'),
            [
              addJsxCode, {
                jsx: jsxElementsEnding
              }
            ]
          ]
        }
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Home',
        items: [
          { to: '/docs', label: 'Docs', position: 'left' },
          { to: 'https://cangulo.github.io/about', label: 'Author', position: 'left' },
          {
            href: 'https://github.com/cangulo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { items: [{ label: 'Home', to: '/' }], },
          {
            items: [
              { label: 'Docs', to: '/docs' },
            ],
          },
          {
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angulomascarell/' },
              { label: 'Twitter', href: 'https://twitter.com/angulomascarell' },
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp']
      },
    }),
};

module.exports = config;
