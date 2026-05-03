import "../../../chunks/index-server.js";
import { U as escape_html, V as attr, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../../chunks/dev.js";
import { t as good_days_default } from "../../../chunks/good-days.js";
//#region src/routes/dea-page/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let currentCardIndex = 0;
		const romanticMessages = [
			"Happy birthday, my love! You are the starlight that guides me through the darkest nights.",
			"Every moment with you is a gift, and today we celebrate the greatest gift of all - you!",
			"Your smile outshines the sun, your laughter is sweeter than any melody. Happy birthday, my darling!",
			"In you, I've found my soulmate, my best friend, and my greatest adventure. Happy birthday!",
			"You make every day feel like a celebration. Today, let's celebrate you!"
		];
		const birthdayVideos = [
			{
				name: "Alghifarri",
				url: "https://youtube.com/shorts/MzK0K1UNiuk",
				isShort: true
			},
			{
				name: "Mogi",
				url: "https://youtube.com/shorts/NU-qR68Tds0",
				isShort: true
			},
			{
				name: "Gilang",
				url: "https://youtube.com/shorts/j3CzYCPv8Mg",
				isShort: true
			},
			{
				name: "Siwi",
				url: "https://youtu.be/99PRXcTRdRQ",
				isShort: false
			},
			{
				name: "Vera",
				url: "https://youtu.be/A_63OJ0iH8U",
				isShort: false
			},
			{
				name: "Wily",
				url: "https://youtube.com/shorts/gxbnjqtWW8c",
				isShort: true
			},
			{
				name: "Galo",
				url: "https://youtube.com/shorts/uru0zF0QToI",
				isShort: true
			}
		];
		head("15o8ml7", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Happy Birthday, My Love!</title>`);
			});
		});
		$$renderer.push(`<main class="svelte-15o8ml7"><div class="stars svelte-15o8ml7"></div> <h1 class="svelte-15o8ml7">Happy Birthday, Amadea Annarois!</h1> <div class="card-container svelte-15o8ml7"><button class="nav-button prev svelte-15o8ml7"${attr("disabled", currentCardIndex === 0, true)}>❮</button> <div class="card-slider svelte-15o8ml7"${attr_style(`transform: translateX(-${stringify(currentCardIndex * 100)}%)`)}><!--[-->`);
		const each_array = ensure_array_like(romanticMessages);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let message = each_array[$$index];
			$$renderer.push(`<div class="card message-card svelte-15o8ml7"><p class="message svelte-15o8ml7">${escape_html(message)}</p></div>`);
		}
		$$renderer.push(`<!--]--> <!--[-->`);
		const each_array_1 = ensure_array_like(birthdayVideos);
		for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
			let video = each_array_1[index];
			$$renderer.push(`<div${attr_class(`card video-card ${stringify(video.isShort ? "short-video" : "")}`, "svelte-15o8ml7")}><h3 class="svelte-15o8ml7">${escape_html(video.name)}</h3> <div${attr("id", `youtube-player-${index}`)} class="youtube-player svelte-15o8ml7"></div></div>`);
		}
		$$renderer.push(`<!--]--></div> <button class="nav-button next svelte-15o8ml7"${attr("disabled", currentCardIndex === romanticMessages.length + birthdayVideos.length - 1, true)}>❯</button></div> <div class="love-note svelte-15o8ml7"><h2 class="svelte-15o8ml7">A Note from My Heart</h2> <p class="svelte-15o8ml7">Amadea, my love, words cannot express how much you mean to me. Your presence in my life is a
			blessing I cherish every day. Your kindness, your strength, and your beautiful spirit inspire
			me to be a better person. Today, as we celebrate another year of your amazing life, I want you
			to know that my love for you grows stronger with each passing moment. You are my sunshine, my
			rock, and my greatest adventure. Happy birthday, my darling. Here's to many more years of
			love, laughter, and unforgettable memories together.</p> <p class="signature svelte-15o8ml7">Forever Yours,<br class="svelte-15o8ml7"/>Oktavianus Irvan</p></div> <button class="music-toggle svelte-15o8ml7">${escape_html("🔇")}</button> <audio id="background-music" loop="" class="svelte-15o8ml7"><source${attr("src", good_days_default)} type="audio/mpeg" class="svelte-15o8ml7"/> Your browser does not support the audio element.</audio></main>`);
	});
}
//#endregion
export { _page as default };
