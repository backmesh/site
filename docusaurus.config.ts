import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Backmesh",
  // open source Firebase for LLM APIs
  // control panel for AI Apps
  // open source Firebase for LLM APIs
  tagline: "Build in days, not weeks",
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
        apiKey: "phc_fZ3tyt5smshwvm17JYlrU8PbxUVlOoakvH2M5b6ktdO",
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
          to: "docs",
          position: "left",
          label: "Docs",
        },
        {
          to: "/pricing",
          position: "left",
          label: "Pricing",
        },
        {
          type: 'dropdown',
          label: 'Products',
          position: 'left',
          items: [
            {
              to: "/proxy",
              label: "JWT LLM Proxy",
            },
            {
              to: "/stripe",
              label: "Stripe Integration",
            },
          ],
        },
        {
          to: process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://app.backmesh.com",
          position: "right",
          label: "Dashboard",
          className: "navbar-button", // Add this line
        },
        {
          href: "https://discord.backmesh.com",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Community",
        },
        {
          href: "https://github.com/backmesh/backmesh",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'JWT LLM Proxy',
              to: '/proxy',
            },
            {
              label: 'Stripe Integration',
              to: '/stripe',
            },
            {
              label: 'Dashboard',
              to: process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://app.backmesh.com",
            },
            {
              label: 'Pricing',
              to: '/pricing',
            },
          ],
        },
        {
          title: 'Content',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Utils',
          items: [
            {
              label: 'Supabase JWT Generator',
              to: '/supabase-jwt',
            },
            {
              label: 'Firebase JWT Generator',
              to: '/firebase-jwt',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Questions?',
              href: 'https://tawk.to/chat/67b9b45a4db380190f4dfecd/1ikmmh09h',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/backmesh/backmesh',
            },
            {
              label: 'Discord',
              href: 'https://discord.backmesh.com',
            },
          ],
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
