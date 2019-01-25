const path = require("path")

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src", "test"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/fileMock.js",
    "\\.module\\.(css|less)$": "identity-obj-proxy",
    "\\.(css|less)$": "<rootDir>/config/jest/styleMock.js"
  },
  setupFiles: [path.join(__dirname, "test/config/jest/polyfills.ts")],
  setupTestFrameworkScriptFile: require.resolve(
    "./test/config/jest/setup-tests.ts"
  ),
  collectCoverageFrom: [
    "**/src/**/*.js",
    "**/src/**/*.jsx",
    "**/src/**/*.ts",
    "**/src/**/*.tsx"
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 80,
      lines: 60,
      functions: 80
    }
  }
}
