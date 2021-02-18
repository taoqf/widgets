import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CloudDrizzleProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CloudDrizzle({ color: clr, size=24, ...props }: CloudDrizzleProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M8 19v2m0-8v2m8 4v2m0-8v2m-4 6v2m0-8v2m8-.42A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg>;
}
