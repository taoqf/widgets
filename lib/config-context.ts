import React from 'react';
import { DeepPartial } from 'components/utils/types';
import { UIThemes } from 'components';

export interface Configs {
	onThemeChange?: (themes: DeepPartial<UIThemes>) => void;
	isChinese?: boolean;
	updateChineseState: (state: boolean) => void;
	sidebarScrollHeight: number;
	updateSidebarScrollHeight: (height: number) => void;

	tabbarFixed: boolean;
	updateTabbarFixed: (state: boolean) => void;

	customTheme: DeepPartial<UIThemes>;
	updateCustomTheme: (theme: DeepPartial<UIThemes>) => void;
	switchTheme: (type: string) => void;
}

export const defaultConfigs: Configs = {
	sidebarScrollHeight: 0,
	updateSidebarScrollHeight: () => { },
	updateChineseState: () => { },

	tabbarFixed: false,
	updateTabbarFixed: () => { },

	customTheme: {},
	updateCustomTheme: () => { },
	onThemeChange: () => { },
	switchTheme: () => { },
};

export const ConfigContext = React.createContext<Configs>(defaultConfigs);

export const useConfigs = (): Configs => React.useContext(ConfigContext);
