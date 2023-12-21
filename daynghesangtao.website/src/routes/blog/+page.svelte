<script lang="ts">
    import Card from "../../components/card/+card.svelte";
    import type { PageData } from './$types';
    export let data : PageData;
</script>

<section>
	{#if data.posts.length}
		{#each data.posts as post}
			<Card cardTitle={post.title} 
                cardImage={post.mainImage} 
                cardDescription={post.excerpt} 
                cardLink={`/blog/${post.slug.current}`}/>
		{/each}
	{/if}
</section>