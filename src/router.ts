import Home from '@/components/Home.vue'
import SignOn from '@/components/SignUp.vue'
import Page404 from '@/components/Page404.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-up/', component: SignOn },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory("/no-to-war/"),
  routes,
})