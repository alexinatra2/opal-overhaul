<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "vue-router";
import useQueryRef from "@/composables/useQueryRef.ts";

const router = useRouter();
const searchQuery = useQueryRef("search", "");

const submitSearch = async () => {
  if (searchQuery.value.trim()) {
    await router.push({name: 'search', query: {search: searchQuery.value}})
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch">
    <div
        class="flex items-center bg-gray-100 px-4 py-1 rounded-full w-72 border-2 border-transparent focus-within:border-primary-400 transition">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Suche"
          class="flex-1 bg-transparent outline-none text-gray-700 text-base"
          @keydown.enter="submitSearch"
      />
      <router-link :to="{ name: 'search', query: { search: searchQuery } }">
        <font-awesome-icon :icon="faSearch" class="text-gray-500 transition-colors hover:text-primary-400"/>
      </router-link>
    </div>
  </form>
</template>



