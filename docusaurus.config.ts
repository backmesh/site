import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Backmesh",
  // open source Firebase for LLM APIs
  // control panel for AI Apps
  // open source Firebase for LLM APIs
  tagline: "Firebase for LLM APIs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://backmesh.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "backmesh", // Usually your GitHub org/user name.
  projectName: "backmesh", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          exclude: [],
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          exclude: ['unlisted/*'],
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_OePPf9AzyvZDpCBgBD8iviy2Ux4ZaWwQ9S50DbfhFqo",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "https://forms.gle/DyceYMGhUesCJCEJ8", // The destination URL
            from: ["/updates"], // The source URL(s)
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // announcementBar: {
    //   id: "product-hunt-banner", // Any value that will identify this message.
    //   content:
    //     'We are live on Product Hunt! 🎉 Check us out and support us <a target="_blank" rel="noopener noreferrer" href="https://www.producthunt.com/posts/backmesh">here</a>!',
    //   backgroundColor: "#DA552F", // Product Hunt's brand color.
    //   textColor: "#ffffff", // White text color for contrast.
    //   isCloseable: true, // Defaults to `true`.
    // },
    navbar: {
      title: "Backmesh",
      logo: {
        alt: "Backmesh Logo",
        src: "img/logo.png",
        style: { padding: "4px" },
      },
      items: [
        {
          to: process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://app.backmesh.com",
          position: "left",
          label: "Dashboard",
        },
        {
          to: "/pricing",
          position: "left",
          label: "Pricing",
        },
        {
          to: "docs",
          position: "left",
          label: "Docs",
        },
        {
          to: "blog",
          position: "left",
          label: "Blog",
        },
        {
          href: "https://discord.backmesh.com",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Community",
        },
        {
          href: "https://github.com/backmesh",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["dart"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
