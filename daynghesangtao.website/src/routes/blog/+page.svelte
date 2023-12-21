<script lang="ts">
    import Headbar from "../../components/headbar/+headbar.svelte";
    import Card from "../../components/card/+card.svelte";
    import type { PageData } from './$types';
    export let data : PageData;
</script>

<div class="bg-brightBlue p-5">
    <Headbar />
</div>


<section class="p-5">
    <h1 class="text-deepBlue"> Bài viết </h1>
	{#if data.posts.length}
		{#each data.posts as post}
			<Card cardTitle={post.title} 
                cardImage={post.mainImage} 
                cardDescription={post.excerpt} 
                cardLink={`/blog/${post.slug.current}`}/>
		{/each}
	{/if}
</section>