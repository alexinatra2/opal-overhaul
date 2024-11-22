<template>
  <div class="search-bar">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Suche"
        class="search-input"
        @input="handleSearch"
    />
    <span class="search-icon">🔍</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const handleSearch = () => {
  console.log('Suchanfrage:', searchQuery.value);
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--main-theme-gray-50);
  padding: 0.5em 1em;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  color: var(--neutral-white);
}

.search-bar:hover {
  background-color: var(--main-theme-gray-30);
}

.search-input {
  border: none;
  background: none;
  color: var(--neutral-white);
  flex: 1;
  margin-right: 0.5em;
  font-size: 1rem;
  outline: none;
}

.search-icon {
  font-size: 1.2rem;
  cursor: pointer;
}

::placeholder {
  color: var(--main-theme-gray-20);
}
</style>
