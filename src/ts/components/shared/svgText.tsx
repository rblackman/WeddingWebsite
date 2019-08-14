import React, { FC } from 'react';

export interface SvgTextProps {
	viewBoxX: number;
	viewBoxY: number;
	textX: number;
	textY: number;
}

interface Props extends SvgTextProps {
	children: JSX.Element | JSX.Element[] | string;
}

const SvgText: FC<Props> = (props: Props) => (
	<svg viewBox={`0 0 ${props.viewBoxX} ${props.viewBoxY}`}>
		<text x={props.textX} y={props.textY}>{props.children}</text>
	</svg>
);

export default SvgText;
