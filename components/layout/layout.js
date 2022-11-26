import React from "react";
import Head from "next/head";

// components/section imports
import Header from "../../sections/header/header";
import Footer from "../../sections/footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
