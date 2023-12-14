<script>
    export let cardTitle = "Khóa học";
    export let cardDescription = "Miêu tả khóa học: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    export let cardImage = "assets/rectangle-3.png";
</script>

<div class="relative w-full h-[300px] text-deepBlue shadow-md rounded-md flex items-center p-8">
    <div class="flex flex-col space-y-5">
        <h3 class="text-brightBlue">{cardTitle}</h3>
        <p class="w-2/3 text-zincGray">
            {cardDescription}
        </p>
    </div>
    <img
      class="w-full h-[200px] object-cover"
      alt="Rectangle"
      src={cardImage}
    />
</div>