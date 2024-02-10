<script>
    // function to take 0 - 10 and return width button in rem (smallest is 8rem)
    /**
	 * @param {number} num
	 */
    function buttonWidth(num) {
	    return `${8 + 1 * num}rem`;
    }

    // function to take 0 - 10 and return height button in rem (smallest is 0.5rem)
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
	    return `${1 + 0.5 * num}rem`;
    }

    /**
	 * @type {string}
	 */
     export let text;
    /**
	 * @type {string}
	 */
     export let bgColor;

    /**
     * 
     * @type {number}
     */
    export let sz;
</script>

<button on:click style="
            background-color:{bgColor}; 
            width: {buttonWidth(sz)}; 
            min-height: {buttonHeight(sz)};
            font-size: {fontSize(sz)}
            ">
    {text}
</button>

<style>
    button {
        word-wrap: break-word;
        border: none;
        padding: auto;
        color: #fff;
        border-radius: 1rem;
        transition: all 250ms;
        transform-origin: center;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25),
        inset 0px -2px 3px rgba(0, 0, 0, 0.25);
    }
    button:hover {
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }
</style>