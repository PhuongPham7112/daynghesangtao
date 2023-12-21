<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib';
	import { urlFor } from '$lib/image';
	import type { Post } from '$lib/sanity';
	export let data: Post;
</script>

<section class="post">
	{#if data.mainImage}
		<img
			class="post__cover"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>
		<p class="post__excerpt">{data.excerpt}</p>
		<p class="post__date">
			{formatDate(data._createdAt)}
		</p>
		<div class="post__content">
            <PortableText value={data.body} components={{}} />
		</div>
	</div>
</section>