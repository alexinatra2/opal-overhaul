<script setup lang="ts">
import OpalButton from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSortAlphaAsc} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <section class="w-full flex items-center bg-white p-4 gap-4">
    <h1 class="text-3xl font-bold flex-1">Deine Kurse</h1>
    <OpalButton>
      <template #start-adornment>
        <font-awesome-icon :icon="faSortAlphaAsc"/>
      </template>
      Sortieren
    </OpalButton>
  </section>
</template>

<style scoped>
</style>
