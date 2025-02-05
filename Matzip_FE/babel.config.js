// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: 
// };
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src'
        },
      },
    ],
  ],
};
