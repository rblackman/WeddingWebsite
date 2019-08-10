import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components/app';

(() => {
	const jsxElement: JSX.Element = <App />;
	const htmlElement: HTMLElement | null = document.getElementById('app');
	ReactDom.render(jsxElement, htmlElement);
})();
