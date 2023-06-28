import { DocsThemeConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";
import { Logo } from "./components/Logo";

const config: DocsThemeConfig = {
  logo: (
    // wrapper needed so it looks vertically centered in header
    <div style={{ marginBottom: -9 }}>
      <Logo />
    </div>
  ),
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
