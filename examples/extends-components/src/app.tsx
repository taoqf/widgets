import * as React from 'react';
import MyInput from './my-input';
import { MMProvider, CssBaseline, Page } from '@mmstudio/widgets';

export default function App() {
	return (
		<MMProvider>
			<CssBaseline />
			<Page size="mini">
				<MyInput error="this is required" placeholder="my input" />
			</Page>
		</MMProvider>
	);
}
