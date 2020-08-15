const withSass = require("@zeit/next-sass");
module.exports = withSass({
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
});
