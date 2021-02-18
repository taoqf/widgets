import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface RefreshCcwProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function RefreshCcw({ color: clr, size=24, ...props }: RefreshCcwProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M1 4v6h6m16 10v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>;
}
