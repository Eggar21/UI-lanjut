import { createRouter, createWebHistory } from 'vue-router'

import Todo from '@/views/TodoView.vue'
import Completed from '@/views/CompletedView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Todo },
    { path: '/completed', component: Completed }
  ]
})

export default router
