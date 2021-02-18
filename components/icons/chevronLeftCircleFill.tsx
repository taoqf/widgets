import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ChevronLeftCircleFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ChevronLeftCircleFill({ color: clr, size = 24, ...props }: ChevronLeftCircleFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path fill="none" stroke="var(--mm-icons-background)" d="M13 8l-4 4 4 4" /></svg>;
}
