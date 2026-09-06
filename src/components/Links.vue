<template>
  <div class="flex flex-col justify-center items-center">
    <a 
      v-for="link in links"
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
import { links } from "@/consts/LinksPage";
</script>
