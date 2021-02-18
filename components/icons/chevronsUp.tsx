import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ChevronsUpProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ChevronsUp({ color: clr, size=24, ...props }: ChevronsUpProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M17 11l-5-5-5 5m10 7l-5-5-5 5"/></svg>;
}
