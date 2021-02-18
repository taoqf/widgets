import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface WifiOffProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function WifiOff({ color: clr, size=24, ...props }: WifiOffProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M1 1l22 22m-6.28-11.94A10.94 10.94 0 0119 12.55m-14 0a10.94 10.94 0 015.17-2.39m.54-5.11A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88m2.41 9.99a6 6 0 016.95 0M12 20h.01"/></svg>;
}
