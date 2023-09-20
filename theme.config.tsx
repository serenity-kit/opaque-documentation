import { DocsThemeConfig } from "nextra-theme-docs";
import { Code } from "./components/Code";
import { Logo } from "./components/Logo";
import { P } from "./components/P";
import { Pre } from "./components/Pre";
import { Table } from "./components/Table";
import { Th } from "./components/Th";
import { Tr } from "./components/Tr";
import { Td } from "./components/Td";
import { Footer } from "./components/Footer";

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
      <Logo hoverEffect />
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
    component: Footer,
  },
  primaryHue: 232,
  components: {
    // https://mdxjs.com/table-of-components/
    pre: Pre,
    code: Code,
    p: (props) => <P className="max-w-3xl nx-mt-5 first:nx-mt-0" {...props} />,
    table: Table,
    th: Th,
    tr: Tr,
    td: Td,
  },
};

export default config;
