import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MapPinProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function MapPin({ color: clr, size=24, ...props }: MapPinProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
