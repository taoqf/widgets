import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BatteryProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Battery({ color: clr, size=24, ...props }: BatteryProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="18" height="12" x="1" y="6" rx="2" ry="2"/><path d="M23 13v-2"/></svg>;
}
