import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", "*.d.ts"],
  },
]);
