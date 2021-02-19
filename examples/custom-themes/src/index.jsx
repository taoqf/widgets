import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { MMProvider, CssBaseline, Page, Text } from '@mmstudio/widgets';
import { greenTheme, redTheme } from './theme';
import Home from './home';

const App = () => {
	const [theme, setTheme] = useState('light');
	return (
		<MMProvider themes={[greenTheme, redTheme]} themeType={theme}>
			<CssBaseline />
			<Page size="mini" dotBackdrop>
				<Page.Header>
					<Text h2>Custom themes for MMStudio widgets</Text>
				</Page.Header>
				<Home onThemeChange={next => setTheme(next)} />
			</Page>
		</MMProvider>
	);
};

ReactDom.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app'),
);

export default App;
