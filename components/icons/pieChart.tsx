import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface PieChartProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function PieChart({ color: clr, size=24, ...props }: PieChartProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/></svg>;
}
