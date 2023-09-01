import Head from "next/head";

const OGMetaTags = () => {
  return (
    <Head>
      <meta property="og:title" content="Dk Glass & Velasco" />
      <meta property="og:description" content="What you imagine in glass" />
      <meta
        property="og:image"
        rel="icon"
        content="/favicon.png"
        type="image/png"
      />
      <meta property="og:url" content="https://www.dkglassvelasco.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dk Glass & Velasco" />
      <meta
        property="og:image"
        itemprop="image"
        content="https://www.dkglassvelasco.com/logo-full.svg"
      />
      <link itemprop="thumbnailUrl" href="https://www.dkglassvelasco.com/logo-full.svg"/> 
      <link rel="preload" as="font" />
      <link rel="icon" href="/favicon.png?" type="image/png" />
    </Head>
  );
};

export default OGMetaTags;
