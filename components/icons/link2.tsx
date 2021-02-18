import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface Link2Props extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Link2({ color: clr, size=24, ...props }: Link2Props) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3m-1 5h8"/></svg>;
}
