<template>
  <div class="card">
    <h3 class="title">Completed ✅</h3>
    <div class="todo-list">
      <ul v-if="completedTodos.length > 0">
        <li v-for="todo in completedTodos" :key="todo.id" class="todo-item">
          <div class="todo-content">
            <span :class="['category-badge', todo.category?.toLowerCase() || 'personal']">
              {{ todo.category || 'Personal' }}
            </span>
            <span class="todo-text" style="text-decoration: line-through; opacity: 0.7;">
              {{ todo.text }}
            </span>
          </div>
        </li>
      </ul>
      <p v-else class="empty-state">No completed tasks yet.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useTodos } from '@/stores/todos';

export default {
  name: 'CompletedView',
  computed: {
    ...mapState(useTodos, [
      'completedTodos'
    ])
  }
}
</script>
