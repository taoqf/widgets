import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface XOctagonProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function XOctagon({ color: clr, size=24, ...props }: XOctagonProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6m0-6l6 6"/></svg>;
}
