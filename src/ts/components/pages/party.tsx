import React, { FC } from 'react';
import '../../../scss/party.scss';
import Page from '../shared/page';
import PartyMember from '../shared/partyMember';

const Party: FC = () => (
	<Page pageName="party" heroType="partial" heroText="Wedding Party">
		<div className="party-grid">
			<div className="groom">
				<PartyMember name="Ryan Blackman" relation="Groom" />
				<PartyMember name="Adam Blackman" relation="Brother" role="Best Man" />
				<PartyMember name="Charles Romero" relation="Friend" />
				<PartyMember name="Evan Stone" relation="Brother-in-law" />
				<PartyMember name="Jared Black" relation="Friend" />
				<PartyMember name="Jason Peterson" relation="Friend" />
				<PartyMember name="Johnny Kraps" relation="Brother-in-law" />
				<PartyMember name="Jonathan Huff" relation="Friend" />
				<PartyMember name="Miles Godfry" relation="Friend" />
				<PartyMember name="Judah Stone" relation="Nephew" role="Ring Bearer" />
			</div>
			<div className="bride">
				<PartyMember name="Rachel Berry" relation="Bride" />
				<PartyMember name="Mardhiya Yasin" relation="Friend" role="Maid of Honor" />
				<PartyMember name="Rebecca Rosman" relation="Friend" role="Maid of Honor" />
				<PartyMember name="Cassandra Blackman" relation="Sister-in-Law" />
				<PartyMember name="Elizabeth Thigpen-Kraps" relation="Sister-in-Law" />
				<PartyMember name="Emily Dunne" relation="Friend" />
				<PartyMember name="Ione Keizer" relation="Friend" />
				<PartyMember name="Lauren Michelle Stephens" relation="Friend" />
				<PartyMember name="Rebecca Stone" relation="Sister-in-Law" />
				<PartyMember name="Brynlee Blackman" relation="Niece" role="Flower Girl" />
			</div>
		</div>
	</Page>
);

export default Party;
