import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ListProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function List({ color: clr, size=24, ...props }: ListProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>;
}
