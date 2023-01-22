module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      extends: [
        "plugin:react/recommended",
        "prettier",
        "plugin:storybook/recommended",
        "plugin:import/typescript",
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        babelOptions: {
          parserOpts: {
            plugins: ["importAssertions"],
          },
        },
      },
    },
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: ["dist", "storybook-static"],
  rules: {
    quotes: [2, "double"],
    "comma-dangle": ["error", "only-multiline"],
    semi: [2, "always"],
    assertionStyle: "off",
  },
};
