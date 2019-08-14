import React, { FC } from 'react';
import Page from '../shared/page';

const Lodging: FC = () => (
	<Page
		pageName="lodging"
		heroType="partial"
		heroText="Lodging"
		heroImageVerticalAlign="top"
		textX={160}
		textY={65}
		viewBoxX={500}
		viewBoxY={100}
	>
		<h3>Allerton</h3>
		<p>
			We have a block of rooms reserved for Saturday at the Allerton Mansion and Grounds.
			</p>
		<p>
			Rooms can be booked by calling <a href="tel:+1-217-333-3287">(217) 333-3287</a>.
		</p>
	</Page>
);

export default Lodging;
