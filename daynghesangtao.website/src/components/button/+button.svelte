<script>
    export let buttonText = 'Click me';
    export let onClick = () => {};

    function handleClick() {
        onClick();
    }
</script>

<button class="text-white font-bold py-2 px-4 rounded" on:click={handleClick}>
    {buttonText}
</button>