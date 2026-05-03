import { H as clsx, k as writable, n as attr_class, s as head } from "../../chunks/dev.js";
import "../../chunks/index-server2.js";
//#region src/components/Header.svelte
function Header($$renderer) {
	$$renderer.push(`<main class="svelte-oiwvqb"><div class="logo svelte-oiwvqb"><a href="/" class="svelte-oiwvqb">I</a></div> <nav><div class="burger svelte-oiwvqb"><div class="line-1 svelte-oiwvqb"></div> <div class="line-2 svelte-oiwvqb"></div> <div class="line-3 svelte-oiwvqb"></div></div></nav></main>`);
}
//#endregion
//#region src/routes/intro.ts
var isLetsConnectOpened = writable(false);
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let classSocialMedia = "disabled";
		let classButtonConnect = "big-connect";
		isLetsConnectOpened.subscribe((isLetsConnectOpenedValue) => {
			classSocialMedia = isLetsConnectOpenedValue ? "social-media" : "disabled";
			classButtonConnect = isLetsConnectOpenedValue ? "disabled" : "big-connect";
		});
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>See Oktavianus</title>`);
			});
		});
		$$renderer.push(`<main class="svelte-1uha8ag">`);
		Header($$renderer, {});
		$$renderer.push(`<!----> <div class="introduction svelte-1uha8ag"><p class="hi svelte-1uha8ag">Hello! I'm</p> <p class="svelte-1uha8ag"><b>Oktavianus Irvan Sitanggang</b></p> <p class="svelte-1uha8ag">Software Developer</p> <p class="svelte-1uha8ag">I like to make things happen</p> <p class="svelte-1uha8ag">I work on many project, whether software development (backend and frontend) or robotic.
			Currently, I'm focused on backend development and find my way in this world. Put the bread to
			the table by working on Xendit.</p> <div class="container-connect svelte-1uha8ag"><button${attr_class(clsx(classButtonConnect), "svelte-1uha8ag")}>Lets connect</button> <div${attr_class(clsx(classSocialMedia), "svelte-1uha8ag")}><a href="https://www.instagram.com/irvan.sitanggang/" class="svelte-1uha8ag"><span class="fa fa-instagram"></span></a> <a href="https://twitter.com/FindIrvan/" class="svelte-1uha8ag"><span class="fa fa-twitter"></span></a> <a href="https://www.linkedin.com/in/oktavianusirvans/" class="svelte-1uha8ag"><span class="fa fa-linkedin"></span></a> <a href="https://www.facebook.com/irvan.sitanggang.98/" class="svelte-1uha8ag"><span class="fa fa-facebook"></span></a></div></div></div> <div class="content-portfolio svelte-1uha8ag"><div class="about svelte-1uha8ag" id="about"><h1 class="svelte-1uha8ag">A little about me</h1> <p class="svelte-1uha8ag">My name is Oktavianus Irvan Sitanggang and I use Okta as my nickname. My old and close
				friend call me Irvan but its up to you how to call me. I'm a software developer who work on
				many thing, front-end, back-end, architecture, microcontroller etc. But mostly right now
				work on backend and frontend. I'm from Indonesia. I like music, books, collaborating with
				people. Other thing that I liked is math and intrigued to math and use it in my daily
				(machine learning etc).<br/><br/> I'm curious about how the world work, and want to learn new things, especially technologies. I'm
				graduated from Bandung Institute of Technology with bachelor in electrical engineering with GPA
				3.9. <br/><br/> Build my way up by doing project in college and pursue career in web development. <br/> But hey, I'm open to anything.</p></div> <div class="work" id="work"><h1 class="svelte-1uha8ag">Where I've worked</h1> <div><h2 class="svelte-1uha8ag">Paragon Technology and Innovation</h2> <h4 class="work-date svelte-1uha8ag">2021-2022</h4> <ul><li class="svelte-1uha8ag">Work as an intern</li> <li class="svelte-1uha8ag">I create robot with my teams that run automatically for factory use for my thesis using
						various sensor (e.g. camera, lidar, encoder) and actuator (mostly motor)</li> <li class="svelte-1uha8ag">For the mechanical, I use Inventor, 3d-print, drill, hammer, and other tools</li> <li class="svelte-1uha8ag">For the electrical, I use Altium</li> <li class="svelte-1uha8ag">For Robot Programming, I use ROS with c++ and python that run in</li> <li class="svelte-1uha8ag">For microcontroller, use stm32 board and arduino</li></ul></div> <div><h2 class="svelte-1uha8ag">Samsung Research Institute Indonesia</h2> <h4 class="work-date svelte-1uha8ag">July 2022 - September 2022</h4> <ul><li class="svelte-1uha8ag">Work as full time employee</li> <li class="svelte-1uha8ag">In here, I create personal website that used in the internal company</li> <li class="svelte-1uha8ag">I work on backend using Spring Boot</li> <li class="svelte-1uha8ag">I work on frontend using React</li></ul></div> <div><h2 class="svelte-1uha8ag">Xendit</h2> <h4 class="work-date svelte-1uha8ag">September 2022 - now</h4> <ul><li class="svelte-1uha8ag">Work as full time employee</li> <li class="svelte-1uha8ag">In here, I work on development of software and application</li> <li class="svelte-1uha8ag">Backend using Golang and Typescript</li> <li class="svelte-1uha8ag">Frontend using Next.js/React and retool</li> <li class="svelte-1uha8ag">Work on AWS and GCP</li> <li class="svelte-1uha8ag">Work on Buddy Works and Github Actions</li></ul></div></div> <div class="connect" id="connect"><h1 class="svelte-1uha8ag">Lets Connect</h1> <div class="social-media svelte-1uha8ag"><a href="https://www.instagram.com/irvan.sitanggang/" class="svelte-1uha8ag"><span class="fa fa-instagram"></span></a> <a href="https://twitter.com/FindIrvan/" class="svelte-1uha8ag"><span class="fa fa-twitter"></span></a> <a href="https://www.linkedin.com/in/oktavianusirvans/" class="svelte-1uha8ag"><span class="fa fa-linkedin"></span></a> <a href="https://www.facebook.com/irvan.sitanggang.98/" class="svelte-1uha8ag"><span class="fa fa-facebook"></span></a></div></div></div></main>`);
	});
}
//#endregion
export { _page as default };
