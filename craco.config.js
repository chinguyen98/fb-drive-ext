module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        entry: {
          main: [
            env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appIndexJs,
          ].filter(Boolean),
          background: './src/chromeServices/backgroundScript',
          content: './src/chromeServices/contentScript',
        },
        output: {
          ...webpackConfig.output,
          filename: 'static/js/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
      };
    },
  },
};
