module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/../node_modules/babel-jest/build/index.js"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/fileMock.js",
    "\\.(css|less)$": "<rootDir>/config/jest/styleMock.js"
  },
  setupFiles: ["<rootDir>/config/jest/polyfills.ts"]
}
