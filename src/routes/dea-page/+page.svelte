<script lang="ts">
  import { onMount } from 'svelte';
  import goodDaysAudio from '../../assets/good-days.mp3';

  let isPlaying = true;
  let currentCardIndex = 0;

  const romanticMessages = [
    "Happy birthday, my love! You are the starlight that guides me through the darkest nights.",
    "Every moment with you is a gift, and today we celebrate the greatest gift of all - you!",
    "Your smile outshines the sun, your laughter is sweeter than any melody. Happy birthday, my darling!",
    "In you, I've found my soulmate, my best friend, and my greatest adventure. Happy birthday!",
    "You make every day feel like a celebration. Today, let's celebrate you!"
  ];

  const birthdayVideos = [
    {name:"Alghifarri", url: "https://youtube.com/shorts/MzK0K1UNiuk", isShort: true},
    { name: "Mogi", url: "https://youtube.com/shorts/NU-qR68Tds0", isShort: true },
    {name: "Gilang", url: "https://youtube.com/shorts/j3CzYCPv8Mg", isShort: true},
    { name: "Siwi", url: "https://youtu.be/99PRXcTRdRQ", isShort: false},
    { name: "Vera", url: "https://youtu.be/A_63OJ0iH8U", isShort: false},
    { name: "Wily", url: "https://youtube.com/shorts/gxbnjqtWW8c", isShort: true},
    { name: "Galo", url: "https://youtube.com/shorts/uru0zF0QToI", isShort: true},
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

  function nextCard() {
    if (currentCardIndex < romanticMessages.length + birthdayVideos.length - 1) {
      currentCardIndex++;
    }
  }

  function previousCard() {
    if (currentCardIndex > 0) {
      currentCardIndex--;
    }
  }

  let players: { [key: string]: YT.Player } = {};

  onMount(() => {
    // Load the YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }

    // Define the onYouTubeIframeAPIReady function
    (window as any).onYouTubeIframeAPIReady = () => {
      birthdayVideos.forEach((video, index) => {
        const playerOptions = {
          videoId: getYouTubeVideoId(video.url),
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          width: video.isShort ? '315' : '560',
          height: video.isShort ? '560' : '315',
        };

        players[video.name] = new (window as any).YT.Player(`youtube-player-${index}`, playerOptions);
      });
    };
  });

  function getYouTubeVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }

  function onPlayerStateChange(event: any) {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      event.target.getIframe().requestFullscreen();
    } else if (event.data === (window as any).YT.PlayerState.ENDED) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }
</script>

<svelte:head>
  <title>Happy Birthday, My Love!</title>
</svelte:head>

<main>
  <div class="stars"></div>
  <h1>Happy Birthday, Amadea Annarois!</h1>
  
  <div class="card-container">
    <button class="nav-button prev" on:click={previousCard} disabled={currentCardIndex === 0}>❮</button>
    <div class="card-slider" style="transform: translateX(-{currentCardIndex * 100}%)">
      {#each romanticMessages as message, index}
        <div class="card message-card">
          <p class="message">{message}</p>
        </div>
      {/each}
      {#each birthdayVideos as video, index}
        <div class="card video-card {video.isShort ? 'short-video' : ''}">
          <h3>{video.name}</h3>
          <div id={`youtube-player-${index}`} class="youtube-player"></div>
        </div>
      {/each}
    </div>
    <button class="nav-button next" on:click={nextCard} disabled={currentCardIndex === romanticMessages.length + birthdayVideos.length - 1}>❯</button>
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

  .card-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 600px;
    margin: 2rem 0;
    overflow: hidden;
  }

  .card-slider {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
  }

  .card {
    flex: 0 0 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    box-sizing: border-box;
    position: relative;
  }

  .message-card {
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  }

  .video-card {
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .video-card h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  .youtube-player {
    max-width: 100%;
    max-height: 100%;
  }

  .short-video .youtube-player {
    width: 315px;
    height: 560px;
  }

  .message {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    text-align: center;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0 40px;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 10;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
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