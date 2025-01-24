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
  color: var(--gray-50);
}
</style>
