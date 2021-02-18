import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BluetoothProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Bluetooth({ color: clr, size=24, ...props }: BluetoothProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"/></svg>;
}
