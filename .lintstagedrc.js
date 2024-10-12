module.exports = {
	'**/*.(ts|tsx|js)': (filenames) => [
		`eslint ${filenames.join(' ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],
	'**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
