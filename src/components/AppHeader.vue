<template>
  <header class="header">
    <h1 class="title-gradient">My List</h1>
    <nav class="nav">
      <RouterLink to="/" class="nav-link">Todo</RouterLink>
      <RouterLink to="/completed" class="nav-link">Completed</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  padding-bottom: 0.2rem; /* Avoid gradient clipping */
}

.nav {
  display: inline-flex;
  padding: 0.375rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 9999px; /* Pill shape */
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  padding: 0.625rem 1.75rem;
  border-radius: 9999px;
  transition: all 0.25s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: rgba(255, 255, 255, 0.5);
}

.nav-link.router-link-active {
  color: #fff;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
</style>
