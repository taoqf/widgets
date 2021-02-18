import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface FullScreenProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function FullScreen({ color: clr, size=24, ...props }: FullScreenProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7M3 9V3m0 0h6M3 3l7 7m11 5v6m0 0h-6m6 0l-7-7"/></svg>;
}
