<script>
    // @ts-nocheck
    // @ts-ignore
    import Youtube from 'svelte-youtube';
	import { writable } from 'svelte/store';
    import { questions } from './questions';
    import ceweCakep from '../../assets/cewe-lah.jpeg';
    
    const questionCounter = writable(0);
    const questionsLength = questions.length;
    const startSignal = writable(false);

    function startTheSequence() {
        questionCounter.set(0);
        startSignal.set(true);
    }

    function restartTheSequence() {
        questionCounter.set(0);
        startSignal.set(false);
    }
      
</script>
<main>
    <div class="container mx-auto">
    {#if !$startSignal}
        <h1 class="text-2xl" id="init">Hey Amadea👋, Can I Ask You Something?</h1>
        <button on:click={startTheSequence} id="que">Sure, Ask Away!</button>
    {:else if $questionCounter < questionsLength}
        <div id="questions">
            <h1 class="text-2xl mt-8">{questions[$questionCounter].question}</h1>
            {#if questions[$questionCounter].imageLink}
                <div>
                    <img src={questions[$questionCounter].imageLink} alt="question" class="mt-4" width="320px"/>
                </div>
            {/if}
            {#if questions[$questionCounter].additionalInfo}
                <div>
                    <a href={questions[$questionCounter].additionalInfo.link} target="_blank" rel="noreferrer" class="text-blue-500 mt-4">{questions[$questionCounter].additionalInfo.text} </a>
                </div>
            {/if}
            {#if questions[$questionCounter].youtubeId}
                <Youtube videoId={questions[$questionCounter].youtubeId} class="mt-4"/>
            {/if}
            {#each questions[$questionCounter].answers as answer}
                <button on:click={() => {
                    if(answer.correct){
                        questionCounter.update(n => n + 1);
                    } else {
                        alert(answer.wrongAnswer || 'Wrong answer, try again');
                    }
                
                }} class={answer.correct ? undefined : 'no'}>{answer.text}</button>
            {/each}
            
        </div>

        <div id="message" style="block">
            <p id="messageText"></p>
        </div>
    {:else}
        <h1 class="text-2xl">So its a date then</h1>
        <h1 class="text-2xl">Thank you for answering all the questions</h1>
        <h1 class="text-2xl">Now take a screenshot of this and give it to him</h1>
        <img src={ceweCakep} alt="cewe cakep" class="mt-8" width="320px"/>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg" alt="cewe cakep 2" class="mt-8" width="320px"/>
    {/if}
    </div>
    <button on:click={restartTheSequence} id="que">Feel free to restart anytime</button>
    <footer class="text-center mt-8">
        Made with ❤️ by <a href="https://oktavianusirvan.xyz">Okta</a>
    <br>
        alay cuy
    </footer>
   
    <script src="https://cdn.jsdelivr.net/npm/confetti-js"></script>
    <canvas id="confetti-canvas">
    </canvas>
</main>

<style lang="scss">
    main {
    font-family: 'Inter', Arial, sans-serif;
    text-align: center;
    padding-top: 100px;
  }
  
  .container {
    max-width: 600px;
    margin: 80px auto;
    padding: 0 20px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .no{
    background-color: red;
    border-radius: 4px;
    cursor: pointer;
  }

  #message{
    margin-top: 20px;
  }

  #confetti-canvas{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    z-index: -10;
  }
  
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 4px;
  }

  footer{
    margin-top: 200px;
  }
  
  @media (max-width: 768px) {
    main {
      padding-top: 50px;
    }
  
    h1 {
      font-size: 23px;
      margin-bottom: 10px;
    }
  
    button {
      padding: 8px 16px;
      font-size: 14px;
      margin-top: 10px;
    }
  }
</style>