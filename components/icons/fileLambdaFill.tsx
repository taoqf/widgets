import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface FileLambdaFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function FileLambdaFill({ color: clr, size = 24, ...props }: FileLambdaFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} stroke={color} d="M18 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12z" /><path fill="var(--mm-icons-background)" stroke="none" d="M7.716 6.783c0-.433.353-.783.79-.783.679 0 1.314.056 1.878.44.532.363.893.948 1.268 1.658l.009.015 1.053 2.229 2.333 4.835.005.009.164.355c.078.17.142.31.207.44.101.204.165.296.21.345l.003.004c.022.027.086.105.575.105.436 0 .789.35.789.782a.786.786 0 01-.79.783c-.683 0-1.278-.113-1.743-.619a3.01 3.01 0 01-.459-.704c-.076-.152-.159-.334-.247-.526l-.14-.303-1.72-3.563-3.446 5.353a.794.794 0 01-1.09.239.779.779 0 01-.24-1.08l3.976-6.178-.855-1.81c-.377-.71-.583-.96-.756-1.079-.143-.097-.353-.165-.985-.165a.786.786 0 01-.79-.782z" /></svg>;
}
