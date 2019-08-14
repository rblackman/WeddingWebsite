import React, { FC } from 'react';

interface Props {
	name: string;
	role?: string;
	relation: string;
}

const PartyMember: FC<Props> = (props: Props) => (
	<div className="party-member">
		<h4>{props.name}</h4>
		<h5>{props.relation}{props.role ? `/${props.role}` : null}</h5>
	</div>
);

export default PartyMember;
