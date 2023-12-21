<script lang="ts">
    import { urlFor } from '$lib/image';
	import type { Image, ImageAsset } from '@sanity/types';
    export let cardImage : ImageAsset | string | undefined;
    export let cardTitle = "Khóa học";
    export let cardDescription = "Miêu tả khóa học: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";
    export let cardLink = "/courses";
</script>

<div class="relative w-full h-[300px] text-deepBlue shadow-md rounded-md flex items-center justify-between p-8">
    <div class="flex flex-col w-1/2 space-y-5">
        <a href={cardLink}><h3 class="text-brightBlue">{cardTitle}</h3></a>
        <p class="w-2/3 text-zincGray">
            {cardDescription}
        </p>
    </div>
    {#if cardImage}
        <img
        class="w-1/2 h-[200px] object-cover"
        alt=" "
        src={urlFor(cardImage)}
        />
    {/if}
</div>