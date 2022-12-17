import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto min-h-screen text-[#696F79]">
      <Component {...pageProps} />
    </div>
  );
}
