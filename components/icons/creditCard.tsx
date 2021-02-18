import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CreditCardProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function CreditCard({ color: clr, size=24, ...props }: CreditCardProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10h22"/></svg>;
}
