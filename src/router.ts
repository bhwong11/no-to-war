import Home from '@/components/Home.vue'
import SignUp from '@/components/SignUp.vue'
import Calendar from '@/components/Calendar.vue'
import Links from '@/components/Links.vue'
import Page404 from '@/components/Page404.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-up/', component: SignUp },
  { path: '/calendar/', component: Calendar },
  { path: '/Links/', component: Links },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory("/no-to-war/"),
  routes,
})