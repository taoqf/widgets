/**
 * Just customize what you need, deep merge themes by default.
 *
 * If you are using TypeScript, please use the following type definition.
 * If you are using JavaScript, refer to https://github.com/taoqf/widgets/blob/master/components/themes/presets/index.ts
 */

// import {
//   Themes,
//   UIThemesPalette,
//   ThemesExpressiveness,
//   ThemesLayout,
//   ThemesFont,
// } from '@mmstudio/widgets'
import { Themes } from '@mmstudio/widgets';

export const greenTheme = Themes.createFromLight({
	type: 'green',
	palette: {
		success: 'green',
		warning: 'green',
		error: 'green',
	},
});

export const redTheme = Themes.createFromLight({
	type: 'red',
	palette: {
		success: 'red',
		warning: 'red',
		error: 'red',
	},
});
