<template>
  <div v-for="link in links">
    <a :href="link.linkHref" class="text-blue-600 hover:text-blue-800 hover:underline">
      {{ link.linkText }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { links } from "@/consts/LinksPage";
</script>
