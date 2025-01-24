<script setup lang="ts">
import {ref} from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "vue-router";

const searchQuery = ref('');
const router = useRouter();

const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({name: 'search', query: {value: searchQuery.value}})
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch">
    <div class="search-bar">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Suche"
          class="search-input"
          @keydown.enter="submitSearch"
      />
      <router-link :to="{ name: 'search', query: { value: searchQuery }}">
        <font-awesome-icon :icon="faSearch"/>
      </router-link>
    </div>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--background-light);
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  width: 300px;
  transition: border 0.3s ease;
  border: 2px solid transparent;
}

.search-bar svg {
  transition: color 0.3s ease;
}

.search-bar:focus-within {
  border: 2px solid var(--primary-40);
  color: var(--primary-40);
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
  color: var(--gray-50);
}
</style>
