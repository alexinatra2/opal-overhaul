<template>
  <div class="search-bar">
    <!-- SVG-Logo aus src/assets -->
    <span class="search-icon">
      <img src="/lupe.svg" class="icon" />
    </span>
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Suche"
        class="search-input"
        @input="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Lokaler Zustand für die Sucheingabe
const searchQuery = ref('');

// Funktion, die bei Eingabe aufgerufen wird
const handleSearch = () => {
  console.log('Suchanfrage:', searchQuery.value);
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--background-medium);
  padding: 0.5em 1em;
  border-radius: 20px;
  width: 300px;
  transition: background-color 0.3s ease;
}

.search-bar:hover {
  background-color: var(--main-theme-color-10);
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
  fill: var(--text-dark);
}

.icon {
  width: 1.5rem; /* Breite des Icons */
  height: 1.5rem; /* Höhe des Icons */
  cursor: pointer;
  transition: filter 0.3s ease;
  fill: var(--text-dark); /* Farbe des Icons */
}

.search-bar:hover .icon {
  filter: brightness(1.2); /* Heller bei Hover */
}

.search-input {
  border: none;
  background: none;
  color: var(--text-medium);
  flex: 1;
  font-size: 1rem;
  outline: none;
}

::placeholder {
  color: var(--text-medium);
}
</style>
