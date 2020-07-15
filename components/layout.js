import React from 'react';
import Head from 'next/head';

import Navigation from './navigation';
import Footer from './footer';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Spectrum - A free template from LandClub</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
