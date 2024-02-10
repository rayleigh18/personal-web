<script>
    // import gif from assets
    import ButtonComponent from './ButtonComponent.svelte';
    import gif from '../../assets/valentine.gif';
    import sadGif from '../../assets/sad-baby.gif';
    import { yesSignal, noSignal,handleButtonClicked, yesButtonTypeSize, handleButtonTryAgain } from './handler';

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
        "This is your last chance",
    ];

</script>

<main>
    {#if $yesSignal}
        <img src={gif} alt="valentine" />
        <h1>Yes, I will be your valentine</h1>
        <h1>See You at 14th February</h1>
    {:else if $noSignal}
        <img src={sadGif} alt="sad" />
        <h1>No, I won't be your valentine</h1>
        <ButtonComponent text="You can try if you change your mind" bgColor={"#39c41f"} on:click={
            () => {
                handleButtonTryAgain()
            }
        } sz={0}></ButtonComponent>
    {:else}
        <img src={gif} alt="valentine" />
        <h1>Will you be my valentine?</h1>
        <div>
            <ButtonComponent text="YES" bgColor={"#39c41f"} on:click={
                () => {
                    handleButtonClicked(true)
                }
            } sz={$yesButtonTypeSize}>Yes</ButtonComponent>
            
            <ButtonComponent text={noAnswers[$yesButtonTypeSize]} bgColor={"#c51f23"} on:click={
                () => {
                    handleButtonClicked(false)
                }
            } sz={0}></ButtonComponent>
        </div>
    {/if}
</main>

<style>
    img {
        width: 30%;
        height: 30%;
        object-fit: cover;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: aliceblue;
    }
</style>