<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import Tabs from './Tabs.vue';
import Profile from './Profile.vue';
import Settings from "./Settings.vue";
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="left-group">
        <img src="/logo.png" alt="Logo" class="logo" />
        <Tabs />
      </div>
      <div class="right-group">
        <SearchBar />
        <Profile />
        <Settings />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-content {
  display: flex;
  align-items: center; /* Zentriert die Elemente vertikal */
  justify-content: space-between; /* Abstand zwischen linker und rechter Gruppe */
  padding: 0.3em 2em;
  color: var(--text-dark);
  height: 60px; /* Einheitliche Höhe für den Header */
}

.left-group {
  display: flex;
  align-items: center;
  gap: 2em;
}

.right-group {
  display: flex;
  align-items: center;
  gap: 1em;
}

.logo {
  height: 35px; /* Feste Höhe für das Logo */
  width: auto;
  transition: filter 300ms;
}

.logo:hover {
  transform: scale(1.1); /* Vergrößert das gesamte Profilbild leicht */
  filter: brightness(1.2);
}

</style>
