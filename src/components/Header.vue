<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import Tabs from './Tabs.vue';
import Profile from './Profile.vue';
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="left-group">
        <img src="./assets/logo.png" alt="Logo" class="logo" />
        <Tabs />
      </div>
      <div class="right-group">
        <SearchBar />
        <Profile />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: var(--background-dark);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 2em;
  color: var(--text-dark);
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
  height: 100%;
  max-height: 50px;
  width: auto;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em var(--main-theme-color-40));
}
</style>
