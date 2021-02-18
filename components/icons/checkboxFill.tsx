import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CheckboxFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CheckboxFill({ color: clr, size = 24, ...props }: CheckboxFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} stroke="none" d="M7.91 3h8.18a4.908 4.908 0 014.31 2.554l-8.273 8.377-2.592-2.638a.75.75 0 10-1.07 1.05l3.125 3.182a.75.75 0 001.069.002l8.281-8.386c.04.25.06.507.06.768v8.182A4.909 4.909 0 0116.09 21H7.91A4.909 4.909 0 013 16.09V7.91A4.91 4.91 0 017.91 3z" /></svg>;
}
