module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'vue-eslint-parser', // Adding this line works perfectly
    plugins: [
        "vue"
    ],
    extends: [
        'plugin:vue/base',
        "plugin:vue/essential",
        //"plugin:vue/recommended"
    ],
    rules: {
        "strict": "off",
        "no-unused-vars": "off",
        'no-console': 'off',
        "no-tabs": "off",
        "key-spacing": [0, {"beforeColon": false, "afterColon": true}],//对象字面量中冒号的前后空格
        'semi': [
            0,
            'never',
            {
                'beforeStatementContinuationChars': 'never'
            }
        ],
        'prefer-const': [
            0,
            {
                'ignoreReadBeforeAssign': false
            }
        ],
    },
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "vueFeatures": {
            "filter": true,
            "interpolationAsNonHTML": false,
        }
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
