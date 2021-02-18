import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CloudRainProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CloudRain({ color: clr, size=24, ...props }: CloudRainProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M16 13v8m-8-8v8m4-6v8m8-6.42A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg>;
}
