import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface Volume2Props extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Volume2({ color: clr, size=24, ...props }: Volume2Props) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M11 5L6 9H2v6h4l5 4V5zm8.07-.07a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>;
}
