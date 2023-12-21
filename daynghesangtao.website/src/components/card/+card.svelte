<script lang="ts">
    import { urlFor } from '$lib/image';
	import type { Image, ImageAsset } from '@sanity/types';
    export let cardImage : ImageAsset | undefined;
    export let cardTitle = "Khóa học";
    export let cardDescription = "Miêu tả khóa học: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    export let cardLink = "/courses";
</script>

<div class="relative w-full h-[300px] text-deepBlue shadow-md rounded-md flex items-center p-8">
    <div class="flex flex-col space-y-5">
        <a href={cardLink}><h3 class="text-brightBlue">{cardTitle}</h3></a>
        <p class="w-2/3 text-zincGray">
            {cardDescription}
        </p>
    </div>
    {#if cardImage}
    <img
      class="w-full h-[200px] object-cover"
      alt=" "
      src={urlFor(cardImage).url()}
    />
    {/if}
</div>