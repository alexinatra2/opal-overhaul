<script setup lang="ts">
/*
  Importiere die Header-, Sidebar- und Footer-Komponenten aus dem Layout-Ordner.
  Diese Komponenten bilden die Hauptstruktur der Anwendung.
*/
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Footer from "./components/layout/Footer.vue";

/*
  Importiere und initialisiere den Zustandsspeicher (Store) für die Benutzeroberfläche (UI).
  `useUiStore` wird verwendet, um auf den globalen Zustand des UI zuzugreifen, z. B. ob die Sidebar geöffnet ist.
*/
import {useUiStore} from "@/store/ui.ts";

const uiStore = useUiStore();
</script>

<template>
  <!-- Hauptcontainer der Anwendung -->
  <div class="app-container">
    <!-- Header-Komponente mit einem Event zur Steuerung der Sidebar -->
    <Header @toggleDrawer="uiStore.toggleSidebar" />

    <!-- Hauptinhalt der Anwendung -->
    <main class="main-content">
      <!-- Sidebar-Komponente, die den Zustand erhält, ob sie geöffnet ist oder nicht -->
      <Sidebar :isOpen="uiStore.sidebarOpen" @close="uiStore.toggleSidebar" />

      <!-- Platzhalter für die aktuellen Seiteninhalte (Router-View) -->
      <router-view v-slot="{ Component }">
        <!-- Übergangseffekt zwischen den Routenansichten -->
        <transition name="fade" mode="out-in">
          <!-- Dynamische Komponente für den aktuell geladenen Routeninhalt -->
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer-Komponente -->
    <Footer />
  </div>
</template>

<style scoped>
/*
  Styles für den Hauptcontainer der Anwendung:
  - Relative Positionierung für eventuelle Layout-Anpassungen
  - Flexbox für vertikale Anordnung der Komponenten
  - Höhe der Anwendung ist 100% der Ansichtshöhe
*/
.app-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/*
  Styles für den Hauptinhalt:
  - Relative Positionierung innerhalb des Containers
  - Flexbox-Element, das den restlichen Platz einnimmt
  - Automatischer vertikaler Bildlauf bei Überlauf
*/
.main-content {
  position: relative;
  flex: 1;
  overflow-y: auto;
}

/*
  CSS für die Fade-Transition:
  - Zu Beginn des Einblendens und am Ende des Ausblendens ist die Opazität 0
*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
  CSS für den aktiven Übergang:
  - Die Opazität wird während des Übergangs animiert
  - Dauer der Animation: 0,3 Sekunden mit einer sanften Ein-/Ausblendung
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
