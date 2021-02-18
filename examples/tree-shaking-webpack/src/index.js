import React from 'react';
import ReactDOM from 'react-dom';
import { MMProvider, CssBaseline, Page, Button } from '@mmstudio/widgets';

const App = () => {
	return (
		<Page>
			<p>Hello, world.</p>
			<Button>Action</Button>
		</Page>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<MMProvider>
			<CssBaseline />
			<App />
		</MMProvider>
	</React.StrictMode>,
	document.getElementById('app'),
);
