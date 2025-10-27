import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/text-animations/wavy-text',
      name: 'textAnimations/WavyText',
      component: () => import('../views/TextAnimations/WavyText.vue'),
    },
    {
      path: '/cards/animate-card-border',
      name: 'cards/AnimateCardBorder',
      component: () => import('../views/Cards/AnimatedCardBorder.vue'),
    },
    {
      path: '/text-animations/follow-cursor-text',
      name: 'textAnimations/FollowCursorText',
      component: () => import('../views/TextAnimations/FollowCursorText.vue'),
    },
  ],
})

export default router
