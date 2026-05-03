import { U as escape_html, V as attr, d as unsubscribe_stores, i as bind_props, k as writable, l as store_get, r as attr_style, u as stringify } from "../../../chunks/dev.js";
import "../../../chunks/index-server2.js";
//#region src/routes/valentine/ButtonComponent.svelte
function ButtonComponent($$renderer, $$props) {
	/**
	* @param {number} num
	*/
	function buttonWidth(num) {
		return `${8 + 1 * num}rem`;
	}
	/**
	* @param {number} num
	*/
	function buttonHeight(num) {
		return `${3 + 1 * num}rem`;
	}
	/**
	* @param {number} num
	*/
	function fontSize(num) {
		return `${1 + .5 * num}rem`;
	}
	/**
	* @type {string}
	*/
	let text = $$props["text"];
	/**
	* @type {string}
	*/
	let bgColor = $$props["bgColor"];
	/**
	*
	* @type {number}
	*/
	let sz = $$props["sz"];
	$$renderer.push(`<button${attr_style(` background-color:${stringify(bgColor)}; width: ${stringify(buttonWidth(sz))}; min-height: ${stringify(buttonHeight(sz))}; font-size: ${stringify(fontSize(sz))} `)} class="svelte-xtiqzs">${escape_html(text)}</button>`);
	bind_props($$props, {
		text,
		bgColor,
		sz
	});
}
//#endregion
//#region src/assets/valentine.gif
var valentine_default = "/_app/immutable/assets/valentine.D-RQyQ1c.gif";
//#endregion
//#region src/assets/sad-baby.gif
var sad_baby_default = "/_app/immutable/assets/sad-baby.DAFbc7AL.gif";
//#endregion
//#region src/routes/valentine/handler.ts
var yesSignal = writable(false);
var noSignal = writable(false);
var yesButtonTypeSize = writable(0);
//#endregion
//#region src/routes/valentine/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let noAnswers = [
			"NOSS",
			"Are you sure?",
			"I'm waiting...",
			"You need to click green button",
			"I'm not going to ask again",
			"I'm serious",
			"COME ON",
			"BAPAKKU BILANG HARUS TEKAN YANG HIJAU",
			"IS IT FINAL?",
			"Think seriously one more time",
			"This is your last chance"
		];
		$$renderer.push(`<main class="svelte-5mxoex">`);
		if (store_get($$store_subs ??= {}, "$yesSignal", yesSignal)) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<img${attr("src", valentine_default)} alt="valentine" class="svelte-5mxoex"/> <h1>Yes, I will be your valentine</h1> <h1>See You at 14th February</h1>`);
		} else if (store_get($$store_subs ??= {}, "$noSignal", noSignal)) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<img${attr("src", sad_baby_default)} alt="sad" class="svelte-5mxoex"/> <h1>No, I won't be your valentine</h1> `);
			ButtonComponent($$renderer, {
				text: "You can try if you change your mind",
				bgColor: "#39c41f",
				sz: 0
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<img${attr("src", valentine_default)} alt="valentine" class="svelte-5mxoex"/> <h1>Will you be my valentine?</h1> <div>`);
			ButtonComponent($$renderer, {
				text: "YES",
				bgColor: "#39c41f",
				sz: store_get($$store_subs ??= {}, "$yesButtonTypeSize", yesButtonTypeSize)
			});
			$$renderer.push(`<!----> `);
			ButtonComponent($$renderer, {
				text: noAnswers[store_get($$store_subs ??= {}, "$yesButtonTypeSize", yesButtonTypeSize)],
				bgColor: "#c51f23",
				sz: 0
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></main>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
