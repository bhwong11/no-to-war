<template>
  <div class="main-page">
    <nav class="nav-bar flex justify-end">
      <ul class="nav-buttons items-center flex-col min-[17.2rem]:flex-row">
        <li>
          <RouterLink to="/" v-if="currentPath !== '/'">
            <button class="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">
              Go to Home
            </button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sign-up/" v-if="currentPath.replace(/\/+$/, '') !== '/sign-on'">
            <button class="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">
              Sign Up
            </button>
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
const route = useRoute()

const currentPath = computed(() => route.path);
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
  padding: 1rem;
  align-items: center;
  .nav-buttons {
    display: flex;
    gap: 0.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 23.438rem) {
  .nav-bar {
    flex-direction: row;
  }
}
</style>
