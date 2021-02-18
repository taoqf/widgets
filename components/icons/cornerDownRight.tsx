import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CornerDownRightProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CornerDownRight({ color: clr, size=24, ...props }: CornerDownRightProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M15 10l5 5-5 5"/><path d="M4 4v7a4 4 0 004 4h12"/></svg>;
}
