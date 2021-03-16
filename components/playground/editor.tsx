import React, { useState } from 'react';
import { LiveEditor } from 'react-live';
import CopyIcon from '../icons/copy';
import RightIcon from '../icons/chevronRight';
import ResetIcon from '../icons/reset';
import useTheme from '../use-theme';
import useToasts from '../use-toasts';
import Row from '../row';
import Col from '../col';
import useClipboard from '../use-clipboard';
import Spacer from '../spacer';

interface Props {
	code: string;
	onChange(value: string): unknown;
	onReset(): unknown;
}

const Editor: React.FC<Props> = ({ code, onChange, onReset }) => {
	const theme = useTheme();
	const { copy } = useClipboard();
	const [visible, setVisible] = useState(false);
	const [, setToast] = useToasts();

	const clickHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		setVisible(!visible);
	};

	const copyHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		copy(code);
		setToast({ text: 'Code copied.' });
	};

	function resetHandler(event: React.MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		onReset();
	}

	return (
		<div className="editor">
			<details open={visible}>
				<summary onClick={clickHandler}>
					<Row
						justify="space-between"
						align="middle"
						style={{ height: '100%', width: '100%' }}>
						<Col className="action">
							<span className="arrow">
								<RightIcon size={16} />
							</span>
							<span>{'Code Editor'}</span>
						</Col>
						<Col className="action">
							{visible && (
								<Row justify='end'>
									<Col>
										<span
											className="reset"
											onClick={resetHandler}
											title={'Reset'}>
											<ResetIcon size={20} />
										</span>
									</Col>
									<Col>
										<Spacer x={1} />
									</Col>
									<Col>
										<span
											className="copy"
											onClick={copyHandler}
											title={'Copy Code'}>
											<CopyIcon size={20} />
										</span>
									</Col>
								</Row>
							)}
						</Col>
					</Row>
				</summary>
				<div className="area">
					<LiveEditor onChange={(val) => {
						onChange(val);
					}} />
				</div>
			</details>

			<style jsx>{`
				.editor {
					border-bottom-left-radius: ${theme.layout.radius};
					border-bottom-right-radius: ${theme.layout.radius};
				}

				details {
					transition: all 0.2s ease;
					overflow: hidden;
					border-bottom-left-radius: ${theme.layout.radius};
					border-bottom-right-radius: ${theme.layout.radius};
				}

				summary {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 ${theme.layout.gap};
					border-top: 1px solid ${theme.palette.accents_2};
					color: ${theme.palette.accents_5};
					height: 2.875rem;
					list-style: none;
					user-select: none;
					outline: none;
				}

				summary :global(svg) {
					cursor: pointer;
				}

				summary :global(.action) {
					width: auto;
					display: flex;
					align-items: center;
					font-size: 0.8rem;
				}

				.area {
					position: relative;
					box-sizing: border-box;
					white-space: pre;
					font-family: ${theme.font.mono};
					color: ${theme.palette.foreground};
					background-color: ${theme.palette.background};
					font-size: 1em;
					overflow: hidden;
					border-top: 1px solid ${theme.palette.accents_2};
					padding: ${theme.layout.gapHalf};
				}

				.arrow {
					transition: all 0.2s ease;
					transform: rotate(${visible ? 90 : 0}deg);
					display: inline-flex;
					align-items: center;
					width: 1rem;
					height: 1rem;
					margin-right: 0.5rem;
				}

				.copy,.reset {
					display: inline-flex;
					align-items: center;
					color: ${theme.palette.accents_4};
					transition: color 0.2s ease;
				}

				.copy:hover,.reset:hover {
					color: ${theme.palette.accents_6};
				}
			`}</style>
		</div>
	);
};

export default Editor;
