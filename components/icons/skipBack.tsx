import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface SkipBackProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function SkipBack({ color: clr, size=24, ...props }: SkipBackProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M19 20L9 12l10-8v16zM5 19V5"/></svg>;
}
