const path = require("path");
const cracoLess = require('craco-less');
const addPath = dir => path.join(__dirname, dir);

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {

      return webpackConfig;

    },
    alias: {
      "@": addPath("src")
    },
  },
  babel: {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": "49",
            "ios": "10"
          }
        }
      ]
    ]
  },
  devServer: {
    open: false,
    port: 8001,
  },
  plugins: [
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-plugin-px2rem', {
                rootValue: 75,
                exclude: /(node_module)/i,
                mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
              },
            ]
          ],
        },
      },
    },
  }
}