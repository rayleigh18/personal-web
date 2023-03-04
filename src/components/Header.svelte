<script>
	let stateOpen = true;
	let classUlNav = '';
	function toggleNavbar() {
		stateOpen = !stateOpen;

		if (stateOpen) {
			classUlNav = 'active';
		} else {
			classUlNav = '';
		}
		console.log(classUlNav);
	}
</script>

<main>
	<div class="logo">
		<a href="/">I</a>
	</div>
	<nav>
		<div class="burger" on:click={toggleNavbar} on:keypress={toggleNavbar}>
			<div class="line-1" />
			<div class="line-2" />
			<div class="line-3" />
		</div>
	</nav>
</main>

<style lang="scss">
	$font-color: #ccd6f6;

	main {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		background-image: none;
		background-color: var(--background-color);
		position: relative;
		z-index: 100;

		.logo {
			background-image: none;
			text-transform: uppercase;
			letter-spacing: 5px;
			font-size: 80px;
			a {
				color: $font-color;
			}
		}
	}

	.burger {
		background-color: var(--background-color);
		display: block;
		cursor: pointer;

		div {
			width: 25px;
			height: 5px;
			background-image: none;
			background-color: $font-color;
			margin: 5px;
		}
	}
</style>
