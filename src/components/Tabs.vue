<template>
  <div class="tabs">
    <span
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="selectTab(index)"
        @mouseover="hoverTab(index)"
        @mouseleave="hoverTab(-1)"
    >
      {{ tab }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Tabs-Daten
const tabs = ['Kurs 1', 'Kurs 2', 'Kurs 3', 'Kurs 4'];

// Aktiver Tab-Zustand
const activeTab = ref(0);

// Funktion: Tab auswählen
const selectTab = (index: number) => {
  activeTab.value = index;
};

// Funktion: Hover-Effekt
const hoverTab = (index: number) => {
  console.log(`Hovering over tab: ${index}`);
};
</script>

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  gap: 2em;
}

.tab {
  color: var(--main-theme-gray-50);
  cursor: pointer;
  font-size: 1.25em;
  transition: color 0.3s ease;
}

.tab:hover,
.tab.active {
  color: var(--main-theme-color-50);
}
</style>
