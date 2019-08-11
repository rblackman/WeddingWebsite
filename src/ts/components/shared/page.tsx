import React, { FC, useEffect } from 'react';
import '../../../scss/main-container.scss';
import Hero, { HeroProps } from './hero';

export type Pages = 'home' | 'itinerary' | 'lodging' | 'registry';

interface Props extends HeroProps {
	heroText: string;
	children?: JSX.Element[] | JSX.Element | string;
}

const Page: FC<Props> = (props: Props) => {

	useEffect(() => {
		document.title = props.heroText;
	});

	return (
		<div className={`page ${props.pageName}`}>
			<Hero {...props}>{props.heroText}</Hero>
			{props.children ? <div className="main-container">
				{props.children}
			</div> : null}
		</div>
	);
};
export default Page;
