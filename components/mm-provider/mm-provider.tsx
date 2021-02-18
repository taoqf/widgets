import React, { PropsWithChildren, useMemo, useState } from 'react';
import {
	UIContent,
	UIContextParams,
	UpdateToastsFunction,
} from '../utils/use-ui-context';
import ThemeProvider from './theme-provider';
import useCurrentState from '../utils/use-current-state';
import ToastContainer, { ToastWithID } from '../use-toasts/toast-container';
import { UIThemes } from '../themes/presets';

export interface Props {
	themes?: Array<UIThemes>;
	themeType?: string | 'dark' | 'light';
}

const MMProvider: React.FC<PropsWithChildren<Props>> = ({
	themes,
	themeType,
	children,
}) => {
	const [toasts, setToasts, toastsRef] = useCurrentState<Array<ToastWithID>>([]);
	const [toastHovering, setToastHovering] = useState<boolean>(false);
	const updateToasts: UpdateToastsFunction<ToastWithID> = (
		fn: (toasts: ToastWithID[]) => ToastWithID[],
	) => {
		const nextToasts = fn(toastsRef.current);
		setToasts(nextToasts);
	};

	const updateToastHoverStatus = (fn: () => boolean) => {
		const nextHoverStatus = fn();
		setToastHovering(nextHoverStatus);
	};

	const initialValue = useMemo<UIContextParams>(
		() => ({
			toasts,
			toastHovering,
			updateToasts,
			updateToastHoverStatus,
		}),
		[toasts, toastHovering],
	);

	return (
		<UIContent.Provider value={initialValue}>
			<ThemeProvider themes={themes} themeType={themeType}>
				{children}
				<ToastContainer />
			</ThemeProvider>
		</UIContent.Provider>
	);
};

export default MMProvider;
