export default {
  plugins: ["stylelint-scss"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  extends: [],
  rules: {
    "block-no-empty": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
}