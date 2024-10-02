interface Window {
	onYouTubeIframeAPIReady: () => void;
}

declare namespace YT {
	interface Player {
		getIframe(): HTMLIFrameElement;
	}

	interface PlayerEvent {
		target: Player;
	}

	interface OnStateChangeEvent extends PlayerEvent {
		data: number;
	}

	const PlayerState: {
		PLAYING: number;
		ENDED: number;
	};
}
