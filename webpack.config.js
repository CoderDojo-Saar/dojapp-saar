const path = require("path");
const src = {
  js: path.join(__dirname, "src", "js"),
  css: path.join(__dirname, "src", "css")
};

const config = {
  entry: {
    "event-kalender": path.join(src.js, "event-kalender.js"),
    kalender: path.join(src.js, "kalender.js"),
    menue: path.join(src.js, "menue.js"),
    seite: path.join(src.js, "seite.js"),
    sponsoren: path.join(src.js, "sponsoren.js"),
    zeigeChangelog: path.join(src.js, "zeigeChangelog.js")
  },
  output: {
    path: path.resolve(__dirname, "www/js/"),
    filename: "[name].js"
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};

module.exports = config;
