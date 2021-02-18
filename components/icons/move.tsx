import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface MoveProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Move({ color: clr, size=24, ...props }: MoveProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M5 9l-3 3 3 3M9 5l3-3 3 3m0 14l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>;
}
