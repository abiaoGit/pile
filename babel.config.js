

module.exports = function (api) {
  api.cache(false);
  return {
    presets: [['@babel/preset-env', {
      modules: false,
      targets: {
        browsers: [
          'last 2 versions',
          'safari >= 7',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
      },
      useBuiltIns: 'entry',
      debug: true,
    }], '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
      // ['prismjs', {
      //   languages: ['javascript', 'css', 'markup'],
      //   plugins: ['line-numbers'],
      //   theme: 'twilight',
      //   css: true,
      // }],
    ],
  };
};
