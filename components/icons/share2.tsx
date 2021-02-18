import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface Share2Props extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Share2({ color: clr, size=24, ...props }: Share2Props) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"/></svg>;
}
