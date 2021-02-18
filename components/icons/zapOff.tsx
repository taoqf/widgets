import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ZapOffProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ZapOff({ color: clr, size=24, ...props }: ZapOffProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12.41 6.75L13 2l-2.43 2.92m8 7.99L21 10h-5.34M8 8l-5 6h9l-1 8 5-6M1 1l22 22"/></svg>;
}
