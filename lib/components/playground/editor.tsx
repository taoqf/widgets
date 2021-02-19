import React, { useState } from 'react';
import { LiveEditor } from 'react-live';
import { useConfigs } from 'lib/config-context';
import { useTheme, useToasts, Row, Col, useClipboard, Spacer } from 'components';
import CopyIcon from 'components/icons/copy';
import RightIcon from 'components/icons/chevronRight';
import ResetIcon from 'components/icons/reset';

interface Props {
	code: string;
}

const Editor: React.FC<Props> = ({ code }) => {
	const theme = useTheme();
	const { copy } = useClipboard();
	const { isChinese } = useConfigs();
	const [visible, setVisible] = useState(false);
	const [, setToast] = useToasts();
	const [value, setValue] = useState(code);

	const clickHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		setVisible(!visible);
	};

	const copyHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		copy(value);
		setToast({ text: isChinese ? '代码已拷贝至剪切板。' : 'code copied.' });
	};

	function resetHandler(event: React.MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		setValue(code);
		setToast({ text: code });
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
							<span>{isChinese ? '编辑代码' : 'Code Editor'}</span>
						</Col>
						<Col className="action">
							{visible && (
								<Row justify='end'>
									<Col>
										<span
											className="reset"
											onClick={resetHandler}
											title={isChinese ? '还原' : 'Reset'}>
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
											title={isChinese ? '拷贝代码' : 'Copy Code'}>
											<CopyIcon size={20} />
										</span>
									</Col>
								</Row>
							)}
						</Col>
					</Row>
				</summary>
				<div className="area">
					<LiveEditor code={value} onChange={(val) => {
						setValue(val);
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
