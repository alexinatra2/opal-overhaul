<script setup lang="ts">
import OpalVerticalPage from "@/components/shared/OpalVerticalPage.vue";
import FilterPanel from "@/components/search/FilterPanel.vue";
import SearchPageCoursesPanel from "@/components/search/SearchPageCoursesPanel.vue";
</script>

<template>
  <OpalVerticalPage>
    <template #headline>
      Kurssuche
    </template>

    <template #headerContent>
      <FilterPanel/>
    </template>

    <SearchPageCoursesPanel :key="$route.fullPath"/>
  </OpalVerticalPage>
</template>
