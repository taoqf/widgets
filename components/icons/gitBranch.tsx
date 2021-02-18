import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface GitBranchProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function GitBranch({ color: clr, size=24, ...props }: GitBranchProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>;
}
