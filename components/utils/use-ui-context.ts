import React from 'react';
import { ToastWithID } from '../use-toasts/toast-container';

export type UpdateToastsFunction<T> = (fn: (toasts: Array<T>) => Array<T>) => any;

export interface UIContextParams {
	toasts: Array<ToastWithID>;
	toastHovering: boolean;
	updateToasts: UpdateToastsFunction<ToastWithID>;
	updateToastHoverStatus: (fn: () => boolean) => void;
}

const defaultParams: UIContextParams = {
	toasts: [],
	toastHovering: false,
	updateToasts: t => t,
	updateToastHoverStatus: () => { },
};

export const UIContent: React.Context<UIContextParams> = React.createContext<UIContextParams>(
	defaultParams,
);

export const useContext = (): UIContextParams =>
	React.useContext<UIContextParams>(UIContent);
