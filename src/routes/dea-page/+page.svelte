<script lang="ts">
  import { onMount } from 'svelte';
  import goodDaysAudio from '../../assets/good-days.mp3';

  let isPlaying = true;
  let currentMessageIndex = 0;
  let showNextMessage = false;

  const romanticMessages = [
    "Happy birthday, my love! You are the starlight that guides me through the darkest nights.",
    "Every moment with you is a gift, and today we celebrate the greatest gift of all - you!",
    "Your smile outshines the sun, your laughter is sweeter than any melody. Happy birthday, my darling!",
    "In you, I've found my soulmate, my best friend, and my greatest adventure. Happy birthday!",
    "You make every day feel like a celebration. Today, let's celebrate you!"
  ];

  const birthdayVideos = [
    { name: "Emma", url: "https://www.youtube.com/embed/td7Nz9ATyWY" },
    { name: "Sarah", url: "https://www.youtube.com/embed/td7Nz9ATyWY" },
    // Add more videos as needed
  ];

  /**
   * @type {HTMLAudioElement | null}
   */
  let audioElement: HTMLAudioElement | null = null;
  onMount(() => {
    audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (audioElement) {
      audioElement.play().catch(() => {
        console.log("Autoplay prevented. Please interact with the page to enable audio.");
        isPlaying = false;
      });
    }
  });

  function toggleMusic() {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      isPlaying = !isPlaying;
    }
  }

  function nextMessage() {
    if (currentMessageIndex < romanticMessages.length - 1) {
      currentMessageIndex++;
    } else {
      showNextMessage = false;
    }
  }
</script>

<svelte:head>
  <title>Happy Birthday, My Love!</title>
</svelte:head>

<main>
  <div class="stars"></div>
  <h1>Happy Birthday, Amadea Annarois!</h1>
  
  <div class="message-container">
    <p class="message">{romanticMessages[currentMessageIndex]}</p>
    {#if currentMessageIndex < romanticMessages.length - 1}
      <button class="next-message" on:click={nextMessage}>❤️ Next</button>
    {/if}
  </div>

  <div class="birthday-wishes">
    <h2>Birthday Wishes from Your Loved Ones</h2>
    <div class="video-grid">
      {#each birthdayVideos as video}
        <div class="video-item">
          <h3>{video.name}</h3>
          <iframe
            width="280"
            height="157"
            src={video.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      {/each}
    </div>
  </div>

  <div class="love-note">
    <h2>A Note from My Heart</h2>
    <p>
      Amadea, my love, words cannot express how much you mean to me. Your presence in my life is a blessing I cherish every day. Your kindness, your strength, and your beautiful spirit inspire me to be a better person. Today, as we celebrate another year of your amazing life, I want you to know that my love for you grows stronger with each passing moment. You are my sunshine, my rock, and my greatest adventure. Happy birthday, my darling. Here's to many more years of love, laughter, and unforgettable memories together.
    </p>
    <p class="signature">Forever Yours,<br>Oktavianus Irvan</p>
  </div>

  <button class="music-toggle" on:click={toggleMusic}>
    {isPlaying ? '🔇' : '🔊'}
  </button>
  <audio id="background-music" loop>
    <source src={goodDaysAudio} type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Dancing+Script&family=Montserrat&display=swap');

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #0a0a1a;
    color: #ffffff;
    overflow-x: hidden;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, #edb9b9, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #f7e7e7, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #ffd700, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #fff5e6, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: twinkle 5s infinite;
  }

  @keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  .message-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .message {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .next-message {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #ffd700;
    border: 1px solid #ffd700;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .next-message:hover {
    background-color: rgba(255, 215, 0, 0.2);
  }

  .birthday-wishes {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 3rem;
  }

  .birthday-wishes h2 {
    font-family: 'Playfair Display', serif;
    color: #ffd700;
    text-align: center;
    margin-bottom: 1rem;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    justify-items: center;
  }

  .video-item {
    text-align: center;
  }

  .video-item h3 {
    font-family: 'Dancing Script', cursive;
    color: #ffd700;
    margin-bottom: 0.5rem;
  }

  .love-note {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }

  .love-note h2 {
    font-family: 'Playfair Display', serif;
    color: #ffd700;
    text-align: center;
    margin-bottom: 1rem;
  }

  .love-note p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .signature {
    font-family: 'Dancing Script', cursive;
    font-size: 1.2rem;
    text-align: right;
    color: #ffd700;
  }

  .music-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #ffd700;
    z-index: 1000;
  }
</style>
