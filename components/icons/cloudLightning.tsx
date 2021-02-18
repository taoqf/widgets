import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CloudLightningProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CloudLightning({ color: clr, size=24, ...props }: CloudLightningProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><path d="M13 11l-4 6h6l-4 6"/></svg>;
}
