<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars, faCog, faUser} from "@fortawesome/free-solid-svg-icons";
import {useUiStore} from "@/store/ui.ts";

const uiStore = useUiStore();
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="group">
        <button class="icon scale-animate" @click="uiStore.toggleSidebar">
          <font-awesome-icon :icon="faBars"/>
        </button>
        <router-link to="/">
          <img src="/logo.png" alt="Logo" class="h-8 logo scale-animate"/>
        </router-link>
      </div>
      <div class="group">
        <SearchBar/>
        <button class="icon scale-animate">
          <font-awesome-icon :icon="faUser"/>
        </button>
        <button class="icon scale-animate">
          <font-awesome-icon :icon="faCog"/>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  background-color: var(--color-gray-700);
}

.group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-dark);
}

.scale-animate {
  transition: transform 0.2s ease-in-out;
}

.scale-animate:hover {
  transform: scale(1.1);
}
</style>
