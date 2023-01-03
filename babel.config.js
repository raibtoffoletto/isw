module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@api": "./src/lib/api.ts",
            "@components": "./src/components",
            "@constants": "./src/lib/constants.ts",
            "@helpers": "./src/lib/helpers.ts",
            "@router": "./src/lib/router",
            "@store": "./src/lib/store.tsx",
            "@views": "./src/views",
          },
        },
      ],
    ],
  };
};
