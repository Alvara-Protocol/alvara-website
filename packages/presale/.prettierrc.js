/**
 * @type {import('@types/prettier').RequiredOptions}
 */
module.exports = {
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: 'always',
      },
    },
  ],
};
