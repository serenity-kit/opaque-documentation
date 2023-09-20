import cn from "clsx";
import type { ReactElement } from "react";
import NetideeLogo from "../public/netidee.svg";

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  const styles = {
    wrapper:
      "grid grid-cols-footer w-full max-w-[48rem] my-0 mx-auto text-text-tertiary dark:text-dark-text-tertiary",
    linkWrapper: "flex flex-col gap-2",
    link: "text-text-primary dark:text-dark-text-primary underline underline-offset-[0.2rem]",
  };
  return (
    <footer className="bg-surface-primary dark:bg-dark-surface-primary border-t border-surface-border dark:border-dark-surface-border nx-pb-[env(safe-area-inset-bottom)] print:nx-bg-transparent">
      <div
        className={cn(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
          "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <div className={styles.wrapper}>
          <div className="flex-1 justify-between text-sm">
            <div className="w-52">
              <a
                href="https://www.netidee.at/"
                target="_blank"
                className="block w-24"
              >
                <NetideeLogo />
              </a>
              <p className="mt-3 text-sm">
                This project was supported by the{" "}
                <a href="https://www.netidee.at/" target="_blank">
                  Netidee funding campaign
                </a>
                .
              </p>
              <a
                className="underline text-sm"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
              >
                Licensed under CC BY-SA 4.0
              </a>
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <h6>Resources</h6>
            <a className={styles.link} href="/docs">
              Documentation
            </a>
            <a className={styles.link} href="/blog">
              Blog
            </a>
            <a
              className={styles.link}
              href="https://github.com/serenity-kit/opaque"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <h6>Company</h6>
            <a
              className={styles.link}
              href="https://github.com/serenity-kit/"
              target="_blank"
            >
              Serenity
            </a>
            <a className={styles.link} href="/imprint">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
