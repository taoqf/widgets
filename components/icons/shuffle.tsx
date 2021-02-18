import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ShuffleProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Shuffle({ color: clr, size=24, ...props }: ShuffleProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M16 3h5v5M4 20L21 3m0 13v5h-5m-1-6l6 6M4 4l5 5"/></svg>;
}
