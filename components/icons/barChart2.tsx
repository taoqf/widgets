import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BarChart2Props extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function BarChart2({ color: clr, size=24, ...props }: BarChart2Props) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M18 20V10m-6 10V4M6 20v-6"/></svg>;
}
