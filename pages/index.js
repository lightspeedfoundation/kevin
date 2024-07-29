import React from 'react';
import Head from "next/head";
import {
  Hero,
  Buy,
  FAQ,
  Side,
  Footer,
} from "../components/Home";
import { Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Head>
      <title>$KEVIN</title>
        <meta name="description" content="Da meem dat reewards ETH.
evry time i go to skool for show n tel,
i bring ETH and shar it with all my frends.
        
" />
<meta property="og:title" content="KEVIN" />
        <meta property="og:description" content="Da meem dat reewards ETH.
evry time i go to skool for show n tel,
i bring ETH and shar it with all my frends." />
        <meta property="og:image" content="" />

  

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
      <Side/>
        <Hero />
        <Buy />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;