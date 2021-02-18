import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface Minimize2Props extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Minimize2({ color: clr, size=24, ...props }: Minimize2Props) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M4 14h6v6m10-10h-6V4m0 6l7-7M3 21l7-7"/></svg>;
}
