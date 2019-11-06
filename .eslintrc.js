module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 5
	},
	'rules': {
		'indent': [
			2,
			'tab'
		],
		'linebreak-style': [
			2,
			'unix'
		],
		'quotes': [
			2,
			'single'
		],
		'semi': [
			2,
			'always'
		],
		"no-unused-vars": [
			1,
			{
				'vars' : 'all',
				'args' : 'after-used'
			}
		]
	}
};