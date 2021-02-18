import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ChevronsDownProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ChevronsDown({ color: clr, size=24, ...props }: ChevronsDownProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>;
}
