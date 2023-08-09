// import Head from 'next/head'
// import { NextSeo } from 'next-seo';
import HomeLayout from './components/Home'
import RandomImages from './components/RandomBack'
// import { metadata } from './layout';

export default function Home() {
  return (
    // <>
    //   <Head>
    //     <meta property="og:title" content={metadata.title} />
    //     <meta property="og:description" content={metadata.description} />
    //     <meta property="og:image" content={metadata.image} />
    //     <meta property="og:url" content="URL_de_tu_página" />
    //   </Head>
    //   <NextSeo
    //     title={metadata.title}
    //     description={metadata.description}
    //     openGraph={{
    //       title: metadata.title,
    //       description: metadata.description,
    //       images: [{ url: 'https://dk-glass.vercel.app/logo-full.svg' }],
    //       url: 'https://dk-glass.vercel.app',
    //     }}
    //   />
    <>
      <RandomImages />
      <HomeLayout />
    </>
  )
}
