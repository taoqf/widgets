import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MousePointerProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function MousePointer({ color: clr, size=24, ...props }: MousePointerProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zm10 10l6 6"/></svg>;
}
