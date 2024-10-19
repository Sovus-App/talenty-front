module.exports = {
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-console': ['error', { allow: ['error', 'info'] }],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-control-regex': 'off',
	},
};
