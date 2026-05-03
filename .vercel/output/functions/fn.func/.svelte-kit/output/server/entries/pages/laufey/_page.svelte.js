import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, a as subscribe, e as escape, v as validate_component, d as each, n as null_to_empty } from "../../../chunks/index2.js";
import "youtube-player";
import { w as writable } from "../../../chunks/index.js";
const Src = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = void 0 } = $$props;
  let { videoId } = $$props;
  let { options = void 0 } = $$props;
  let { class: className } = $$props;
  let playerElem;
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", className, 0)}><div${add_attribute("id", id, 0)}${add_attribute("this", playerElem, 0)}></div></div>`;
});
const date25 = "/_app/immutable/assets/date25.f2efdb14.png";
const javaJazz = "/_app/immutable/assets/java-jazz.fa2822f6.png";
const questions = [
  {
    question: "Do you know who this majestic creature is?",
    answers: [
      { text: "Yes", correct: true },
      { text: "Noo", correct: false, wrongAnswer: "Psst, her name is laufey" }
    ],
    imageLink: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg"
  },
  {
    question: "What do you think about this song?",
    answers: [
      { text: "I love it", correct: true },
      { text: "No", correct: false, wrongAnswer: "You should listen to it" }
    ],
    youtubeId: "tyKu0uZS86Q"
  },
  {
    question: "Do you know about java jazz?",
    additionalInfo: {
      link: "https://www.javajazzfestival.com/",
      text: "Check here"
    },
    imageLink: javaJazz,
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false, wrongAnswer: "You should check it out" }
    ]
  },
  {
    question: "Do you have time for 25 May 2024?",
    answers: [
      { text: "Yes, I have free time", correct: true },
      { text: "No, sorry", correct: false, wrongAnswer: "You should make time" }
    ],
    imageLink: date25
  },
  {
    question: "And, come with me?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false, wrongAnswer: "Sadge" }
    ]
  }
];
const ceweCakep = "/_app/immutable/assets/cewe-lah.c4ab825e.jpeg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-nwxaym{font-family:"Inter", Arial, sans-serif;text-align:center;padding-top:100px}.container.svelte-nwxaym{max-width:600px;margin:80px auto;padding:0 20px}h1.svelte-nwxaym{font-size:24px;margin-bottom:20px}.no.svelte-nwxaym{background-color:red;border-radius:4px;cursor:pointer}#message.svelte-nwxaym{margin-top:20px}#confetti-canvas.svelte-nwxaym{position:absolute;top:0;left:0;width:100%;z-index:-10}button.svelte-nwxaym{background-color:#4CAF50;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin-top:20px;margin-left:5px;margin-right:5px;cursor:pointer;border-radius:4px}footer.svelte-nwxaym{margin-top:200px}@media(max-width: 768px){main.svelte-nwxaym{padding-top:50px}h1.svelte-nwxaym{font-size:23px;margin-bottom:10px}button.svelte-nwxaym{padding:8px 16px;font-size:14px;margin-top:10px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $startSignal, $$unsubscribe_startSignal;
  let $questionCounter, $$unsubscribe_questionCounter;
  const questionCounter = writable(0);
  $$unsubscribe_questionCounter = subscribe(questionCounter, (value) => $questionCounter = value);
  const questionsLength = questions.length;
  const startSignal = writable(false);
  $$unsubscribe_startSignal = subscribe(startSignal, (value) => $startSignal = value);
  $$result.css.add(css);
  $$unsubscribe_startSignal();
  $$unsubscribe_questionCounter();
  return `<main class="svelte-nwxaym"><div class="container mx-auto svelte-nwxaym">${!$startSignal ? `<h1 class="text-2xl svelte-nwxaym" id="init">Hey Amadea👋, Can I Ask You Something?</h1>
        <button id="que" class="svelte-nwxaym">Sure, Ask Away!</button>` : `${$questionCounter < questionsLength ? `<div id="questions"><h1 class="text-2xl mt-8 svelte-nwxaym">${escape(questions[$questionCounter].question)}</h1>
            ${questions[$questionCounter].imageLink ? `<div><img${add_attribute("src", questions[$questionCounter].imageLink, 0)} alt="question" class="mt-4" width="320px"></div>` : ``}
            ${questions[$questionCounter].additionalInfo ? `<div><a${add_attribute("href", questions[$questionCounter].additionalInfo.link, 0)} target="_blank" rel="noreferrer" class="text-blue-500 mt-4">${escape(questions[$questionCounter].additionalInfo.text)}</a></div>` : ``}
            ${questions[$questionCounter].youtubeId ? `${validate_component(Src, "Youtube").$$render(
    $$result,
    {
      videoId: questions[$questionCounter].youtubeId,
      class: "mt-4"
    },
    {},
    {}
  )}` : ``}
            ${each(questions[$questionCounter].answers, (answer) => {
    return `<button class="${escape(null_to_empty(answer.correct ? void 0 : "no"), true) + " svelte-nwxaym"}">${escape(answer.text)}</button>`;
  })}</div>

        <div id="message" style="block" class="svelte-nwxaym"><p id="messageText"></p></div>` : `<h1 class="text-2xl svelte-nwxaym">So its a date then</h1>
        <h1 class="text-2xl svelte-nwxaym">Thank you for answering all the questions</h1>
        <h1 class="text-2xl svelte-nwxaym">Now take a screenshot of this and give it to him</h1>
        <img${add_attribute("src", ceweCakep, 0)} alt="cewe cakep" class="mt-8" width="320px">
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg" alt="cewe cakep 2" class="mt-8" width="320px">`}`}</div>
    <button id="que" class="svelte-nwxaym">Feel free to restart anytime</button>
    <footer class="text-center mt-8 svelte-nwxaym">Made with ❤️ by <a href="https://oktavianusirvan.xyz">Okta</a>
    <br>
        alay cuy
    </footer>
   
    <script src="https://cdn.jsdelivr.net/npm/confetti-js"><\/script>
    <canvas id="confetti-canvas" class="svelte-nwxaym"></canvas>
</main>`;
});
export {
  Page as default
};
