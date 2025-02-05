const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// const path = require('path');
// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     resolver: {
//       // extraNodeModules를 사용하여 alias를 설정
//       extraNodeModules: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//       assetExts,
//       sourceExts,
//     },
//   };
// })();
