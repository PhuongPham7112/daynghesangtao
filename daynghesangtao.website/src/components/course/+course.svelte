<!-- CourseDetail.svelte -->

<script>
    export let courseDetails = new Map();
    export let courseTitle = "Course Title";
  </script>
  
  <div class="h-auto p-5 flex flex-col items-center">
    <div class="h-auto p-5 w-full md:w-2/3 shadow-custom">
      <h1 class="text-deepBlue mb-5">{courseTitle}</h1>
  
      {#each courseDetails as [title, content]}
        <div class="text-white bg-brightBlue rounded-md p-3">
          <h4>{title}</h4>
        </div>
        <p class="text-black p-3">{content}</p>
      {/each}
    </div>
  </div>