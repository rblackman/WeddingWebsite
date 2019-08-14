import React, { FC } from 'react';
import '../../../scss/itinerary.scss';
import Page from '../shared/page';

const Itinerary: FC = () => (
	<Page
		pageName="itinerary"
		heroType="partial"
		heroText="Itinerary"
		textX={90}
		textY={65}
		viewBoxX={400}
		viewBoxY={100}
	>
		<h3>Saturday, November 23, 2019</h3>
		<h4>Ceremony</h4>
		<dl>
			<dt>Time</dt>
			<dd>2:00 PM</dd>
			<dt>Location</dt>
			<dd>
				<span className="block">First Mennonite Church of Champaign-Urbana, <i>Urbana</i></span>
				<a href="https://goo.gl/maps/CG8WvHx2YVAyvygA7" target="_blank" className="map-button">Map</a>
			</dd>
		</dl>

		<h4>Cocktail Hour</h4>
		<dl>
			<dt>Time</dt>
			<dd>4:00 PM</dd>
			<dt>Location</dt>
			<dd>
				<span className="block">Allerton Mansion, <i>Monticello</i></span>
				<a href="https://goo.gl/maps/7P3R8Yw5PBjehf6fA" target="_blank" className="map-button">Map</a>
			</dd>
		</dl>

		<h4>Reception</h4>
		<dl>
			<dt>Time</dt>
			<dd>5:00 PM</dd>
			<dt>Location</dt>
			<dd>
				<span className="block">Allerton Mansion, <i>Monticello</i></span>
				<a href="https://goo.gl/maps/7P3R8Yw5PBjehf6fA" target="_blank" className="map-button">Map</a>
			</dd>
		</dl>

		<h3>Sunday, November 24, 2019</h3>
		<h4>Out of Town Guest Brunch</h4>
		<dl>
			<dt>Time</dt>
			<dd>10:00 AM</dd>
			<dt>Location</dt>
			<dd>
				<span className="block">Allerton Mansion, <i>Monticello</i></span>
				<a href="https://goo.gl/maps/7P3R8Yw5PBjehf6fA" target="_blank" className="map-button">Map</a>
			</dd>
		</dl>
	</Page>
);

export default Itinerary;
