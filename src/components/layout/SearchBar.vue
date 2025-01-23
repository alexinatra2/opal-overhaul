<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchQuery = ref('');

const handleSearch = () => {
  console.log('Suchanfrage:', searchQuery.value);
};
</script>

<template>
  <div class="search-bar">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Suche"
        class="search-input"
        @input="handleSearch"
    />
    <font-awesome-icon :icon="faSearch" class="icon" />
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--background-light);
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  width: 300px;
  transition: background-color 0.3s ease;
}

.icon {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-dark);
}

.search-input {
  outline: none;
  border: none;
  background: none;
  color: var(--text-light);
  flex: 1;
  font-size: 1rem;
}

::placeholder {
  color: var(--main-theme-gray-50);
}
</style>
