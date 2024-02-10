import { writable } from 'svelte/store';

export const yesSignal = writable(false);
export const noSignal = writable(false);

export const yesButtonTypeSize = writable(0);

export const MAX_VALUE = 10;
export function handleButtonTryAgain() {
	yesSignal.set(false);
	noSignal.set(false);
	yesButtonTypeSize.set(0);
}
export function handleButtonClicked(val: boolean) {
	if (val) {
		yesSignal.set(val);
		return;
	}

	yesButtonTypeSize.update((valIn) => {
		if (valIn + 1 > MAX_VALUE) {
			noSignal.set(true);
			return valIn;
		}
		return valIn + 1;
	});
}
