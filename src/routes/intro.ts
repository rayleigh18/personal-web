import { writable } from 'svelte/store';

export const isLetsConnectOpened = writable(false);

export function handleLetsConnect(val: boolean) {
	if (val) {
		isLetsConnectOpened.set(val);
		return;
	}
	isLetsConnectOpened.update((valIn) => {
		return !valIn;
	});
}
