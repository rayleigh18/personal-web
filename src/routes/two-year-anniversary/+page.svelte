<script lang="ts">
	import memoryBirthday from '../../assets/anniversary-memory-birthday.png';
	import memoryMetro from '../../assets/anniversary-memory-metro.png';
	import memoryBeach from '../../assets/anniversary-memory-beach.png';
</script>

<svelte:head>
	<title>Dea — two years, one night</title>
	<meta
		name="description"
		content="A private invitation to mark two years together—date, time, and place kept close."
	/>
</svelte:head>

<main class="invite" aria-labelledby="invite-title">
	<div class="atmosphere" aria-hidden="true">
		<div class="glow glow--a"></div>
		<div class="glow glow--b"></div>
		<div class="grid-overlay"></div>
		<div class="noise"></div>
		<div class="constellation"></div>
	</div>

	<div class="shell">
		<p class="eyebrow">Two years · private map</p>

		<h1 id="invite-title" class="headline">
			<span class="headline__line">Dear <span class="accent">Dea</span>,</span>
			<span class="headline__sub">this is where the evening begins.</span>
		</h1>

		<p class="lede">
			I’m not trying to stage a story that could belong to anyone. I want one night that belongs to
			us—slow, unhurried, and honest—the kind where the city feels smaller because we already found
			each other in it.
		</p>

		<section class="artifact" aria-labelledby="artifact-heading">
			<h2 id="artifact-heading" class="sr-only">Fragments from two years</h2>
			<ul class="fragments">
				<li>
					<span class="fragments__tag">000</span>
					<span class="fragments__text">The first time it stopped feeling like coincidence.</span>
				</li>
				<li>
					<span class="fragments__tag">001</span>
					<span class="fragments__text">The ordinary Tuesdays that became the proof.</span>
				</li>
				<li>
					<span class="fragments__tag">002</span>
					<span class="fragments__text"><span class="placeholder">Bandung</span></span>
				</li>
			</ul>

			<div class="memories" aria-labelledby="memories-heading">
				<h3 id="memories-heading" class="memories__title">Saved moments</h3>
				<ul class="memories__grid">
					<li>
						<figure class="memories__figure">
							<img
								class="memories__img"
								src={memoryBirthday}
								width="800"
								height="1067"
								loading="lazy"
								decoding="async"
								alt="You both smiling together at home with flowers and a small celebration cake."
							/>
							<figcaption class="memories__caption">Home, full of light</figcaption>
						</figure>
					</li>
					<li>
						<figure class="memories__figure">
							<img
								class="memories__img"
								src={memoryMetro}
								width="800"
								height="1067"
								loading="lazy"
								decoding="async"
								alt="You on a bench at a bright metro station, playful and close."
							/>
							<figcaption class="memories__caption">Between platforms</figcaption>
						</figure>
					</li>
					<li>
						<figure class="memories__figure">
							<img
								class="memories__img"
								src={memoryBeach}
								width="800"
								height="1067"
								loading="lazy"
								decoding="async"
								alt="Walking barefoot on the sand at sunset, sea and golden sky behind you."
							/>
							<figcaption class="memories__caption">Golden hour, still going</figcaption>
						</figure>
					</li>
				</ul>
			</div>
		</section>

		<div class="map-card" role="region" aria-labelledby="map-heading">
			<div class="map-pin" aria-hidden="true">
				<span class="map-pin__ring"></span>
				<span class="map-pin__dot"></span>
			</div>
			<div class="map-card__body">
				<p id="map-heading" class="map-card__label">Coordinates for the night</p>
				<dl class="map-card__details">
					<div class="map-card__row">
						<dt>When</dt>
						<dd>
							<span class="map-card__datetime"><span class="placeholder">03 May 2026</span></span>
							<span class="map-card__time"><span class="placeholder">18:00</span></span>
						</dd>
					</div>
					<div class="map-card__row">
						<dt>Where</dt>
						<dd>
							<a
								class="map-card__place"
								href="https://maps.app.goo.gl/A4qgphsYn2jgLVeJ9"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="placeholder">Picca Steakroom</span>
								<span class="map-card__ext" aria-hidden="true">↗</span>
								<span class="sr-only">(opens map)</span>
							</a>
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<p class="closing">
			If you’re there, I’m there. No performance—just you, me, and the soft permission to be
			grateful out loud.
		</p>

		<p class="signoff">
			Always,<br />
			<span class="signoff__name"><span class="placeholder">Okoya</span></span>
		</p>
	</div>
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Syne:wght@400;500;600&display=swap');

	:global(body) {
		margin: 0;
		min-height: 100vh;
		background: #07060a;
		color: #ede8e0;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.invite {
		position: relative;
		min-height: 100vh;
		overflow-x: clip;
		padding: clamp(1.5rem, 4vw, 3rem);
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-family: 'Syne', system-ui, sans-serif;
		font-weight: 400;
		letter-spacing: 0.01em;
		line-height: 1.6;
	}

	.atmosphere {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.35;
		mix-blend-mode: screen;
		animation: drift 28s ease-in-out infinite;
	}

	.glow--a {
		width: min(90vw, 520px);
		height: min(90vw, 520px);
		left: -15%;
		top: 10%;
		background: radial-gradient(circle at 30% 30%, #6b4b3a 0%, transparent 55%);
		animation-delay: -4s;
	}

	.glow--b {
		width: min(70vw, 420px);
		height: min(70vw, 420px);
		right: -10%;
		bottom: 5%;
		background: radial-gradient(circle at 70% 40%, #2a3a5c 0%, transparent 60%);
		animation-delay: -12s;
	}

	.grid-overlay {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size:
			48px 48px,
			48px 48px;
		mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%);
		opacity: 0.5;
	}

	.noise {
		position: absolute;
		inset: -20%;
		opacity: 0.08;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		animation: grain 6s steps(3) infinite;
	}

	.constellation {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 12% 22%, rgba(255, 248, 232, 0.35) 0.5px, transparent 1px),
			radial-gradient(circle at 38% 18%, rgba(255, 255, 255, 0.2) 0.45px, transparent 1px),
			radial-gradient(circle at 72% 28%, rgba(255, 255, 255, 0.25) 0.4px, transparent 1px),
			radial-gradient(circle at 88% 40%, rgba(255, 248, 232, 0.3) 0.5px, transparent 1px),
			radial-gradient(circle at 22% 62%, rgba(255, 255, 255, 0.18) 0.4px, transparent 1px),
			radial-gradient(circle at 55% 55%, rgba(255, 255, 255, 0.22) 0.45px, transparent 1px),
			radial-gradient(circle at 80% 70%, rgba(255, 248, 232, 0.28) 0.45px, transparent 1px);
		background-size: 100% 100%;
		opacity: 0.55;
	}

	.shell {
		position: relative;
		z-index: 1;
		width: min(46rem, 100%);
		margin-top: clamp(0.5rem, 3vh, 2rem);
		margin-bottom: clamp(2rem, 6vh, 4rem);
		padding: clamp(1.75rem, 5vw, 2.75rem);
		border: 1px solid rgba(237, 232, 224, 0.12);
		border-radius: 2px;
		background: linear-gradient(
			145deg,
			rgba(18, 16, 22, 0.82) 0%,
			rgba(10, 9, 14, 0.92) 50%,
			rgba(12, 11, 17, 0.88) 100%
		);
		box-shadow:
			0 32px 80px rgba(0, 0, 0, 0.45),
			inset 0 1px 0 rgba(255, 255, 255, 0.06);
		animation: rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.eyebrow {
		margin: 0 0 1.25rem;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		color: rgba(237, 232, 224, 0.5);
	}

	.headline {
		margin: 0 0 1.25rem;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 500;
		font-size: clamp(2rem, 6vw, 2.85rem);
		line-height: 1.15;
		color: #f6f1ea;
	}

	.headline__line {
		display: block;
	}

	.headline__sub {
		display: block;
		margin-top: 0.35em;
		font-size: 0.62em;
		font-style: italic;
		color: rgba(237, 232, 224, 0.75);
		font-weight: 500;
	}

	.accent {
		color: #e8c4a8;
		font-weight: 600;
	}

	.lede {
		margin: 0 0 2rem;
		max-width: 38ch;
		font-size: 0.98rem;
		color: rgba(237, 232, 224, 0.78);
	}

	.artifact {
		margin-bottom: 2rem;
		padding: 1rem 1.1rem;
		border-left: 2px solid rgba(232, 196, 168, 0.35);
		background: rgba(7, 6, 10, 0.35);
	}

	.fragments {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.fragments li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
		align-items: start;
		font-size: 0.9rem;
		color: rgba(237, 232, 224, 0.72);
	}

	.fragments__tag {
		font-variant-numeric: tabular-nums;
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		color: rgba(232, 196, 168, 0.55);
		padding-top: 0.15rem;
	}

	.memories {
		margin-top: 1.75rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(237, 232, 224, 0.1);
	}

	.memories__title {
		margin: 0 0 1rem;
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: rgba(237, 232, 224, 0.48);
	}

	.memories__grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(1rem, auto);
		gap: clamp(0.75rem, 2vw, 1rem);
		align-items: end;
	}

	.memories__grid li {
		position: relative;
	}

	.memories__grid li:nth-child(1) {
		grid-column: 1 / span 5;
		grid-row: 1 / span 2;
	}

	.memories__grid li:nth-child(2) {
		grid-column: 6 / -1;
		grid-row: 1;
		padding-top: clamp(1.5rem, 5vw, 3rem);
	}

	.memories__grid li:nth-child(3) {
		grid-column: 4 / -1;
		grid-row: 2;
		margin-top: -1.25rem;
	}

	.memories__figure {
		position: relative;
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border: 1px solid rgba(237, 232, 224, 0.14);
		border-radius: 18px;
		background: rgba(246, 241, 234, 0.04);
		box-shadow:
			0 18px 46px rgba(0, 0, 0, 0.42),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	.memories__img {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: inherit;
		transition:
			transform 0.35s ease,
			filter 0.35s ease;
		filter: saturate(0.9) contrast(1.02);
	}

	.memories__grid li:nth-child(1) .memories__img {
		aspect-ratio: 4 / 5.35;
		object-position: 52% 44%;
	}

	.memories__grid li:nth-child(2) .memories__img {
		aspect-ratio: 16 / 11;
		object-position: 58% 45%;
	}

	.memories__grid li:nth-child(3) .memories__img {
		aspect-ratio: 16 / 10;
		object-position: 52% 72%;
	}

	.memories__figure::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background:
			linear-gradient(180deg, transparent 46%, rgba(7, 6, 10, 0.72) 100%),
			radial-gradient(circle at 18% 14%, rgba(232, 196, 168, 0.16), transparent 36%);
		pointer-events: none;
	}

	.memories__figure:hover .memories__img,
	.memories__figure:focus-within .memories__img {
		transform: scale(1.035);
		filter: saturate(1) contrast(1.04);
	}

	.memories__caption {
		position: absolute;
		z-index: 1;
		left: 0.85rem;
		right: 0.85rem;
		bottom: 0.8rem;
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		color: rgba(246, 241, 234, 0.78);
		line-height: 1.35;
		text-shadow: 0 1px 16px rgba(0, 0, 0, 0.75);
	}

	.placeholder {
		border-bottom: 1px dashed rgba(237, 232, 224, 0.28);
		padding-bottom: 1px;
	}

	.map-card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.25rem;
		align-items: start;
		padding: 1.35rem 1.25rem;
		margin-bottom: 2rem;
		border: 1px solid rgba(237, 232, 224, 0.1);
		background: radial-gradient(ellipse at 20% 0%, rgba(232, 196, 168, 0.08), transparent 55%);
		animation: floaty 9s ease-in-out infinite;
	}

	.map-pin {
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		display: grid;
		place-items: center;
		margin-top: 0.15rem;
	}

	.map-pin__ring {
		position: absolute;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid rgba(232, 196, 168, 0.45);
		border-radius: 50%;
		animation: ping 3.2s ease-out infinite;
		opacity: 0.7;
	}

	.map-pin__dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: #e8c4a8;
		box-shadow: 0 0 18px rgba(232, 196, 168, 0.55);
	}

	.map-card__label {
		margin: 0 0 0.75rem;
		font-size: 0.7rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgba(237, 232, 224, 0.45);
	}

	.map-card__details {
		margin: 0;
	}

	.map-card__row {
		display: grid;
		grid-template-columns: 4.5rem 1fr;
		gap: 0.75rem;
		padding: 0.55rem 0;
		border-top: 1px solid rgba(237, 232, 224, 0.08);
	}

	.map-card__row:first-of-type {
		border-top: none;
		padding-top: 0;
	}

	.map-card__row dt {
		margin: 0;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: rgba(237, 232, 224, 0.42);
	}

	.map-card__row dd {
		margin: 0;
		font-size: 0.95rem;
		color: rgba(246, 241, 234, 0.92);
	}

	.map-card__datetime {
		display: block;
	}

	.map-card__time {
		display: block;
		margin-top: 0.2rem;
		font-size: 0.85rem;
		color: rgba(237, 232, 224, 0.55);
	}

	.map-card__place {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: #e8c4a8;
		text-decoration: none;
		transition:
			color 0.2s ease,
			text-underline-offset 0.2s ease;
	}

	.map-card__place:hover {
		color: #f2dcc8;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.map-card__place:focus-visible {
		outline: 2px solid #e8c4a8;
		outline-offset: 3px;
		border-radius: 2px;
	}

	.map-card__ext {
		font-size: 0.85em;
		opacity: 0.7;
	}

	.closing {
		margin: 0 0 1.5rem;
		max-width: 40ch;
		font-size: 0.92rem;
		color: rgba(237, 232, 224, 0.7);
	}

	.signoff {
		margin: 0;
		font-size: 0.95rem;
		color: rgba(237, 232, 224, 0.78);
	}

	.signoff__name {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 1.25rem;
		color: #f6f1ea;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes drift {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(2%, -3%) scale(1.05);
		}
	}

	@keyframes grain {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-2%, 2%);
		}
		100% {
			transform: translate(2%, -1%);
		}
	}

	@keyframes floaty {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	@keyframes ping {
		0% {
			transform: scale(0.85);
			opacity: 0.9;
		}
		70% {
			transform: scale(1.15);
			opacity: 0;
		}
		100% {
			transform: scale(1.15);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.shell,
		.glow,
		.noise,
		.map-card,
		.map-pin__ring {
			animation: none !important;
		}

		.memories__img {
			transition: none;
		}
	}

	@media (max-width: 520px) {
		.map-card {
			grid-template-columns: 1fr;
		}

		.map-pin {
			justify-self: start;
		}

		.map-card__row {
			grid-template-columns: 1fr;
			gap: 0.35rem;
		}

		.memories__grid {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}

		.memories__grid li:nth-child(1),
		.memories__grid li:nth-child(2),
		.memories__grid li:nth-child(3) {
			grid-column: auto;
			grid-row: auto;
			margin-top: 0;
			padding-top: 0;
		}

		.memories__img {
			aspect-ratio: 4 / 5;
			max-height: min(70vh, 420px);
			margin-inline: auto;
		}

		.memories__grid li:nth-child(1) .memories__img,
		.memories__grid li:nth-child(2) .memories__img,
		.memories__grid li:nth-child(3) .memories__img {
			aspect-ratio: 4 / 5;
		}
	}
</style>
