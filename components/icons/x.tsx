import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface XProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function X({ color: clr, size=24, ...props }: XProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M18 6L6 18M6 6l12 12"/></svg>;
}
