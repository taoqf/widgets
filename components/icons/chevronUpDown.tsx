import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ChevronUpDownProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ChevronUpDown({ color: clr, size=24, ...props }: ChevronUpDownProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M17 8.517L12 3 7 8.517m0 6.963l5 5.517 5-5.517"/></svg>;
}
