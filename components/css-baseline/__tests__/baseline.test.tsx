import React from 'react';
import { render } from 'enzyme';
import { CssBaseline, MMProvider } from 'components';

describe('CSSBaseline', () => {
	it('should render correctly', () => {
		const wrapper = render(
			<MMProvider>
				<CssBaseline />
			</MMProvider>,
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render dark mode correctly', () => {
		const wrapper = render(
			<MMProvider themeType="dark">
				<CssBaseline />
			</MMProvider>,
		);
		expect(wrapper).toMatchSnapshot();
	});
});
