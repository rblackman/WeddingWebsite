import * as React from 'react';
import { FC } from 'react';
import '../../../scss/hero.scss';

interface Props {
	type: 'full' | 'partial';
	imageClass: string;
	children: JSX.Element[] | JSX.Element | string;
}

const Hero: FC<Props> = (props: Props) => (
	<div className={`hero ${props.type} ${props.imageClass}`}>
		<p className="hero-text">
			{props.children}
		</p>
	</div>
);

export default Hero;
