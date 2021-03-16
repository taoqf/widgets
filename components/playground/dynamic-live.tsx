import React, { useState } from 'react';
import { LivePreview, LiveProvider, LiveError } from 'react-live';
import makeCodeTheme from './code-theme';
import Editor from './editor';
import useTheme from '../use-theme';

export interface Props {
	code: string;
	scope: {
		[key: string]: any;
	};
}

const DynamicLive: React.FC<Props> = ({ code, scope }) => {
	const theme = useTheme();
	const codeTheme = makeCodeTheme(theme);
	const [value, setvalue] = useState(code);
	return (
		<LiveProvider code={value} scope={scope} theme={codeTheme}>
			<div className="wrapper">
				<LivePreview />
				<LiveError />
			</div>
			<Editor
				code={value}
				onChange={(val) => {
					setvalue(val);
				}}
				onReset={() => {
					setvalue(code);
				}}
			/>
			<style jsx>{`
				.wrapper {
					width: 100%;
					padding: ${theme.layout.pageMargin};
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
				}

				.wrapper > :global(div) {
					width: 100%;
				}
			`}</style>
		</LiveProvider>
	);
};

export default DynamicLive;
