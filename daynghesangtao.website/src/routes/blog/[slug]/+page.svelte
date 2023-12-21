<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib';
	import { urlFor } from '$lib/image';
	import type { Post } from '$lib/sanity';
    import Headbar from "../../../components/headbar/+headbar.svelte";
	export let data: Post;
</script>

<div id="head-container" class="bg-brightBlue bg-cover bg-center h-auto p-5 flex flex-col items-center">
    <Headbar />
</div>

<section class="text-black p-5">
	<div class="flex flex-col items-center">
        <div class="text-deepBlue w-1/2 flex-col flex flex-col items-center my-5">
            <h1 class="mb-5">{data.title}</h1>
            <h4 class="post__excerpt">{data.excerpt}</h4>
            <p class="text-lightBlue">
                {formatDate(data._createdAt)}
            </p>
        </div>
		<div class="post__content">
            {#if data.mainImage}
            <img
                class="mb-5"
                src={urlFor(data.mainImage)}
                alt="Cover image for {data.title}"
            />
            {:else}
                <div class="post__cover--none" />
            {/if}
            <PortableText value={data.body} components={{}} />
		</div>
	</div>
</section>