import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface GitCommitProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function GitCommit({ color: clr, size=24, ...props }: GitCommitProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7m10.01 0h5.95"/></svg>;
}
