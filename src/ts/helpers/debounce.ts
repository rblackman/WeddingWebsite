// tslint:disable-next-line:ban-types
export function debounce(this: any, callback: Function, wait: number, context: any = this) {
	let timeout: number | null = null;

	const later: () => any = () =>
		callback.apply(context);

	return () => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(later, wait);
	};
}
