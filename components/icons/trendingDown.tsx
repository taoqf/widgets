import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function TrendingDown({ color: clr, size=24, ...props }: TrendingDownProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M23 18l-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/></svg>;
}
