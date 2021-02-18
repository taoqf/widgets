import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MessageSquareProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function MessageSquare({ color: clr, size=24, ...props }: MessageSquareProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
}
