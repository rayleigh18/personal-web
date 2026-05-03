import { c as create_ssr_component, v as validate_component, e as escape, n as null_to_empty } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-1rq2eok.svelte-1rq2eok{padding:0;margin:0;display:flex;justify-content:space-between;align-items:center;min-height:10vh;background-image:none;background-color:var(--background-color);position:relative;z-index:100}main.svelte-1rq2eok .logo.svelte-1rq2eok{background-image:none;text-transform:uppercase;letter-spacing:5px;font-size:80px}main.svelte-1rq2eok .logo a.svelte-1rq2eok{color:#ccd6f6}.burger.svelte-1rq2eok.svelte-1rq2eok{background-color:var(--background-color);display:block;cursor:pointer}.burger.svelte-1rq2eok div.svelte-1rq2eok{width:25px;height:5px;background-image:none;background-color:#ccd6f6;margin:5px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-1rq2eok"><div class="logo svelte-1rq2eok"><a href="/" class="svelte-1rq2eok">I</a></div>
	<nav><div class="burger svelte-1rq2eok"><div class="line-1 svelte-1rq2eok"></div>
			<div class="line-2 svelte-1rq2eok"></div>
			<div class="line-3 svelte-1rq2eok"></div></div></nav>
</main>`;
});
const isLetsConnectOpened = writable(false);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `:root{--background-color:#0a192f;--text-color:#ccd6f6f2;--text-color-1:#64fed9;--font-family-sec-1:'Libre Baskerville';--font-size-0:10px;--font-size-1:19px;--font-size-2:33px;--font-size-3:55px;--font-size-sec-0:15px}main.svelte-16ek6v9.svelte-16ek6v9{font-family:"GFS Didot";padding:30px 10%;background-color:var(--background-color);word-spacing:2px}main.svelte-16ek6v9 .content-portfolio.svelte-16ek6v9{margin-left:15%;margin-right:15%}main.svelte-16ek6v9 .content-portfolio h1.svelte-16ek6v9{color:var(--text-color-1);font-size:var(--font-size-2)}main.svelte-16ek6v9 .content-portfolio h2.svelte-16ek6v9,main.svelte-16ek6v9 .content-portfolio h4.svelte-16ek6v9,main.svelte-16ek6v9 .content-portfolio p.svelte-16ek6v9,main.svelte-16ek6v9 .content-portfolio li.svelte-16ek6v9{color:var(--text-color)}main.svelte-16ek6v9 .content-portfolio h2.svelte-16ek6v9{font-size:var(--font-size-1)}main.svelte-16ek6v9 .content-portfolio .about p.svelte-16ek6v9{font-family:var(--font-family-sec-1);font-size:var(--font-size-sec-0);font-weight:50;text-align:justify;line-height:30px}main.svelte-16ek6v9 .disabled.svelte-16ek6v9{display:none}main.svelte-16ek6v9 .social-media.svelte-16ek6v9{font-size:40px;height:100%;width:100%;padding:0px}main.svelte-16ek6v9 .social-media a.svelte-16ek6v9{color:var(--text-color-1);margin-left:20px}main.svelte-16ek6v9 .social-media a.svelte-16ek6v9:hover{color:var(--text-color);font-size:45px}main.svelte-16ek6v9 .introduction.svelte-16ek6v9{min-height:90vh;padding-top:3%;margin-left:15%}main.svelte-16ek6v9 .introduction p.svelte-16ek6v9{color:var(--text-color);margin:0;padding:0}main.svelte-16ek6v9 .introduction p.svelte-16ek6v9:first-child{color:var(--text-color-1);font-size:var(--font-size-2);font-weight:900;margin-top:8vh}main.svelte-16ek6v9 .introduction P.svelte-16ek6v9:nth-child(2){font-size:var(--font-size-3);font-weight:900;margin-top:1.5vh;margin-bottom:0}main.svelte-16ek6v9 .introduction p.svelte-16ek6v9:nth-child(3){font-size:var(--font-size-3);margin-bottom:var(--font-size-2);font-weight:500}main.svelte-16ek6v9 .introduction p.svelte-16ek6v9:nth-child(4){margin-top:1.5vh;font-size:var(--font-size-1);font-weight:900}main.svelte-16ek6v9 .introduction p.svelte-16ek6v9:nth-child(5){font-family:var(--font-family-sec-1);font-size:var(--font-size-sec-0);max-width:700px;font-weight:100;line-height:30px}main.svelte-16ek6v9 .introduction .container-connect.svelte-16ek6v9{width:300px;height:50px;margin-top:5vh}main.svelte-16ek6v9 .introduction .big-connect.svelte-16ek6v9{font-size:var(--font-size-1);border-radius:5px}main.svelte-16ek6v9 .introduction button.svelte-16ek6v9{background-color:transparent;border-color:var(--text-color-1);color:var(--text-color-1);height:100%;width:100%;font-weight:900}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classSocialMedia = "disabled";
  let classButtonConnect = "big-connect";
  isLetsConnectOpened.subscribe((isLetsConnectOpenedValue) => {
    classSocialMedia = isLetsConnectOpenedValue ? "social-media" : "disabled";
    classButtonConnect = isLetsConnectOpenedValue ? "disabled" : "big-connect";
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-i3emyy_START -->${$$result.title = `<title>See Oktavianus</title>`, ""}<!-- HEAD_svelte-i3emyy_END -->`, ""}

<main class="svelte-16ek6v9">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div class="introduction svelte-16ek6v9"><p class="hi svelte-16ek6v9">Hello! I&#39;m</p>
		<p class="svelte-16ek6v9"><b>Oktavianus Irvan Sitanggang</b></p>
		<p class="svelte-16ek6v9">Software Developer</p>
		<p class="svelte-16ek6v9">I like to make things happen</p>
		<p class="svelte-16ek6v9">I work on many project, whether software development (backend and frontend) or robotic.
			Currently, I&#39;m focused on backend development and find my way in this world. Put the bread to
			the table by working on Xendit.
		</p>
		<div class="container-connect svelte-16ek6v9"><button class="${escape(null_to_empty(classButtonConnect), true) + " svelte-16ek6v9"}">Lets connect</button>
			<div class="${escape(null_to_empty(classSocialMedia), true) + " svelte-16ek6v9"}"><a href="https://www.instagram.com/irvan.sitanggang/" class="svelte-16ek6v9"><span class="fa fa-instagram"></span></a>
				<a href="https://twitter.com/FindIrvan/" class="svelte-16ek6v9"><span class="fa fa-twitter"></span></a>
				<a href="https://www.linkedin.com/in/oktavianusirvans/" class="svelte-16ek6v9"><span class="fa fa-linkedin"></span></a>
				<a href="https://www.facebook.com/irvan.sitanggang.98/" class="svelte-16ek6v9"><span class="fa fa-facebook"></span></a></div></div></div>

	<div class="content-portfolio svelte-16ek6v9"><div class="about" id="about"><h1 class="svelte-16ek6v9">A little about me</h1>
			<p class="svelte-16ek6v9">My name is Oktavianus Irvan Sitanggang and I use Okta as my nickname. My old and close
				friend call me Irvan but its up to you how to call me. I&#39;m a software developer who work on 
				many thing, front-end, back-end, architecture, microcontroller etc. But mostly right now work on
				backend and frontend. I&#39;m from Indonesia. I like music, books, collaborating with people. Other 
				thing that I liked is math and intrigued to math and use it in my daily (machine learning etc).<br><br>
				I&#39;m curious about how the world work, and want to learn new things, especially technologies.
				I&#39;m graduated from Bandung Institute of Technology with bachelor in electrical engineering with 
				GPA 3.9. <br><br>
				Build my way up by doing project in college and pursue career in web development. <br>
				But hey, I&#39;m open to anything.
			</p></div>
		<div class="work" id="work"><h1 class="svelte-16ek6v9">Where I&#39;ve worked</h1>
			<div><h2 class="svelte-16ek6v9">Paragon Technology and Innovation</h2>
				<h4 class="work-date svelte-16ek6v9">2021-2022</h4>
				<ul><li class="svelte-16ek6v9">Work as an intern</li>
					<li class="svelte-16ek6v9">I create robot with my teams that run automatically for factory use for my thesis using
						various sensor (e.g. camera, lidar, encoder) and actuator (mostly motor)
					</li>
					<li class="svelte-16ek6v9">For the mechanical, I use Inventor, 3d-print, drill, hammer, and other tools</li>
					<li class="svelte-16ek6v9">For the electrical, I use Altium</li>
					<li class="svelte-16ek6v9">For Robot Programming, I use ROS with c++ and python that run in</li>
					<li class="svelte-16ek6v9">For microcontroller, use stm32 board and arduino</li></ul></div>

			<div><h2 class="svelte-16ek6v9">Samsung Research Institute Indonesia</h2>
				<h4 class="work-date svelte-16ek6v9">July 2022 - September 2022</h4>
				<ul><li class="svelte-16ek6v9">Work as full time employee</li>
					<li class="svelte-16ek6v9">In here, I create personal website that used in the internal company</li>
					<li class="svelte-16ek6v9">I work on backend using Spring Boot</li>
					<li class="svelte-16ek6v9">I work on frontend using React</li></ul></div>

			<div><h2 class="svelte-16ek6v9">Xendit</h2>
				<h4 class="work-date svelte-16ek6v9">September 2022 - now</h4>
				<ul><li class="svelte-16ek6v9">Work as full time employee</li>
					<li class="svelte-16ek6v9">In here, I work on development of software and application</li>
					<li class="svelte-16ek6v9">Backend using Golang and Typescript</li>
					<li class="svelte-16ek6v9">Frontend using Next.js/React and retool</li>
					<li class="svelte-16ek6v9">Work on AWS and GCP</li>
					<li class="svelte-16ek6v9">Work on Buddy Works and Github Actions</li></ul></div></div>
		
		<div class="connect" id="connect"><h1 class="svelte-16ek6v9">Lets Connect</h1>
			<div class="social-media  svelte-16ek6v9"><a href="https://www.instagram.com/irvan.sitanggang/" class="svelte-16ek6v9"><span class="fa fa-instagram"></span></a>
				<a href="https://twitter.com/FindIrvan/" class="svelte-16ek6v9"><span class="fa fa-twitter"></span></a>
				<a href="https://www.linkedin.com/in/oktavianusirvans/" class="svelte-16ek6v9"><span class="fa fa-linkedin"></span></a>
				<a href="https://www.facebook.com/irvan.sitanggang.98/" class="svelte-16ek6v9"><span class="fa fa-facebook"></span></a></div></div></div>
</main>`;
});
export {
  Page as default
};
