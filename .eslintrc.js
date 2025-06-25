// module.exports = {
//   env: {
//     node: true,
//     es2021: true
//   },
//   parserOptions: {
//     ecmaVersion: 'latest'
//   },
//   rules: {
//     'no-console': 'warn',
//     'no-debugger': 'error',
//     'no-unused-vars': 'warn',
//     'semi': ['error', 'always'],
//     'quotes': ['error', 'single'],
//     'indent': ['error', 2]
//   }
// };


// {
//   "extends": "standard",
//   "globals": {
//     "org": true,
//     "CryptoJS": true,
//     "_": true,
//     "$": true,
//     "angular": true,
//     "ecEditor": true,
//     "EkTelemetry": true,
//     "EkstepEditor": true,
//     "EkstepEditorAPI": true,
//     "Class": true,
//     "UUID": true,
//     "WebFontConfig": true,
//     "TextWYSIWYG": true,
//     "ManifestGenerator": true,
//     "WebFont": true,
//     "fabric": true,
//     "ServiceConstants": true,
//     "async": true,
//     "Fingerprint2": true,
//     "describe": true,
//     "jasmine": true,
//     "afterAll": true,
//     "beforeAll": true,
//     "it": true,
//     "spyOn": true,
//     "expect": true,
//     "xit": true,
//     "EventBus": true,
//     "beforeEach": true,
//     "canvas": true,
//     "Plugin": true,
//     "createjs": true,
//     "p": true,
//     "basePlugin": true,
//     "Mousetrap": true,
//     "afterEach": true,
//     "location": true,
//     "X2JS": true
//   },
//   "rules": {
//     "indent": [2, "tab"],
//     "no-tabs": 0,
//     "no-throw-literal": "error"
//   }
// }

require('eslint-plugin-only-warn');

module.exports = {
  extends: 'standard',
  plugins: ['only-warn'], // makes all rules default to warnings
  globals: {
    org: true,
    CryptoJS: true,
    _: true,
    $: true,
    angular: true,
    ecEditor: true,
    EkTelemetry: true,
    EkstepEditor: true,
    EkstepEditorAPI: true,
    Class: true,
    UUID: true,
    WebFontConfig: true,
    TextWYSIWYG: true,
    ManifestGenerator: true,
    WebFont: true,
    fabric: true,
    ServiceConstants: true,
    async: true,
    Fingerprint2: true,
    describe: true,
    jasmine: true,
    afterAll: true,
    beforeAll: true,
    it: true,
    spyOn: true,
    expect: true,
    xit: true,
    EventBus: true,
    beforeEach: true,
    canvas: true,
    Plugin: true,
    createjs: true,
    p: true,
    basePlugin: true,
    Mousetrap: true,
    afterEach: true,
    location: true,
    X2JS: true
  },
  rules: {
    indent: [2, 'tab'],
    'no-tabs': 0,
    'no-throw-literal': 'error',
  }
}
