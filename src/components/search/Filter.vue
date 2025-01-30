<script setup lang="ts">
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "@/components/layout/SearchBar.vue";
import StartIconButton from "@/components/shared/StartIconButton.vue";
</script>

<template>
  <div class="flex justify-end items-center gap-4 w-5xl">
    <SearchBar/>
    <StartIconButton :icon="faFilter">
      Filtern
    </StartIconButton>
  </div>
</template>