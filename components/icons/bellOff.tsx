import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BellOffProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function BellOff({ color: clr, size=24, ...props }: BellOffProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M13.73 21a2 2 0 01-3.46 0m8.36-8A17.89 17.89 0 0118 8M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14m1-9a6 6 0 00-9.33-5M1 1l22 22"/></svg>;
}
