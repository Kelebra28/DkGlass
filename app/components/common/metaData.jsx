import Head from "next/head";

const OGMetaTags = () => {
  return (
    <Head>
      <meta property="og:title" content="Dk Glass & Velasco" />
      <meta property="og:description" content="What you imagine in glass 2.0" />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:url" content="https://www.dkglassvelasco.com" />
      <meta property="og:type" content="website" />
      <link rel="preload" as="font" />
    </Head>
  );
};

export default OGMetaTags;
