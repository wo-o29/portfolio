import type { AppProps } from "next/app";
import "../styles/reset.css";
import GlobalStyle from "../styles/Global";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
