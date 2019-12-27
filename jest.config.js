module.exports = {
  "verbose": true,
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  }
};