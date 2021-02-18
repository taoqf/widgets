import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface DollarSignProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function DollarSign({ color: clr, size=24, ...props }: DollarSignProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 1v22m5-18H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
}
