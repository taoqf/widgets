import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface XSquareProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function XSquare({ color: clr, size=24, ...props }: XSquareProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 9l6 6m0-6l-6 6"/></svg>;
}
