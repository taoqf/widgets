import React from 'react';
import ReactDom from 'react-dom';
import { MMProvider, CssBaseline } from '@mmstudio/widgets';
import Home from './home';

const App = () => {
	return (
		<MMProvider>
			<CssBaseline />
			<Home />
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
