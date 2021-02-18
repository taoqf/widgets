import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ZoomInProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ZoomIn({ color: clr, size=24, ...props }: ZoomInProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6m-3-3h6"/></svg>;
}
