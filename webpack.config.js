const path = require('path');

module.exports = {
  entry: "./src/index.ts", // Entry point for your TypeScript code
  output: {
    filename: "index.pack.js", // Name of the output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: "ts-loader", // Use ts-loader to process TypeScript
        exclude: /node_modules/, // Exclude node_modules
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Handle image files
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Place images in the 'images' folder
        },
      },
    ],
  },
  mode: "development", // Set mode to 'development' or 'production'
};




