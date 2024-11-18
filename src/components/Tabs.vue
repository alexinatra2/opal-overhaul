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

// Liste der Tabs
const tabs = ['Kurs 1', 'Kurs 2', 'Kurs 3', 'Kurs 4'];

// Aktuell ausgewählter Tab
const activeTab = ref(0);

// Hover-Zustand
const hoveredTab = ref(-1);

// Tab auswählen
const selectTab = (index: number) => {
  activeTab.value = index;
};

// Hover-Effekt
const hoverTab = (index: number) => {
  hoveredTab.value = index;
};
</script>

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  gap: 4em;
}

.tab {
  color: #888; /* Grau für inaktive Tabs */
  cursor: pointer;
  font-size: 1.25em;
  transition: color 0.3s ease;
}

.tab:hover,
.tab.active {
  color: #00b1d9;
}
</style>
