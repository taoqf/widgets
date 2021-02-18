import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface PinProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Pin({ color: clr, size=24, ...props }: PinProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M6.52 10.2l4.24 5.65m.01-9.9a2 2 0 000-2.83l-.7-.71L3 9.49l.7.7a1.998 1.998 0 002.83 0m4.24 5.66l5.66-5.66m-5.66 5.66s-1.76 2.47.71 4.95l9.89-9.9c-2.47-2.48-4.95-.7-4.95-.7m-5.65 5.65l5.65-5.65m0 0l-5.66-4.25m5.66 9.9l4.24 4.24"/></svg>;
}