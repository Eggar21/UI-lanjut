import { createRouter, createWebHistory } from 'vue-router'

import Todo from '@/views/Todo.vue'
import Completed from '@/views/Completed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Todo },
    { path: '/completed', component: Completed }
  ]
})

export default router