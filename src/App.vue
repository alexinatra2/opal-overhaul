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
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
