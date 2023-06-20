// needed as explicit import before our own styles
// as they are otherwise added last and would therefore overrule our stylesheet
import "nextra-theme-docs/style.css";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
