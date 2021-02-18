import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface HardDriveProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function HardDrive({ color: clr, size=24, ...props }: HardDriveProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M22 12H2m3.45-6.89L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11zM6 16h.01M10 16h.01"/></svg>;
}
