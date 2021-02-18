import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BarChartProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function BarChart({ color: clr, size=24, ...props }: BarChartProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 20V10m6 10V4M6 20v-4"/></svg>;
}
