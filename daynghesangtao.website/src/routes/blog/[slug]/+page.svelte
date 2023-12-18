<main class="text-black">
    {#if data.posts && data.posts.length}
    <ul>
        {#each data.posts as post}
        <li>{post.title}</li>
        {/each}
    </ul>
    {:else}
	<p>No posts found.</p>
    {/if}
</main>

<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>