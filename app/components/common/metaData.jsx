import Head from "next/head";

const OGMetaTags = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <meta charset="utf-8" />
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
        content="https://www.dkglassvelasco.com/favicon.png"
      />
      {/* Meta Fabook meatdata */}
      <meta name="twitter:title" content="Dk Glass & Velasco" />
      <meta
        name="twitter:description"
        content="Dk Glass & Velasco: What you imagine in glass"
      />
      <meta
        name="twitter:image"
        content="https://www.dkglassvelasco.com/logo-full.svg"
      />
      <link
        itemprop="thumbnailUrl"
        href="https://www.dkglassvelasco.com/favicon.png"
      />
      <link rel="preload" as="font" />
      <link rel="icon" href="/favicon.png?" type="image/png" />
    </Head>
  );
};

export default OGMetaTags;
