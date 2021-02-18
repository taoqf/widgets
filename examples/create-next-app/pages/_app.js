import { MMProvider, CssBaseline } from '@mmstudio/widgets';

function MyApp({ Component, pageProps }) {
	return (
		<MMProvider>
			<CssBaseline />
			<Component {...pageProps} />
		</MMProvider>
	);
}
export default MyApp;
