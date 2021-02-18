import React, { useImperativeHandle } from 'react';
import useContextState, {
	ContextHandler,
	ContextHandlerWhere,
	ContextStateFilter,
	ContextStateOnChange,
	ContextStates,
} from './use-context-state';
import { capitalize } from '../collections';

const makeVirtualValues = <S,>(values: S): ContextStates<S> => {
	const keys = Object.keys(values) as Array<keyof S>;
	const handlers = keys.reduce<ContextHandler<S>>((pre, current) => {
		const updateHandler = {
			// @ts-ignore
			[`set${capitalize(current)}`]: (next: S[typeof current]) => { },
		};
		return { ...pre, ...updateHandler };
	}, {} as ContextHandler<S>);
	// @ts-ignore
	const update: ContextHandlerWhere<S> = (key, next) => { };
	return {
		update,
		...values,
		...handlers,
	};
};

export type NamedContext<T, N> = {
	[key in string as `use${Capitalize<string & N>}Context`]: () => T;
};

export type NamedProvider<T, N> = {
	[key in string as `${Capitalize<string & N>}Provider`]: T;
};

export const createContext = <S extends Record<string, unknown>, N extends string>(
	name: N,
	initialStates: S,
) => {
	const virtualValues = makeVirtualValues(initialStates);
	const Context = React.createContext<ContextStates<S>>(virtualValues);

	type MMContextProps = {
		defaultValues?: Partial<S> | (() => Partial<S>);
		onChange?: ContextStateOnChange<S>;
		onChangeBefore?: ContextStateFilter<S>;
	};

	const MMContext = React.forwardRef<S, React.PropsWithChildren<MMContextProps>>(
		({ defaultValues, children, onChange, onChangeBefore }, ref) => {
			const initialValues =
				typeof defaultValues === 'function'
					? (defaultValues as () => S)()
					: defaultValues;
			const mergedValues = {
				...initialStates,
				...initialValues,
			} as Required<S>;
			const [states, , statesRef] = useContextState(mergedValues, {
				onChange: onChange ? onChange : () => { },
				filter: onChangeBefore ? onChangeBefore : () => true,
			});

			useImperativeHandle(ref, () => statesRef.current, [statesRef.current]);

			return <Context.Provider value={states}>{children}</Context.Provider>;
		},
	);

	type ResultType = NamedProvider<typeof MMContext, N> &
		NamedContext<ContextStates<S>, N>;

	return {
		[`${capitalize(name)}Provider`]: MMContext,
		[`use${capitalize(name)}Context`]: () => React.useContext<ContextStates<S>>(Context),
	} as ResultType;
};
