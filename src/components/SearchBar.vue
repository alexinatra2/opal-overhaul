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

// Lokaler Zustand für die Eingabe
const searchQuery = ref('');

// Suchlogik (wird derzeit nur simuliert)
const handleSearch = () => {
  console.log('Suchanfrage:', searchQuery.value);
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #444;
  padding: 0.5em 1em;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  color: white;
}

.search-bar:hover {
  background-color: #666;
}

.search-input {
  border: none;
  background: none;
  color: white;
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
  color: white;
  opacity: 0.7;
}
</style>
