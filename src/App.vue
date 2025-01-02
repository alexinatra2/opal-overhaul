<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Vollbildhöhe */
}

.main-content {
  flex: 1; /* Der Hauptinhalt nimmt den restlichen Platz ein */
  padding: 2em;
  background-color: var(--background-light);
  overflow-y: auto; /* Ermöglicht Scrollen, falls der Inhalt zu groß ist */
}
</style>
