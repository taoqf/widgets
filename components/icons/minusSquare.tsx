import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MinusSquareProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function MinusSquare({ color: clr, size=24, ...props }: MinusSquareProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M8 12h8"/></svg>;
}
