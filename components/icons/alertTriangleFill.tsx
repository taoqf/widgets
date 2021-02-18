import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface AlertTriangleFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function AlertTriangleFill({ color: clr, size = 24, ...props }: AlertTriangleFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><path stroke="var(--mm-icons-background)" d="M12 9v4m0 4h.01" /></svg>;
}
