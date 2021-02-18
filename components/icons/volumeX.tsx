import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface VolumeXProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function VolumeX({ color: clr, size=24, ...props }: VolumeXProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M11 5L6 9H2v6h4l5 4V5zm12 4l-6 6m0-6l6 6"/></svg>;
}
