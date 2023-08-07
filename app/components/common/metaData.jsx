import Head from 'next/head';

const OGMetaTags = () => {
  return (
    <Head>
      <meta property="og:title" content="Dk Glass & Velasco" />
      <meta property="og:description" content="What you imagine in glass" />
      <meta property="og:image" content="/public/logo-full.svg" />
      <meta property="og:url" content="https://dk-glass.vercel.app/" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default OGMetaTags;
