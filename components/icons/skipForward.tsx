import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface SkipForwardProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function SkipForward({ color: clr, size=24, ...props }: SkipForwardProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M5 4l10 8-10 8V4zm14 1v14"/></svg>;
}
