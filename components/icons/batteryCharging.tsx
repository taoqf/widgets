import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BatteryChargingProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function BatteryCharging({ color: clr, size=24, ...props }: BatteryChargingProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6"/></svg>;
}
