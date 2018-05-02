const babel = require("babel-core");

const options = {
  presets: [
    [
      "babel-preset-env",
      {
        targets: {
          browsers: [
            "last 2 versions",
            "Firefox ESR",
            "> 1%",
            "ie >= 9",
            "iOS >= 8",
            "Android >= 4"
          ]
        }
      }
    ]
  ],
  plugins: []
};

babel.transformFile("./src/index.js", options, (err, result) => {
  console.log(result.code);
});
