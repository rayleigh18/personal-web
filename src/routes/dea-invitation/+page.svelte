<script lang="ts">
  import { onMount } from 'svelte';
  import goodDaysAudio from '../../assets/good-days.mp3';

  let isPlaying = true;
  /**
	 * @type {HTMLAudioElement | null}
	 */
	let audioElement: HTMLAudioElement | null = null;
	onMount(() => {
		audioElement = document.getElementById('background-music') as HTMLAudioElement;
		// Start playing the music when the component mounts
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
</script>

<svelte:head>
  <title>A Special Evening for My Love</title>
</svelte:head>

<main>
  <div class="stars"></div>
  <h1>A Special Evening for My Love</h1>
  <p class="message">
    Dear Amadea Annarois,<br>
    I would be honored if you would join me for a birthday dinner. Let's celebrate this special day with love, laughter, and unforgettable memories.
  </p>
  <div class="details">
    <div class="detail-item">
      <i class="fas fa-calendar"></i>
      <span>Date: October 3, 2024</span>
    </div>
    <div class="detail-item">
      <i class="fas fa-clock"></i>
      <span>Time: 19:00</span>
    </div>
    <div class="detail-item">
      <i class="fas fa-map-marker-alt" style="color: #ffd700;"></i>
      <span>Location: <a href="https://maps.app.goo.gl/X6D5aqnJG8y7egKw6" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: none;">The Westin, Jakarta</a></span>
    </div>
  </div>
  <button class="rsvp-button">RSVP</button>
  <footer>
    <p>Forever Yours,</p>
    <p>Oktavianus Irvan</p>
  </footer>
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
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

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
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .stars {
    position: absolute;
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

  .message {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }

  .detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .detail-item i {
    margin-right: 1rem;
    color: #ffd700;
  }

  .rsvp-button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    background-color: transparent;
    color: #ffd700;
    border: 2px solid #ffd700;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .rsvp-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 215, 0, 0.4),
      transparent
    );
    transition: all 0.4s;
  }

  .rsvp-button:hover::before {
    left: 100%;
  }

  .rsvp-button:hover {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  }

  footer {
    margin-top: 3rem;
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-size: 1.2rem;
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
