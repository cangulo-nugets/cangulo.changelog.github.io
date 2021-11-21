// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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


  plugins: [

    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'docs',
        path: 'docs',
        showLastUpdateTime: true,
        editUrl: ({ versionDocsDirPath, docPath }) =>
          `https://github.com/cangulo/cangulo.changelog.github.io/blob/${versionDocsDirPath}/${docPath}`,
        routeBasePath: '/docs',
        sidebarPath: require.resolve('./sidebars.js')
      })
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'posts',
        path: 'blog/posts',
        showReadingTime: true,
        authorsMapPath: '../authors.yml',
        blogTitle: 'cangulo.changelog Posts',
        blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
        editUrl: 'https://github.com/cangulo/cangulo.changelog.github.io/blob/main',
        feedOptions: {
          title: 'Carlos Angulo Posts',
          language: 'en',
          description: 'Here you can the general publications I do regarding different subjects as devops or programming 🙂'
        },
        remarkPlugins: [require('mdx-mermaid')]
      })
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Home',
        items: [
          { to: '/docs', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about', label: 'Author', position: 'left' },
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
              { label: 'Blog', to: '/blog' },
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
