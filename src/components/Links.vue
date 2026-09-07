<template>
  <div class="flex flex-col justify-center items-center">
    <a 
      v-for="link in linksPage?.links"
      :href="link.linkHref" 
      class="
        text-black
        hover:text-white
        hover:underline
        my-[1rem]
        bg-transparent
        hover:bg-black
        font-semibold
        hover:text-white
        py-2
        px-4
        border
        border-black
        hover:border-transparent
        rounded
      "
    >
      {{ link.linkText }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type LinksPage } from "@/consts/types";
const linksPage = ref<LinksPage>();
onMounted(async () => {
  const response = await fetch('/text-files/links.json');
  linksPage.value = await response.json();
})
</script>
