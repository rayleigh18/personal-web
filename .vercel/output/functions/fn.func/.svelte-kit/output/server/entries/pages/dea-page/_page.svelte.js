import { c as create_ssr_component, e as escape, d as each, b as add_attribute } from "../../../chunks/index2.js";
import { g as goodDaysAudio } from "../../../chunks/good-days.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Dancing+Script&family=Montserrat&display=swap');body{margin:0;padding:0;font-family:'Montserrat', sans-serif;background-color:#0a0a1a;color:#ffffff;overflow-x:hidden}main.svelte-1knv9b4.svelte-1knv9b4{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:2rem;position:relative;overflow:hidden}.stars.svelte-1knv9b4.svelte-1knv9b4{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;background-image:radial-gradient(2px 2px at 20px 30px, #edb9b9, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 40px 70px, #f7e7e7, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 50px 160px, #ffd700, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 130px 80px, #fff5e6, rgba(0,0,0,0));background-repeat:repeat;background-size:200px 200px;animation:svelte-1knv9b4-twinkle 5s infinite}@keyframes svelte-1knv9b4-twinkle{0%{opacity:0.5}50%{opacity:1}100%{opacity:0.5}}h1.svelte-1knv9b4.svelte-1knv9b4{font-family:'Playfair Display', serif;font-size:3rem;text-align:center;margin-bottom:2rem;color:#ffd700;text-shadow:0 0 10px rgba(255, 215, 0, 0.5)}.card-container.svelte-1knv9b4.svelte-1knv9b4{position:relative;width:100%;max-width:600px;height:600px;margin:2rem 0;overflow:hidden}.card-slider.svelte-1knv9b4.svelte-1knv9b4{display:flex;transition:transform 0.5s ease;height:100%}.card.svelte-1knv9b4.svelte-1knv9b4{flex:0 0 100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(255, 255, 255, 0.1);border-radius:20px;padding:2rem;box-sizing:border-box;position:relative}.message-card.svelte-1knv9b4.svelte-1knv9b4{background-image:linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)}.video-card.svelte-1knv9b4.svelte-1knv9b4{background-image:linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem}.video-card.svelte-1knv9b4 h3.svelte-1knv9b4{margin-bottom:1rem;color:#333}.youtube-player.svelte-1knv9b4.svelte-1knv9b4{max-width:100%;max-height:100%}.short-video.svelte-1knv9b4 .youtube-player.svelte-1knv9b4{width:315px;height:560px}.message.svelte-1knv9b4.svelte-1knv9b4{font-family:'Dancing Script', cursive;font-size:1.5rem;text-align:center;color:#333;line-height:1.6;margin:0;padding:0 40px}.nav-button.svelte-1knv9b4.svelte-1knv9b4{position:absolute;top:50%;transform:translateY(-50%);background-color:rgba(255, 255, 255, 0.3);border:none;color:white;font-size:2rem;padding:0.5rem;cursor:pointer;transition:background-color 0.3s ease;z-index:10;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center}.nav-button.svelte-1knv9b4.svelte-1knv9b4:hover{background-color:rgba(255, 255, 255, 0.5)}.nav-button.svelte-1knv9b4.svelte-1knv9b4:disabled{opacity:0.5;cursor:not-allowed}.prev.svelte-1knv9b4.svelte-1knv9b4{left:10px}.next.svelte-1knv9b4.svelte-1knv9b4{right:10px}.love-note.svelte-1knv9b4.svelte-1knv9b4{max-width:800px;margin:0 auto;padding:2rem;background-color:rgba(255, 255, 255, 0.1);border-radius:10px;box-shadow:0 0 20px rgba(255, 215, 0, 0.2)}.love-note.svelte-1knv9b4 h2.svelte-1knv9b4{font-family:'Playfair Display', serif;color:#ffd700;text-align:center;margin-bottom:1rem}.love-note.svelte-1knv9b4 p.svelte-1knv9b4{font-family:'Montserrat', sans-serif;line-height:1.6;margin-bottom:1rem}.signature.svelte-1knv9b4.svelte-1knv9b4{font-family:'Dancing Script', cursive;font-size:1.2rem;text-align:right;color:#ffd700}.music-toggle.svelte-1knv9b4.svelte-1knv9b4{position:fixed;bottom:20px;right:20px;background:transparent;border:none;font-size:1.5rem;cursor:pointer;color:#ffd700;z-index:1000}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1iobvdr_START -->${$$result.title = `<title>Happy Birthday, My Love!</title>`, ""}<!-- HEAD_svelte-1iobvdr_END -->`, ""}

<main class="svelte-1knv9b4"><div class="stars svelte-1knv9b4"></div>
  <h1 class="svelte-1knv9b4">Happy Birthday, Amadea Annarois!</h1>
  
  <div class="card-container svelte-1knv9b4"><button class="nav-button prev svelte-1knv9b4" ${"disabled"}>❮</button>
    <div class="card-slider svelte-1knv9b4" style="${"transform: translateX(-" + escape(currentCardIndex * 100, true) + "%)"}">${each(romanticMessages, (message, index) => {
    return `<div class="card message-card svelte-1knv9b4"><p class="message svelte-1knv9b4">${escape(message)}</p>
        </div>`;
  })}
      ${each(birthdayVideos, (video, index) => {
    return `<div class="${"card video-card " + escape(video.isShort ? "short-video" : "", true) + " svelte-1knv9b4"}"><h3 class="svelte-1knv9b4">${escape(video.name)}</h3>
          <div${add_attribute("id", `youtube-player-${index}`, 0)} class="youtube-player svelte-1knv9b4"></div>
        </div>`;
  })}</div>
    <button class="nav-button next svelte-1knv9b4" ${currentCardIndex === romanticMessages.length + birthdayVideos.length - 1 ? "disabled" : ""}>❯</button></div>

  <div class="love-note svelte-1knv9b4"><h2 class="svelte-1knv9b4">A Note from My Heart</h2>
    <p class="svelte-1knv9b4">Amadea, my love, words cannot express how much you mean to me. Your presence in my life is a blessing I cherish every day. Your kindness, your strength, and your beautiful spirit inspire me to be a better person. Today, as we celebrate another year of your amazing life, I want you to know that my love for you grows stronger with each passing moment. You are my sunshine, my rock, and my greatest adventure. Happy birthday, my darling. Here&#39;s to many more years of love, laughter, and unforgettable memories together.
    </p>
    <p class="signature svelte-1knv9b4">Forever Yours,<br>Oktavianus Irvan</p></div>

  <button class="music-toggle svelte-1knv9b4">${escape("🔇")}</button>
  <audio id="background-music" loop><source${add_attribute("src", goodDaysAudio, 0)} type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</main>`;
});
export {
  Page as default
};
