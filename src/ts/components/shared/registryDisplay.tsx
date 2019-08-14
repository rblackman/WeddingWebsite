import React, { FC } from 'react';

interface Props {
	name: string;
	link: string;
	logo: string;
}

const RegistryDisplay: FC<Props> = (props: Props) => (
	<div className="registry-display">
		<svg className="logo"><use xlinkHref={`#${props.logo}`} /></svg>
		<a href={props.link} className="visit" target="_blank">{props.name}</a>
	</div>
);

export default RegistryDisplay;
