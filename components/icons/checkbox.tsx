import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CheckboxProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Checkbox({ color: clr, size=24, ...props }: CheckboxProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M16.09 3H7.91A4.91 4.91 0 003 7.91v8.18A4.909 4.909 0 007.91 21h8.18A4.909 4.909 0 0021 16.09V7.91A4.909 4.909 0 0016.09 3z"/></svg>;
}
