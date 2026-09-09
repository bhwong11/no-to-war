<template>
  <div class="flex flex-col items-center">
    <img 
      :src="signUpPage?.bannerLink || defaultImageUrl"
      class="header-image"
      alt="Join Anti-war"
    />
    <h1 class="text-4xl font-bold tracking-tight pt-[2rem]">
      {{ signUpPage?.header }}
    </h1>
    <a 
      :href="signUpPage?.buttonLink"
      class="mt-[1rem] bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ signUpPage?.buttonText }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import * as signUpPage from "@/text-files/signUp.json"

const defaultImageUrl = computed(() => {
  return new URL('@/assets/anti-war-sign-up.png', import.meta.url).href
})
</script>
