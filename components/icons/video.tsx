import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface VideoProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Video({ color: clr, size=24, ...props }: VideoProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M23 7l-7 5 7 5V7z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>;
}
