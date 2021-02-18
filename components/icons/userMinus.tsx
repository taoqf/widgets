import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface UserMinusProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function UserMinus({ color: clr, size=24, ...props }: UserMinusProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M23 11h-6"/></svg>;
}
