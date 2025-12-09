<template>
  <div class="card glass-panel">
    <div class="card-header">
      <h3 class="card-title">Tasks</h3>
      <span class="task-count">{{ pendingTodos.length }} pending</span>
    </div>

    <form @submit.prevent="submitTodo" class="todo-form">
      <div class="input-wrapper">
        <input
          v-model="todo.text"
          type="text"
          placeholder="What needs to be done?"
          class="todo-input"
        />
        <select v-model="todo.category" class="category-select">
          <option value="Personal">🏠 Personal</option>
          <option value="Work">💼 Work</option>
          <option value="Shopping">🛒 Shopping</option>
          <option value="Urgent">🔥 Urgent</option>
        </select>
      </div>
      <button :disabled="!todo.text" type="submit" class="btn-add">
        <span>Add Task</span>
        <span class="btn-icon-plus">+</span>
      </button>
    </form>

    <div class="todo-progress" v-if="pendingTodos.length > 0">
       <div class="progress-bar">
         <!-- Placeholder for future progress bar feature -->
       </div>
    </div>

    <div class="todo-list">
      <TransitionGroup name="list" tag="ul">
        <li v-for="pendingTodo in pendingTodos" :key="pendingTodo.id" class="todo-item">
          <div class="todo-content">
            <span :class="['category-dot', pendingTodo.category?.toLowerCase() || 'personal']"></span>
            <div class="text-wrapper">
              <span class="todo-text">{{ pendingTodo.text }}</span>
              <span class="category-label">{{ pendingTodo.category || 'Personal' }}</span>
            </div>
          </div>
          <div class="actions">
            <button @click="updateTodo({ ...pendingTodo, isCompleted: true})" class="btn-action btn-check" title="Mark done">
              <span class="icon">✓</span>
            </button>
            <button @click="destroyTodo(pendingTodo.id)" class="btn-action btn-delete" title="Delete">
              <span class="icon">×</span>
            </button>
          </div>
        </li>
      </TransitionGroup>

      <div v-if="pendingTodos.length === 0" class="empty-state">
        <div class="empty-icon">🎉</div>
        <p>All caught up!</p>
        <small>Take a break, you deserve it.</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useTodos } from '@/stores/todos';

export default {
  name: 'TodoView',
  data: () => ({
    todo: {
      id: null,
      text: null,
      category: 'Personal',
      isCompleted: false
    }
  }),
  computed: {
    ...mapState(useTodos, [
      'pendingTodos',
      'completedTodos'
    ])
  },
  methods: {
    ...mapActions(useTodos, [
      'storeTodo',
      'updateTodo',
      'destroyTodo'
    ]),
    submitTodo() {
      if (!this.todo.text) return;
      this.storeTodo({ ...this.todo });
      this.todo.text = ''; // Reset input
      this.todo.category = 'Personal'; // Reset category
    }
  }
}
</script>

<style scoped>
.card {
  padding: 2.5rem;
  width: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.025em;
}

.task-count {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(99, 102, 241, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.todo-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.input-wrapper {
  display: flex;
  gap: 0.75rem;
}

.todo-input {
  flex: 1;
  font-size: 1.05rem;
}

.category-select {
  width: 140px;
  cursor: pointer;
}

.btn-add {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  color: white;
  padding: 1rem;
  border-radius: var(--radius);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-add:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.4);
}

.btn-add:active:not(:disabled) {
  transform: translateY(0);
}

.btn-add:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: var(--text-muted);
  box-shadow: none;
}

.todo-list ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: calc(var(--radius) - 4px);
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.todo-item:hover {
  background-color: white;
  box-shadow: var(--shadow-sm);
  transform: scale(1.01);
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Category Colors */
.personal { background-color: #6366f1; box-shadow: 0 0 8px rgba(99, 102, 241, 0.4); }
.work { background-color: #ec4899; box-shadow: 0 0 8px rgba(236, 72, 153, 0.4); }
.shopping { background-color: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
.urgent { background-color: #ef4444; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4); }

.text-wrapper {
  display: flex;
  flex-direction: column;
}

.todo-text {
  font-weight: 500;
  color: var(--text-main);
  font-size: 1.05rem;
}

.category-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 0.75rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.todo-item:hover .actions {
  opacity: 1;
}

.btn-action {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background: rgba(0,0,0,0.03);
  font-weight: bold;
}

.btn-check { color: #10b981; }
.btn-delete { color: #ef4444; }

.btn-check:hover { background: #d1fae5; transform: rotate(15deg); }
.btn-delete:hover { background: #fee2e2; transform: rotate(-15deg); }

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
