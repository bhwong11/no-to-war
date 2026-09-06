<template>
  <div class="main-page">
    <nav class="nav-bar flex justify-end">
      <ul class="
        nav-buttons
        items-center
        flex-col
        min-[17.2rem]:flex-row
        px-[1rem]
        "
      >
        <li 
          v-for="navLink, index in navLinks.filter(filterCurrentPageLink)"
          :key="`${navLink.linkHref}-${index}`"
          class="
            hover:bg-red-800
            hover:text-white
            font-bold
            py-[1rem]
            px-[0.5rem]
            text-xl
            text-center
          "
        >
          <RouterLink 
            :to="navLink.linkHref"
          >
            <p class="underline color-nacl">
              {{navLink.linkText}}
            </p>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <main class="w-full flex justify-center flex-col  px-[1rem]">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'
import { navLinks, type NavLink } from '@/consts/navLinks';
const route = useRoute()

const currentPath = computed(() => route.path);

const filterCurrentPageLink = (navLink: NavLink) => (
  navLink.isHome ? currentPath.value !== '/' : currentPath.value !== navLink.linkHref
)
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .nav-buttons {
    display: flex;
    gap: 0.5rem;
    list-style-type: none;
    margin: 0;
  }
}

@media (min-width: 23.438rem) {
  .nav-bar {
    flex-direction: row;
  }
}
</style>
