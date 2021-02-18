import { Page, Text } from '@mmstudio/widgets';

export default function Home() {
	return (
		<Page dotBackdrop size="mini">
			<Page.Header>
				<Text h2>React Application with MMStudio widgets</Text>
			</Page.Header>
			<Text>
				Hello, I am using <Text b>Gesit UI</Text> !
			</Text>
		</Page>
	);
}
