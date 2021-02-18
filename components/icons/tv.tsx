import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface TvProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Tv({ color: clr, size=24, ...props }: TvProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><path d="M17 2l-5 5-5-5"/></svg>;
}
