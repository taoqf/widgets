import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface FileTextProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function FileText({ color: clr, size=24, ...props }: FileTextProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8"/></svg>;
}
