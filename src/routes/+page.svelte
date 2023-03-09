<script>
	import Header from '../components/Header.svelte';
	import { handleLetsConnect, isLetsConnectOpened } from './intro';
	let classSocialMedia = 'disabled';
	let classButtonConnect = 'big-connect';

	isLetsConnectOpened.subscribe((isLetsConnectOpenedValue) => {
		classSocialMedia = isLetsConnectOpenedValue ? 'social-media' : 'disabled';
		classButtonConnect = (isLetsConnectOpenedValue ? 'disabled' : 'big-connect');
	});
</script>

<svelte:head>
	<title>See Oktavianus</title>
</svelte:head>

<main>
	<Header />
	<div class="introduction">
		<p class="hi">Hello! I'm</p>
		<p><b>Oktavianus Irvan Sitanggang</b></p>
		<p>Software Developer</p>
		<p>I like to make things happen</p>
		<p>
			I work on many project, whether software development (backend and frontend) or robotic.
			Currently, I'm focused on backend development and find my way in this world. Put the bread to
			the table by working on Xendit.
		</p>
		<div
			on:mouseenter={() => handleLetsConnect(true)}
			on:mouseleave={() => handleLetsConnect(false)}
		>
			<button class={classButtonConnect}>Lets connect</button>
			<div class={classSocialMedia}>
				<a href="https://www.instagram.com/irvan.sitanggang/"><span class="fa fa-instagram" /></a>
				<a href="https://twitter.com/FindIrvan/"><span class="fa fa-twitter" /></a>
				<a href="https://www.linkedin.com/in/oktavianusirvans/"><span class="fa fa-linkedin" /></a>
				<a href="https://www.facebook.com/irvan.sitanggang.98/"><span class="fa fa-facebook" /></a>
			</div>
		</div>
	</div>

	<div class="content-portfolio">
		<div>
			<h1>About</h1>
			<p>
				Hey, my name is Oktavianus Irvan Sitanggang and I use Okta as my nickname. My old and close
				friend call me Okta. I'm a software developer who work on many thing, front-end, back-end,
				architecture, microcontroller etc. I'm from Indonesia. I like music, books, and interacting.
				I'm curious about how the world work, and want to learn new things, especially technologies
			</p>
		</div>
		<div>
			<h1>Where I've worked</h1>
			<div>
				<h2>Paragon Technology and Innovation</h2>
				<h4 class="work-date">2021-2022</h4>
				<ul>
					<li>Work as an intern</li>
					<li>
						I create robot with my teams that run automatically for factory use for my thesis using
						various sensor (e.g. camera, lidar, encoder) and actuator (mostly motor)
					</li>
					<li>For the mechanical, I use Inventor, 3d-print, drill, hammer, and other tools</li>
					<li>For the electrical, I use Altium</li>
					<li>For Robot Programming, I use ROS with c++ and python that run in</li>
					<li>For microcontroller, use stm32 board and arduino</li>
				</ul>
			</div>

			<div>
				<h2>Samsung Research Institute Indonesia</h2>
				<h4 class="work-date">July 2022 - September 2022</h4>
				<ul>
					<li>Work as full time employee</li>
					<li>In here, I create personal website that used in the internal company</li>
					<li>I work on backend using Spring Boot</li>
					<li>I work on frontend using React</li>
				</ul>
			</div>

			<div>
				<h2>Xendit</h2>
				<h4 class="work-date">September 2022 - now</h4>
				<ul>
					<li>Work as full time employee</li>
					<li>In here, I work on development of software and application</li>
					<li>Backend using Golang and Typescript</li>
					<li>Frontend using Next.js/React and retool</li>
					<li>Work on AWS and GCP</li>
					<li>Work on Buddy Works and Github Actions</li>
				</ul>
			</div>
		</div>

		<div>
			<h1>Lets Connect</h1>
			<h2>LinkedIn</h2>
			<h2>Instagram</h2>
		</div>
	</div>
</main>

<style lang="scss">
	:global(:root) {
		--background-color: #0a192f;
		--text-color: #ccd6f6;
		--text-color-1: #64fed9;
		--font-size-0: 10px;
		--font-size-1: 20px;
		--font-size-2: 35px;
		--font-size-3: 60px;
	}
	main {
		font-family: 'GFS Didot';
		padding: 30px 10%;
		background-color: var(--background-color);
		.content-portfolio {
			h1,
			h2,
			h4,
			p,
			li {
				color: var(--text-color);
			}
		}

		.disabled {
			display: none;
		}

		.introduction {
			min-height: 90vh;
			padding-top: 3%;
			margin-left: 15%;
			p {
				color: var(--text-color);
				margin: 0;
				padding: 0;
			}

			p:first-child {
				color: var(--text-color-1);
				font-size: var(--font-size-2);
				margin-top: 60px;
			}

			P:nth-child(2) {
				font-size: var(--font-size-3);
				font-weight: 900;
				margin-top: 10px;
				margin-bottom: 0;
			}

			p:nth-child(3) {
				font-size: var(--font-size-3);
				margin-bottom: var(--font-size-2);
				font-weight: lighter;
			}

			p:nth-child(4) {
				margin-top: 20px;
				font-size: var(--font-size-1);
			}

			p:nth-child(5) {
				font-size: var(--font-size-1);
				max-width: 700px;
				font-weight: 50;
			}

			.big-connect {
				width: 300px;
				height: 50px;
				margin-top: 40px;
				font-size: var(--font-size-1);
				border-radius: 5px;
			}

			button {
				background-color: transparent;
				border-color: var(--text-color-1);
				color: var(--text-color-1);
			}

			.social-media {
				font-size: 40px;
				margin-top: 40px;
				height: 50px;
				padding: 0px;
				a {
					color: var(--text-color-1);
					margin-left: 20px;
				}
			}
		}
	}
</style>
