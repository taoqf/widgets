import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface ResetProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Reset({ color: clr, size = 24, ...props }: ResetProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" {...props} height={size} width={size} style={{ color }}><path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path></svg>;
}
