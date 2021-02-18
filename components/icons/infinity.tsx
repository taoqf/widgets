import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface InfinityProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Infinity({ color: clr, size=24, ...props }: InfinityProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M13.833 8.875S15.085 7 18.043 7C21 7 23 9.5 23 12s-1.784 5-4.864 5-4.914-3.124-6.136-5c-1.222-1.875-3.392-5-6.446-5S1 9.5 1 12s1.351 5 4.648 5c3.296 0 4.519-1.875 4.519-1.875"/></svg>;
}
