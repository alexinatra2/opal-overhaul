<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Footer from "./components/layout/Footer.vue";
import {useUiStore} from "@/store/ui.ts";

const uiStore = useUiStore();
</script>

<template>
  <div class="app-container">
    <Header @toggleDrawer="uiStore.toggleSidebar"/>
    <main class="main-content">
      <Sidebar :isOpen="uiStore.sidebarOpen" @close="uiStore.toggleSidebar"/>
      <Transition name="fade" mode="out-in">
        <router-view/>
      </Transition>
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
  position: relative;
  flex: 1;
  overflow-y: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to /* 'to' is required for Vue 3 */
{
  opacity: 0;
}
</style>
