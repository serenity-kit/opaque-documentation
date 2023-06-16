// needed as explicit import before our own styles
// as they are otherwise added last and would therefore overrule our stylesheet
import "nextra-theme-docs/style.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
