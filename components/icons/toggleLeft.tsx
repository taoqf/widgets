import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ToggleLeftProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ToggleLeft({ color: clr, size=24, ...props }: ToggleLeftProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></svg>;
}
