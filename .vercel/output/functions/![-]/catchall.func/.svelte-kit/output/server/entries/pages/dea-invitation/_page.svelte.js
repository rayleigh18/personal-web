import "../../../chunks/index-server.js";
import { U as escape_html, V as attr, s as head } from "../../../chunks/dev.js";
import { t as good_days_default } from "../../../chunks/good-days.js";
//#region src/routes/dea-invitation/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1d94qr3", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>A Special Evening for My Love</title>`);
			});
		});
		$$renderer.push(`<main class="svelte-1d94qr3"><div class="stars svelte-1d94qr3"></div> <h1 class="svelte-1d94qr3">A Special Evening for My Love</h1> <p class="message svelte-1d94qr3">Dear Amadea Annarois,<br class="svelte-1d94qr3"/> I would be honored if you would join me for a birthday dinner. Let's celebrate this special day with
		love, laughter, and unforgettable memories.</p> <div class="details svelte-1d94qr3"><div class="detail-item svelte-1d94qr3"><i class="fas fa-calendar svelte-1d94qr3"></i> <span class="svelte-1d94qr3">Date: October 3, 2024</span></div> <div class="detail-item svelte-1d94qr3"><i class="fas fa-clock svelte-1d94qr3"></i> <span class="svelte-1d94qr3">Time: 19:00</span></div> <div class="detail-item svelte-1d94qr3"><i class="fas fa-map-marker-alt svelte-1d94qr3" style="color: #ffd700;"></i> <span class="svelte-1d94qr3">Location: <a href="https://maps.app.goo.gl/X6D5aqnJG8y7egKw6" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: none;" class="svelte-1d94qr3">The Westin, Jakarta</a></span></div></div> <button class="rsvp-button svelte-1d94qr3">RSVP</button> <footer class="svelte-1d94qr3"><p class="svelte-1d94qr3">Forever Yours,</p> <p class="svelte-1d94qr3">Oktavianus Irvan</p></footer> <button class="music-toggle svelte-1d94qr3">${escape_html("🔇")}</button> <audio id="background-music" loop="" class="svelte-1d94qr3"><source${attr("src", good_days_default)} type="audio/mpeg" class="svelte-1d94qr3"/> Your browser does not support the audio element.</audio> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></main>`);
	});
}
//#endregion
export { _page as default };
