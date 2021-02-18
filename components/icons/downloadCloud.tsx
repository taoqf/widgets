import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface DownloadCloudProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function DownloadCloud({ color: clr, size=24, ...props }: DownloadCloudProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M8 17l4 4 4-4m-4-5v9"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/></svg>;
}
