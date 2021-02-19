import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import Input from '../input';
import AutoCompleteItem from './auto-complete-item';
import AutoCompleteDropdown from './auto-complete-dropdown';
import AutoCompleteSearching from './auto-complete-searching';
import AutoCompleteEmpty from './auto-complete-empty';
import { AutoCompleteContext, AutoCompleteConfig } from './auto-complete-context';
import { NormalSizes, NormalTypes } from '../utils/prop-types';
import Loading from '../loading';
import { pickChild } from '../utils/collections';
import useCurrentState from '../utils/use-current-state';

export type AutoCompleteOption = {
	label: string;
	value: string;
};

export type AutoCompleteFunOptions = (value: string) => AutoCompleteOptions | Promise<AutoCompleteOptions>;

export type AutoCompleteOptions = Array<typeof AutoCompleteItem | AutoCompleteOption>;

interface Props {
	options: AutoCompleteOptions | AutoCompleteFunOptions;
	size?: NormalSizes;
	status?: NormalTypes;
	initialValue?: string;
	value?: string;
	width?: string;
	onChange?: (value: string) => void;
	onSelect?: (value: string) => void;
	clearable?: boolean;
	dropdownClassName?: string;
	dropdownStyle?: CSSProperties;
	disableMatchWidth?: boolean;
	disableFreeSolo?: boolean;
	className?: string;
	minsearchinterval?: number;
}

const defaultProps = {
	options: [] as AutoCompleteOptions,
	initialValue: '',
	disabled: false,
	clearable: false,
	size: 'medium' as NormalSizes,
	disableMatchWidth: false,
	disableFreeSolo: false,
	className: '',
	placeholder: 'Select...',
	minsearchinterval: 200,
};

type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export type AutoCompleteProps = Props & typeof defaultProps & NativeAttrs;

const childrenToOptionsNode = (options: Array<AutoCompleteOption>) =>
	options.map((item, index) => {
		const key = `auto-complete-item-${index}`;
		if (React.isValidElement(item)) return React.cloneElement(item, { key });
		const validItem = item as AutoCompleteOption;
		return (
			<AutoCompleteItem key={key} value={validItem.value} isLabelOnly>
				{validItem.label}
			</AutoCompleteItem>
		);
	});

// When the search is not set, the "clearable" icon can be displayed in the original location.
// When the search is seted, at least one element should exist to avoid re-render.
const getSearchIcon = (searching?: boolean) => {
	if (searching === undefined) return null;
	return searching ? <Loading size="medium" /> : <span />;
};

const AutoComplete: React.FC<React.PropsWithChildren<AutoCompleteProps>> = ({
	options: opts,
	initialValue: customInitialValue,
	onSelect,
	onChange,
	children,
	size,
	status,
	value,
	width,
	clearable,
	disabled,
	dropdownClassName,
	dropdownStyle,
	disableMatchWidth,
	disableFreeSolo,
	placeholder = 'Select...',
	minsearchinterval = 200,
	...props
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const resetTimer = useRef<number>();
	const [state, setState, stateRef] = useCurrentState<string>(customInitialValue);
	const [selectVal, setSelectVal] = useState<string>(customInitialValue);
	const [visible, setVisible] = useState<boolean>(false);
	const [searching, setSearching] = useState(false);
	const [options, setOptions] = useState(Array.isArray(opts) ? opts : []);
	const [lastSearchTm, setLastSearchTm] = useState(0);

	const [, searchChild] = pickChild(children, AutoCompleteSearching);
	const [, emptyChild] = pickChild(children, AutoCompleteEmpty);
	const autoCompleteItems = useMemo(() => {
		const hasSearchChild = searchChild && React.Children.count(searchChild) > 0;
		const hasEmptyChild = emptyChild && React.Children.count(emptyChild) > 0;
		if (searching) {
			return hasSearchChild ? (
				searchChild
			) : (
					<AutoCompleteSearching>Searching...</AutoCompleteSearching>
				);
		}
		if (options.length === 0) {
			if (state === '') return null;
			return hasEmptyChild ? (
				emptyChild
			) : (
					<AutoCompleteEmpty>No Options</AutoCompleteEmpty>
				);
		}
		return childrenToOptionsNode(options as Array<AutoCompleteOption>);
	}, [searching, options]);
	const showClearIcon = useMemo(() => clearable && searching === false, [
		clearable,
		searching,
	]);

	const updateValue = (val: string) => {
		if (disabled) return;
		setSelectVal(val);
		onSelect && onSelect(val);
		setState(val);
		inputRef.current && inputRef.current.focus();
	};
	async function searchoptions(val: string) {
		if (typeof opts === 'function') {
			const now = new Date().getTime();
			if (now - lastSearchTm > minsearchinterval) {
				setLastSearchTm(now);
				try {
					setSearching(true);
					const result = await opts(val);
					setOptions(result);
				} finally {
					setSearching(false);
				}
			}
		}
	}
	const updateVisible = (next: boolean) => setVisible(next);
	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value;
		setVisible(true);
		setState(val);
		searchoptions(val);
	};
	const resetInputValue = () => {
		if (!disableFreeSolo) return;
		if (!state || state === '') return;
		if (state !== selectVal) {
			setState(selectVal);
		}
	};

	useEffect(() => {
		onChange && onChange(state);
	}, [state]);
	useEffect(() => {
		if (value === undefined) return;
		setState(value);
	}, [value]);

	const initialValue = useMemo<AutoCompleteConfig>(
		() => ({
			ref,
			size,
			value: state,
			updateValue,
			visible,
			updateVisible,
		}),
		[state, visible, size],
	);

	const toggleFocusHandler = (next: boolean) => {
		clearTimeout(resetTimer.current);
		setVisible(next);
		if (next) {
			searchoptions(stateRef.current);
		} else {
			resetTimer.current = window.setTimeout(() => {
				resetInputValue();
				clearTimeout(resetTimer.current);
			}, 100);
		}
	};

	const inputProps = {
		...props,
		width,
		disabled,
		value: state,
	};

	return (
		<AutoCompleteContext.Provider value={initialValue}>
			<div ref={ref} className="auto-complete">
				<Input
					ref={inputRef}
					size={size}
					status={status}
					onChange={onInputChange}
					onFocus={() => toggleFocusHandler(true)}
					onBlur={() => toggleFocusHandler(false)}
					clearable={showClearIcon}
					iconRight={getSearchIcon(searching)}
					placeholder={placeholder}
					{...inputProps}
				/>
				<AutoCompleteDropdown
					visible={visible}
					disableMatchWidth={disableMatchWidth}
					className={dropdownClassName}
					dropdownStyle={dropdownStyle}>
					{autoCompleteItems}
				</AutoCompleteDropdown>

				<style jsx>{`
					.auto-complete {
						width: ${width || 'max-content'};
					}

					.auto-complete :global(.loading) {
						left: -3px;
						right: -3px;
						width: max-content;
					}
				`}</style>
			</div>
		</AutoCompleteContext.Provider>
	);
};

type AutoCompleteComponent<P = {}> = React.FC<P> & {
	Item: typeof AutoCompleteItem;
	Option: typeof AutoCompleteItem;
	Empty: typeof AutoCompleteEmpty;
};

type ComponentProps = Partial<typeof defaultProps> &
	Omit<Props, keyof typeof defaultProps> &
	NativeAttrs;
(AutoComplete as AutoCompleteComponent<ComponentProps>).defaultProps = defaultProps;

export default AutoComplete as AutoCompleteComponent<ComponentProps>;
