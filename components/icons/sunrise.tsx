import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface SunriseProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Sunrise({ color: clr, size=24, ...props }: SunriseProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M17 18a5 5 0 00-10 0m5-16v7m-7.78 1.22l1.42 1.42M1 18h2m18 0h2m-4.64-6.36l1.42-1.42M23 22H1M8 6l4-4 4 4"/></svg>;
}
