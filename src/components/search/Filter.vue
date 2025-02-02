<script setup lang="ts">
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import StartIconButton from "@/components/shared/StartIconButton.vue";
</script>

<template>
  <div class="flex justify-end items-center gap-4 w-5xl">
    <StartIconButton :icon="faFilter">
      Filtern
    </StartIconButton>
  </div>
</template>