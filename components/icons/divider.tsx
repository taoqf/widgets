import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface DividerProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Divider({ color: clr, size=24, ...props }: DividerProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M16.88 3.549L7.12 20.451"/></svg>;
}
