import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface XCircleProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function XCircle({ color: clr, size=24, ...props }: XCircleProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="12" cy="12" r="10" fill=""/><path stroke="" d="M15 9l-6 6m0-6l6 6"/></svg>;
}
