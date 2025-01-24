<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Footer from "./components/layout/Footer.vue";
import {sidebarOpen} from "@/store/ui.ts";

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
  <div class="app-container">
    <Header @toggleDrawer="toggleSidebar"/>
    <Sidebar :isOpen="sidebarOpen" @close="toggleSidebar"/>
    <main class="main-content">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
