const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
	fixBabelImports('@mmstudio/widgets', {
		libraryDirectory: 'esm',
	}),
);
