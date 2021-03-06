import React, { FC } from 'react';
import '../../../scss/hero.scss';
import { Pages } from './page';
import SvgText, { SvgTextProps } from './svgText';

type HeroType = 'full' | 'partial';

export interface HeroProps {
	heroType: HeroType;
	pageName: Pages;
	heroImageVerticalAlign?: 'top' | 'center' | 'bottom';
	heroImageHorizontalAlign?: 'left' | 'center' | 'right';
}

interface Props extends HeroProps, SvgTextProps {
	children: JSX.Element[] | JSX.Element | string;
}

const Hero: FC<Props> = (props: Props) => (
	<div
		className={`hero ${props.heroType} ${props.pageName}`}
		style={{
			backgroundPosition: `${props.heroImageVerticalAlign || 'center'} ${props.heroImageHorizontalAlign || 'center'}`
		}}
	>
		<h2 className="hero-text">
			<SvgText {...props}>
				{props.children}
			</SvgText>
		</h2>
	</div>
);

export default Hero;
