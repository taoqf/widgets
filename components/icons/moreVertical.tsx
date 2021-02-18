import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MoreVerticalProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function MoreVertical({ color: clr, size=24, ...props }: MoreVerticalProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>;
}
