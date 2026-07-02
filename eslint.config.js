import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    plugins: { prettier },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", "*.d.ts"],
  },
];
