import "@/styles/GlobalStyle.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{}}>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
