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
			class='container-connect'
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
		<div class="about" id="about" >
			<h1>A little about me</h1>
			<p>
				My name is Oktavianus Irvan Sitanggang and I use Okta as my nickname. My old and close
				friend call me Irvan but its up to you how to call me. I'm a software developer who work on 
				many thing, front-end, back-end, architecture, microcontroller etc. But mostly right now work on
				backend and frontend. I'm from Indonesia. I like music, books, collaborating with people. Other 
				thing that I liked is math and intrigued to math and use it in my daily (machine learning etc).<br><br>
				I'm curious about how the world work, and want to learn new things, especially technologies.
				I'm graduated from Bandung Institute of Technology with bachelor in electrical engineering with 
				GPA 3.9. <br><br>
				Build my way up by doing project in college and pursue career in web development. <br>
				But hey, I'm open to anything.
			</p>
		</div>
		<div class="work" id="work">
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
		<!-- add skill -->
		<div class="connect" id="connect">
			<h1>Lets Connect</h1>
			<div class='social-media '>
				<a href="https://www.instagram.com/irvan.sitanggang/"><span class="fa fa-instagram" /></a>
				<a href="https://twitter.com/FindIrvan/"><span class="fa fa-twitter" /></a>
				<a href="https://www.linkedin.com/in/oktavianusirvans/"><span class="fa fa-linkedin" /></a>
				<a href="https://www.facebook.com/irvan.sitanggang.98/"><span class="fa fa-facebook" /></a>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	:global(:root) {
		--background-color: #0a192f;
		--text-color: #ccd6f6f2;
		--text-color-1: #64fed9;

		--font-family-sec-1: 'Libre Baskerville';
		--font-size-0: 10px;
		--font-size-1: 19px;
		--font-size-2: 33px;
		--font-size-3: 55px;

		--font-size-sec-0: 15px;
	}
	main {
		font-family: 'GFS Didot';
		padding: 30px 10%;
		background-color: var(--background-color);
		word-spacing: 2px;
		.content-portfolio {
			margin-left: 15%;
			margin-right: 15%;
			h1 {
				color: var(--text-color-1);
				font-size: var(--font-size-2);
			}
			h2,
			h4,
			p,
			li {
				color: var(--text-color);
			}

			h2 {
				font-size: var(--font-size-1);
			}

			.about {
				p {
					font-family: var(--font-family-sec-1);
					font-size: var(--font-size-sec-0);
					font-weight: 50;
					text-align: justify;
					line-height: 30px;
				}
			}
		}

		.disabled {
			display: none;
		}

		.social-media {
				font-size: 40px;
				height: 100%;
				width : 100%;
				padding: 0px;
				a {
					color: var(--text-color-1);
					margin-left: 20px;
				}

				a:hover {
					color: var(--text-color);
					font-size: 45px;
				}
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
				font-weight: 900;
				margin-top: 8vh;
			}

			P:nth-child(2) {
				font-size: var(--font-size-3);
				font-weight: 900;
				margin-top: 1.5vh;
				margin-bottom: 0;
			}

			p:nth-child(3) {
				font-size: var(--font-size-3);
				margin-bottom: var(--font-size-2);
				font-weight: 500;
			}

			p:nth-child(4) {
				margin-top: 1.5vh;
				font-size: var(--font-size-1);
				font-weight: 900;
			}

			p:nth-child(5) {
				font-family: var(--font-family-sec-1);
				font-size: var(--font-size-sec-0);
				max-width: 700px;
				font-weight: 100;
				line-height: 30px;
			}

			.container-connect {
				width: 300px;
				height: 50px;
				margin-top: 5vh;
			}

			.big-connect {
				font-size: var(--font-size-1);
				border-radius: 5px;
			}

			button {
				background-color: transparent;
				border-color: var(--text-color-1);
				color: var(--text-color-1);
				height: 100%;
				width: 100%;
				font-weight: 900;
			}
		}
	}
</style>
