import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CornerLeftUpProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CornerLeftUp({ color: clr, size=24, ...props }: CornerLeftUpProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M14 9L9 4 4 9"/><path d="M20 20h-7a4 4 0 01-4-4V4"/></svg>;
}
