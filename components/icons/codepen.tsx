import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface CodepenProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Codepen({ color: clr, size=24, ...props }: CodepenProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zm0 20v-6.5"/><path d="M22 8.5l-10 7-10-7"/><path d="M2 15.5l10-7 10 7M12 2v6.5"/></svg>;
}
