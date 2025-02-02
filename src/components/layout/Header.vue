<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars, faCog, faUser} from "@fortawesome/free-solid-svg-icons";
import {useUiStore} from "@/store/ui.ts";

const uiStore = useUiStore();
</script>

<template>
  <header class="sticky top-0 w-full z-50 bg-gray-700 shadow-md">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center gap-x-4">
        <button class="bg-transparent border-none text-xl text-gray-300 transition-transform transform hover:scale-110"
                @click="uiStore.toggleSidebar">
          <font-awesome-icon :icon="faBars" class="text-white cursor-pointer"/>
        </button>
        <router-link to="/">
          <img src="/logo.png" alt="Logo" class="h-8 transition-transform transform hover:scale-110"/>
        </router-link>
      </div>
      <div class="flex items-center gap-x-4">
        <SearchBar/>
        <button class="bg-transparent border-none text-xl text-gray-300 transition-transform transform hover:scale-110">
          <font-awesome-icon :icon="faUser" class="text-white cursor-pointer"/>
        </button>
        <button class="bg-transparent border-none text-xl text-gray-300 transition-transform transform hover:scale-110">
          <font-awesome-icon :icon="faCog" class="text-white cursor-pointer"/>
        </button>
      </div>
    </div>
  </header>
</template>

