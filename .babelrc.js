const isTest = String(process.env.NODE_ENV) === "test"

const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["last 4 versions", "not dead", "not < 2%", "not ie 11"]
      },
      useBuiltIns: "usage",
      modules: isTest ? "commonjs" : false
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
]

const plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties"
]

isTest ? plugins.push("babel-plugin-dynamic-import-node") : null

module.exports = {
  presets,
  plugins
}
