import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import stylistic from "@stylistic/eslint-plugin-ts";
import * as pluginImport from "eslint-plugin-import";

const result = [
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        plugins: {
            "@stylistic/ts": stylistic,
            "import": pluginImport
        },
        languageOptions: { globals: globals.browser },
        rules: {
            "@typescript-eslint/no-namespace": "off",
            "import/no-anonymous-default-export": "off",
            "@stylistic/ts/brace-style": ["error", "allman"],
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "react/display-name": "off",
            "react/jsx-uses-vars": "error",
            "indent": ["error", 4, { "SwitchCase": 1 }],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4]
        }
    },
];

export default result;