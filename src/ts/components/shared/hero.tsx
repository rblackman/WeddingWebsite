import React, { FC } from 'react';
import '../../../scss/hero.scss';
import { Pages } from './page';

type HeroType = 'full' | 'partial';

export interface HeroProps {
	heroType: HeroType;
	pageName: Pages;
	heroImageVerticalAlign?: 'top' | 'center' | 'bottom';
	heroImageHorizontalAlign?: 'left' | 'center' | 'right';
}

interface Props extends HeroProps {
	children?: JSX.Element[] | JSX.Element | string;
}

const Hero: FC<Props> = (props: Props) => (
	<div
		className={`hero ${props.heroType} ${props.pageName}`}
		style={{
			backgroundPosition: `${props.heroImageVerticalAlign || 'center'} ${props.heroImageHorizontalAlign || 'center'}`
		}}
	>
		<h2 className="hero-text">
			{props.children}
		</h2>
	</div>
);

export default Hero;
