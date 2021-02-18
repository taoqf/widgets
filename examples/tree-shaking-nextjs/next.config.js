const withTM = require('next-transpile-modules')(['@mmstudio/widgets']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withTM(withBundleAnalyzer({}));
