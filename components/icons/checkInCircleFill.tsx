import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CheckInCircleFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CheckInCircleFill({ color: clr, size = 24, ...props }: CheckInCircleFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} stroke={color} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" /><path fill="none" stroke="var(--mm-icons-background)" d="M8 11.857l2.5 2.5L15.857 9" /></svg>;
}
