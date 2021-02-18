import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface AnchorProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Anchor({ color: clr, size=24, ...props }: AnchorProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><circle cx="12" cy="5" r="3"/><path d="M12 22V8m-7 4H2a10 10 0 0020 0h-3"/></svg>;
}
