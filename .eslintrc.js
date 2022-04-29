module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "semi": [2, 'never'],
        "no-unused-vars": 1,
        "react-hooks/rules-of-hooks": "error", // 檢查 Hook 的規則
        "react-hooks/exhaustive-deps": "warn", // 檢查 effect 的相依性
        "react/prop-types": "off"
    }
}
