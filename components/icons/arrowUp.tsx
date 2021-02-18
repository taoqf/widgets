import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function ArrowUp({ color: clr, size=24, ...props }: ArrowUpProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 19V5m-7 7l7-7 7 7"/></svg>;
}
