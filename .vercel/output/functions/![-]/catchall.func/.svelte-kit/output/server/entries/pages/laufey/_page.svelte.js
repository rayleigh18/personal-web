import { H as clsx, U as escape_html, V as attr, d as unsubscribe_stores, k as writable, l as store_get, n as attr_class, o as ensure_array_like } from "../../../chunks/dev.js";
import "../../../chunks/index-server2.js";
//#endregion
//#region src/routes/laufey/questions.ts
var questions = [
	{
		question: "Do you know who this majestic creature is?",
		answers: [{
			text: "Yes",
			correct: true
		}, {
			text: "Noo",
			correct: false,
			wrongAnswer: "Psst, her name is laufey"
		}],
		imageLink: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg"
	},
	{
		question: "What do you think about this song?",
		answers: [{
			text: "I love it",
			correct: true
		}, {
			text: "No",
			correct: false,
			wrongAnswer: "You should listen to it"
		}],
		youtubeId: "tyKu0uZS86Q"
	},
	{
		question: "Do you know about java jazz?",
		additionalInfo: {
			link: "https://www.javajazzfestival.com/",
			text: "Check here"
		},
		imageLink: "/_app/immutable/assets/java-jazz.DWp2C-AS.png",
		answers: [{
			text: "Yes",
			correct: true
		}, {
			text: "No",
			correct: false,
			wrongAnswer: "You should check it out"
		}]
	},
	{
		question: "Do you have time for 25 May 2024?",
		answers: [{
			text: "Yes, I have free time",
			correct: true
		}, {
			text: "No, sorry",
			correct: false,
			wrongAnswer: "You should make time"
		}],
		imageLink: "/_app/immutable/assets/date25.SpZW6bug.png"
	},
	{
		question: "And, come with me?",
		answers: [{
			text: "Yes",
			correct: true
		}, {
			text: "No",
			correct: false,
			wrongAnswer: "Sadge"
		}]
	}
];
//#endregion
//#region src/assets/cewe-lah.jpeg
var cewe_lah_default = "/_app/immutable/assets/cewe-lah.BWlbmLYL.jpeg";
//#endregion
//#region src/routes/laufey/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const questionCounter = writable(0);
		const questionsLength = questions.length;
		const startSignal = writable(false);
		$$renderer.push(`<main class="svelte-13x1wzb"><div class="container mx-auto svelte-13x1wzb">`);
		if (!store_get($$store_subs ??= {}, "$startSignal", startSignal)) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h1 class="text-2xl svelte-13x1wzb" id="init">Hey Amadea👋, Can I Ask You Something?</h1> <button id="que" class="svelte-13x1wzb">Sure, Ask Away!</button>`);
		} else if (store_get($$store_subs ??= {}, "$questionCounter", questionCounter) < questionsLength) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div id="questions"><h1 class="text-2xl mt-8 svelte-13x1wzb">${escape_html(questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].question)}</h1> `);
			if (questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].imageLink) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div><img${attr("src", questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].imageLink)} alt="question" class="mt-4" width="320px"/></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].additionalInfo) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div><a${attr("href", questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].additionalInfo.link)} target="_blank" rel="noreferrer" class="text-blue-500 mt-4">${escape_html(questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].additionalInfo.text)}</a></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].youtubeId) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<iframe class="youtube-video mt-4 svelte-13x1wzb"${attr("src", `https://www.youtube.com/embed/${questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].youtubeId}`)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array = ensure_array_like(questions[store_get($$store_subs ??= {}, "$questionCounter", questionCounter)].answers);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let answer = each_array[$$index];
				$$renderer.push(`<button${attr_class(clsx(answer.correct ? void 0 : "no"), "svelte-13x1wzb")}>${escape_html(answer.text)}</button>`);
			}
			$$renderer.push(`<!--]--></div> <div id="message" style="block" class="svelte-13x1wzb"><p id="messageText"></p></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<h1 class="text-2xl svelte-13x1wzb">So its a date then</h1> <h1 class="text-2xl svelte-13x1wzb">Thank you for answering all the questions</h1> <h1 class="text-2xl svelte-13x1wzb">Now take a screenshot of this and give it to him</h1> <img${attr("src", cewe_lah_default)} alt="cewe cakep" class="mt-8" width="320px"/> <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg" alt="cewe cakep 2" class="mt-8" width="320px"/>`);
		}
		$$renderer.push(`<!--]--></div> <button id="que" class="svelte-13x1wzb">Feel free to restart anytime</button> <footer class="text-center mt-8 svelte-13x1wzb">Made with ❤️ by <a href="https://oktavianusirvan.xyz">Okta</a> <br/> alay cuy</footer> `);
		$$renderer.push(`<script src="https://cdn.jsdelivr.net/npm/confetti-js"><\/script>`);
		$$renderer.push(` <canvas id="confetti-canvas" class="svelte-13x1wzb"></canvas></main>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
