import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface AlertCircleFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function AlertCircleFill({ color: clr, size = 24, ...props }: AlertCircleFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><circle cx="12" cy="12" r="10" fill={color} /><path stroke="var(--mm-icons-background)" d="M12 8v4m0 4h.01" /></svg>;
}
