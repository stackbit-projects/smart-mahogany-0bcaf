module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-import"),
    require("autoprefixer")
  ]
}
