/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
    async headers() {
        return [
          {
            source: '/favicon.png',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=86400',
              },
            ],
          },
        ];
      },
}

module.exports = withFonts(nextConfig)

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