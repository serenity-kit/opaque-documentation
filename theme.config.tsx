import { DocsThemeConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";
import { Logo } from "./components/Logo";
import { Code } from "./components/Code";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      <link rel="icon" href="/favicon.png" type="image/png"></link>
    </>
  ),
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
    code: Code,
    p: (props) => <p className="mt-5 leading-6 first:mt-0" {...props} />,
  },
};

export default config;
