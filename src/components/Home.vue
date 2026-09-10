<template>
    <article 
      class="
        main-article
        items-center
        text-center
        min-[23.75rem]:text-left
        pb-[5rem]
        px-[4rem]
      "
    >
    <img 
      src="../assets/anti-war-logo.jpg" alt="Anti-War" width="150" class="rounded-full"
    />
    <header class="header flex flex-col items-center italic-text pt-[1rem]">
      <h1 class="font-bold text-2xl">
        {{ homePage?.header }}
      </h1>
      <h2 class="text-xl pt-[1rem]">
        {{ homePage?.subHeader }}
      </h2>
    </header>
    <p class="max-w-[19rem] text-center pt-[1rem]">
      {{ homePage?.description }}
    </p>
    <a 
      :href="homePage?.buttonLink"
      class="mt-[1rem] bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ homePage?.buttonText }}
    </a>
    </article>
</template>

<script setup lang="ts">
import * as homePage from "@/text-files/home.json"
console.log("NAVE LINKS", homePage)
</script>

<style scoped>
.main-article {
  display: flex;
  flex-direction: column;
}
.italic-text {
  font-style: italic;
}
</style>