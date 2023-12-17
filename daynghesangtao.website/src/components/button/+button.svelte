<script>
    export let buttonText = 'Click me';
    export let onClick = () => {};

    function handleClick() {
        onClick();
    }
</script>

<button class="text-white font-bold py-2 px-5 rounded" on:click={handleClick}>
    <a href="/contact"><h4>{buttonText}</h4></a>
</button>