import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  const handleRouterStart = () => NProgress.start();
  const handleRouterEnd = () => NProgress.done();

  Router.events.on("routerChangeStart", handleRouterStart);
  Router.events.on("routerChangeComplete", handleRouterEnd);
  Router.events.on("routerChangeError", handleRouterEnd);

  return (
    <>
      <Head>
        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
