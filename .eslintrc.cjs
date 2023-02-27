const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error"
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: [RULES.OFF, 4],
        quotes: [RULES.WARN, "double"],
        semi: [RULES.WARN, "always"],
        "linebreak-style": RULES.OFF,
        "react/react-in-jsx-scope": RULES.OFF,
        "react/prop-types": RULES.OFF
    }
};
