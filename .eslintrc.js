module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
        'prefer-promise-reject-errors': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/v-slot-style': 'off',
        'vue/no-v-html': 'off',
    
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
        'vue/attributes-order': [
          'warn',
          {
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              ['UNIQUE', 'SLOT'],
              'OTHER_ATTR',
              'TWO_WAY_BINDING',
              'OTHER_DIRECTIVES',
              'CONTENT',
              'EVENTS',
            ],
            alphabetical: false,
          },
        ],
    
        'vue/order-in-components': [
          'error',
          {
            order: [
              'el',
              'name',
              'key',
              'parent',
              'functional',
              'layout',
              'middleware',
              'validate',
              'scrollToTop',
              'transition',
              'loading',
              'inheritAttrs',
              ['delimiters', 'comments'],
              ['components', 'directives', 'filters'],
              'extends',
              'mixins',
              ['provide', 'inject'],
              'ROUTER_GUARDS',
              'model',
              ['props', 'propsData'],
              'emits',
              'setup',
              'data',
              'computed',
              'watch',
              'asyncData',
              'fetch',
              'LIFECYCLE_HOOKS',
              'methods',
              'head',
              ['template', 'render'],
              'renderError',
            ],
          },
        ],
      },
}
