const withPWA = require("next-pwa");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const runtimeCaching = require("next-pwa/cache");

// module.exports = withPlugins([
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
//         use: {
//           loader: "url-loader",
//           options: {
//             limit: 500000,
//           },
//         },
//       });

//       return config;
//     },
//   }),
//   withPWA({
//     pwa: {
//       dest: "public",
//       runtimeCaching,
//     },
//   }),
// ]);

module.exports = withPlugins([
  [
    withSass,
    {
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 500000,
            },
          },
        });

        return config;
      },
    },
  ],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        runtimeCaching,
      },
    },
  ],
]);
