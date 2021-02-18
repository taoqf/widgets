import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface LifeBuoyProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function LifeBuoy({ color: clr, size=24, ...props }: LifeBuoyProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24m-4.24-9.9l4.24-4.24m-4.24 4.24l3.53-3.53M4.93 19.07l4.24-4.24"/></svg>;
}
