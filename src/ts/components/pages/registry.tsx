import React, { FC } from 'react';
import '../../../scss/registry.scss';
import Page from '../shared/page';
import RegistryDisplay from '../shared/registryDisplay';

const mrLink: string = 'https://www.myregistry.com/giftlist/r2b2wedding';
const knotLink: string = 'https://www.theknot.com/us/d26qkv/registry';

const Registry: FC = () => (
	<Page
		pageName="registry"
		heroType="partial"
		heroText="Registry"
		textX={98}
		textY={65}
		viewBoxX={400}
		viewBoxY={100}
	>
		<p>
			We have a gift registry available
			at <a href={mrLink}>MyRegistry</a> and a cash registry
			available at <a href={knotLink}>The Knot</a>.
		</p>
		<div className="registry-grid">
			<RegistryDisplay
				name="Gift"
				link={mrLink}
				logo="myregistry"
			/>
			<RegistryDisplay
				name="Cash"
				link={knotLink}
				logo="knot"
			/>
		</div>
	</Page>
);

export default Registry;
