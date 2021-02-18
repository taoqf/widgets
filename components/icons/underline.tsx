import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface UnderlineProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Underline({ color: clr, size=24, ...props }: UnderlineProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16"/></svg>;
}
