import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CheckCircleProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CheckCircle({ color: clr, size=24, ...props }: CheckCircleProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>;
}
