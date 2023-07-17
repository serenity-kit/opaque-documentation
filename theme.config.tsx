import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Code } from "./components/Code";
import { Logo } from "./components/Logo";
import { Pre } from "./components/Pre";

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
    text: () => {
      return (
        <div className="flex-1 justify-between text-sm">
          <div>
            <p>
              This project was supported by the{" "}
              <a href="https://www.netidee.at/">Netidee funding campaign</a>.
            </p>
            <a href="https://www.netidee.at/">
              <Image
                className="mt-2 rounded-md bg-white p-2"
                src="/netidee.jpg"
                alt="Netidee logo"
                width={125}
                height={38}
              />
            </a>
          </div>
          <div className="mt-4">
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              Licensed under CC BY-SA 4.0
            </a>
          </div>
        </div>
      );
    },
  },
  primaryHue: 232,
  components: {
    // https://mdxjs.com/table-of-components/
    pre: Pre,
    code: Code,
    p: (props) => <p className="nx-mt-5 first:nx-mt-0 leading-6" {...props} />,
  },
};

export default config;
