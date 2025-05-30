import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoListView,
    },
  ],
})

export default router
