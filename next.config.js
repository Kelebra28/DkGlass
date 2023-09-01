/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/favicon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
  images: {
    remotePatters: [
      {
        protocol: "https",
        hostname: "www.dkglassvelasco.com",
        post: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = withFonts(nextConfig);

// module.exports = {
//     // ...otras configuraciones...
//     async headers() {
//       return [
//         {
//           source: '/favicon.ico',
//           headers: [
//             {
//               key: 'Cache-Control',
//               value: 'public, max-age=86400',
//             },
//           ],
//         },
//       ];
//     },
//   };
