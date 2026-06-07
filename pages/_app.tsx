import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import WashiBackground from "../components/WashiBackground";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <WashiBackground />
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.route}
              initial={{ opacity: 0, y: 16, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, y: -16, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <DefaultSeo {...SEO} />
              <Component {...pageProps} key={router.route} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}
