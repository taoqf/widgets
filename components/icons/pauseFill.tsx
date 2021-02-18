import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface PauseFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function PauseFill({ color: clr, size = 24, ...props }: PauseFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} d="M6 4H10V20H6z" /><path fill={color} d="M14 4H18V20H14z" /></svg>;
}
