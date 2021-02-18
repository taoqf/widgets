import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface RotateCwProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function RotateCw({ color: clr, size=24, ...props }: RotateCwProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>;
}
