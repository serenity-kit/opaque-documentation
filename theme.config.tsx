import { DocsThemeConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";

const config: DocsThemeConfig = {
  logo: <span>Opaque</span>,
  project: {
    link: "https://github.com/serenity-kit/opaque",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/serenity-kit/opaque-documentation",
  footer: {
    text: "Opaque",
  },
  primaryHue: 232,
  components: {
    // https://mdxjs.com/table-of-components/
    pre: Pre,
  },
};

export default config;
