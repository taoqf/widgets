import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CornerLeftDownProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CornerLeftDown({ color: clr, size=24, ...props }: CornerLeftDownProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M14 15l-5 5-5-5"/><path d="M20 4h-7a4 4 0 00-4 4v12"/></svg>;
}
