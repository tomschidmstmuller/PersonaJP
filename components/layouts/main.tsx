import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Main = ({
  children,
  router,
}: {
  children: any;
  router: any;
}) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <Head>
        <title>Yang Tuấn Anh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/waffle_logo.png" />
      </Head>

      <Navbar path={router.asPath} />
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-24 pb-12">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Main;
