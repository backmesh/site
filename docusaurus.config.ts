import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Backmesh",
  tagline: "Securely call private key APIs from Flutter apps without a backend",
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
          exclude: ["quickstart.md"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
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
        style: { padding: "4px" }, // Added padding to the logo
      },
      items: [
        {
          to: "docs",
          position: "right",
          label: "Docs",
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
