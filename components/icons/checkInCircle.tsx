import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CheckInCircleProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CheckInCircle({ color: clr, size=24, ...props }: CheckInCircleProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M8 11.857l2.5 2.5L15.857 9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/></svg>;
}
