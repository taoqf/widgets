import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface EmojiProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Emoji({ color: clr, size=24, ...props }: EmojiProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path fill="currentColor" d="M7 14.5s0 4 5 4 5-4 5-4"/><path d="M7 14.5s0 4 5 4 5-4 5-4H7z"/><circle cx="15.5" cy="9.5" r=".75"/><circle cx="8.5" cy="9.5" r=".75"/></svg>;
}
