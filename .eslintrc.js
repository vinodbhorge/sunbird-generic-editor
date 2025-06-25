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


// module.exports = {
//   extends: 'standard',
//   globals: {
//     org: true,
//     CryptoJS: true,
//     _: true,
//     $: true,
//     angular: true,
//     ecEditor: true,
//     EkTelemetry: true,
//     EkstepEditor: true,
//     EkstepEditorAPI: true,
//     Class: true,
//     UUID: true,
//     WebFontConfig: true,
//     TextWYSIWYG: true,
//     ManifestGenerator: true,
//     WebFont: true,
//     fabric: true,
//     ServiceConstants: true,
//     async: true,
//     Fingerprint2: true,
//     describe: true,
//     jasmine: true,
//     afterAll: true,
//     beforeAll: true,
//     it: true,
//     spyOn: true,
//     expect: true,
//     xit: true,
//     EventBus: true,
//     beforeEach: true,
//     canvas: true,
//     Plugin: true,
//     createjs: true,
//     p: true,
//     basePlugin: true,
//     Mousetrap: true,
//     afterEach: true,
//     location: true,
//     X2JS: true
//   },
//   rules: {
//     indent: [2, 'tab'],
//     'no-tabs': 0,
//     'no-throw-literal': 'error',
//     // 'no-multiple-empty-lines': 'warn',
//     // 'indent': 'warn',
//     // 'spaced-comment': 'warn',
//     // 'no-trailing-spaces': 'warn',
//     // 'one-var': 'warn',
//     // 'semi': 'warn',
//     // 'space-before-function-paren': 'warn',
//     // 'quotes': 'warn',
//     // 'keyword-spacing': 'warn',
//     // 'curly': 'warn',
//     // 'object-curly-spacing': 'warn',
//     // 'no-path-concat': 'warn',
//     // 'camelcase': 'warn',
//     // 'eol-last': 'warn',
//     // 'padded-blocks': 'warn',
//     // 'eqeqeq': 'warn',
//     // 'space-infix-ops': 'warn',
//     // 'no-undef': 'warn',
//     // 'comma-spacing': 'warn',
//     // 'block-spacing': 'warn',
//     // 'space-before-blocks': 'warn',
//     // 'semi-spacing': 'warn',
//     // 'key-spacing': 'warn',
//     // 'brace-style': 'warn',
//     // 'no-unused-vars': 'warn',
//     // 'yoda': 'warn',
//     // 'no-dupe-keys': 'warn',
//     // 'comma-dangle': 'warn',
//     // 'no-redeclare': 'warn',
//     // 'new-parens': 'warn',
//     // 'no-unused-expressions': 'warn',
//     // 'no-floating-decimal': 'warn',
//     // 'new-cap': 'warn',
//     // 'no-return-assign': 'warn',
//     // 'no-sequences': 'warn',
//     // 'no-return-assign': 'warn',
//     // 'no-mixed-operators': 'warn',
//     // 'no-new-wrappers': 'warn',
//     // 'object-property-newline': 'warn',
//     // 'no-new-func': 'warn',
//     // 'wrap-iife': 'warn',
//     // 'no-useless-escape': 'warn',
//     // 'standard/computed-property-even-spacing': 'warn',
//     // 'operator-linebreak': 'warn',
//     // 'no-labels': 'warn',
//   },
//   overrides: [
//     {
//       files: ['*.js'],
//       rules: Object.fromEntries(
//         require('eslint/conf/eslint-all').rules
//           .filter(([name]) => !['indent', 'no-tabs', 'no-throw-literal'].includes(name))
//           .map(([name]) => [name, 'warn'])
//       )
//     }
//   ]
// }


require('eslint-plugin-only-warn'); // This makes sure it's registered

module.exports = {
  extends: 'standard',
  plugins: ['only-warn'],
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
    indent: [2, 'tab'],              // keep as error
    'no-tabs': 0,                    // keep as off
    'no-throw-literal': 'error'      // keep as error
  }
}

