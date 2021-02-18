import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ZapProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Zap({ color: clr, size=24, ...props }: ZapProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}
