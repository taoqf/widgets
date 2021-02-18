import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface GitMergeProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function GitMerge({ color: clr, size=24, ...props }: GitMergeProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 009 9"/></svg>;
}
