import { c as create_ssr_component, e as escape, a as subscribe, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const ButtonComponent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-rd8wvs{word-wrap:break-word;border:none;padding:auto;color:#fff;border-radius:1rem;transition:all 250ms;transform-origin:center;box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25),\n        inset 0px -2px 3px rgba(0, 0, 0, 0.25)}button.svelte-rd8wvs:hover{cursor:pointer;transform:scale(0.975);box-shadow:0px 1px 3px rgba(0, 0, 0, 0.25)}",
  map: null
};
function buttonWidth(num) {
  return `${8 + 1 * num}rem`;
}
function buttonHeight(num) {
  return `${3 + 1 * num}rem`;
}
function fontSize(num) {
  return `${1 + 0.5 * num}rem`;
}
const ButtonComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { bgColor } = $$props;
  let { sz } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.sz === void 0 && $$bindings.sz && sz !== void 0)
    $$bindings.sz(sz);
  $$result.css.add(css$1);
  return `<button style="${"background-color:" + escape(bgColor, true) + "; width: " + escape(buttonWidth(sz), true) + "; min-height: " + escape(buttonHeight(sz), true) + "; font-size: " + escape(fontSize(sz), true)}" class="svelte-rd8wvs">${escape(text)}
</button>`;
});
const gif = "/_app/immutable/assets/valentine.f4df8433.gif";
const sadGif = "/_app/immutable/assets/sad-baby.15af2a6a.gif";
const yesSignal = writable(false);
const noSignal = writable(false);
const yesButtonTypeSize = writable(0);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1mgku5l{width:30%;height:30%;object-fit:cover}main.svelte-1mgku5l{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:aliceblue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yesSignal, $$unsubscribe_yesSignal;
  let $noSignal, $$unsubscribe_noSignal;
  let $yesButtonTypeSize, $$unsubscribe_yesButtonTypeSize;
  $$unsubscribe_yesSignal = subscribe(yesSignal, (value) => $yesSignal = value);
  $$unsubscribe_noSignal = subscribe(noSignal, (value) => $noSignal = value);
  $$unsubscribe_yesButtonTypeSize = subscribe(yesButtonTypeSize, (value) => $yesButtonTypeSize = value);
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
  $$result.css.add(css);
  $$unsubscribe_yesSignal();
  $$unsubscribe_noSignal();
  $$unsubscribe_yesButtonTypeSize();
  return `<main class="svelte-1mgku5l">${$yesSignal ? `<img${add_attribute("src", gif, 0)} alt="valentine" class="svelte-1mgku5l">
        <h1>Yes, I will be your valentine</h1>
        <h1>See You at 14th February</h1>` : `${$noSignal ? `<img${add_attribute("src", sadGif, 0)} alt="sad" class="svelte-1mgku5l">
        <h1>No, I won&#39;t be your valentine</h1>
        ${validate_component(ButtonComponent, "ButtonComponent").$$render(
    $$result,
    {
      text: "You can try if you change your mind",
      bgColor: "#39c41f",
      sz: 0
    },
    {},
    {}
  )}` : `<img${add_attribute("src", gif, 0)} alt="valentine" class="svelte-1mgku5l">
        <h1>Will you be my valentine?</h1>
        <div>${validate_component(ButtonComponent, "ButtonComponent").$$render(
    $$result,
    {
      text: "YES",
      bgColor: "#39c41f",
      sz: $yesButtonTypeSize
    },
    {},
    {
      default: () => {
        return `Yes`;
      }
    }
  )}
            
            ${validate_component(ButtonComponent, "ButtonComponent").$$render(
    $$result,
    {
      text: noAnswers[$yesButtonTypeSize],
      bgColor: "#c51f23",
      sz: 0
    },
    {},
    {}
  )}</div>`}`}
</main>`;
});
export {
  Page as default
};
