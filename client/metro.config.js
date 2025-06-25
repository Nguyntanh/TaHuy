const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  return {
    ...config,
    transformer: {
      ...config.transformer,
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      ...config.resolver,
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'],
    },
  };
})();