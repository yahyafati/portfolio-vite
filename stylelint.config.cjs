module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'scss/no-global-function-names': null,
        'selector-pseudo-class-no-unknown': null,
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
    },
};
