import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface BookOpenProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function BookOpen({ color: clr, size=24, ...props }: BookOpenProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zm20 0h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;
}
