<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Footer from "./components/layout/Footer.vue";

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <div class="app-container">
    <Header @toggleDrawer="toggleDrawer" />
    <Sidebar :isOpen="isDrawerOpen" @close="toggleDrawer" />
    <main class="main-content">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.main-content {
  flex: 1;
}
</style>
