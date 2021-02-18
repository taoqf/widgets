import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface FramerProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Framer({ color: clr, size=24, ...props }: FramerProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/></svg>;
}
