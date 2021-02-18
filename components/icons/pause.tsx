import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface PauseProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Pause({ color: clr, size=24, ...props }: PauseProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path fill="" d="M6 4H10V20H6z"/><path fill="" d="M14 4H18V20H14z"/></svg>;
}
