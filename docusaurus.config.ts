import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Backmesh",
  tagline:
    "Keep all your code in Flutter. Securely call private key APIs without a backend.",
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
        blog: false,
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
            from: ["/newsletter"], // The source URL(s)
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
          position: "right",
          label: "Docs",
        },
        {
          to: "https://forms.gle/DyceYMGhUesCJCEJ8",
          position: "right",
          label: "Newsletter",
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
