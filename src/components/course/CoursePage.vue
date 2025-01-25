<script setup lang="ts">
import OpalHorizontalPage from "@/components/shared/OpalHorizontalPage.vue";

import useCoursesStore from "@/store/courses.ts";
import {useRoute} from "vue-router";
import FileTree from "@/components/course/FileTree.vue";
import CourseContent from "@/components/course/CourseContent.vue";
import {computed} from "vue";

const route = useRoute();
const courseStore = useCoursesStore()
const course = computed(() => courseStore.courses.find((c) => c.id === route.params.id));
</script>

<template>
  <OpalHorizontalPage>
    <template #headline>Kurselemente</template>

    <template #sideContent v-if="course && course.nodes">
      <FileTree :nodes="course.nodes"/>
    </template>

    <template #default>
      <CourseContent v-if="course" :course="course"/>
      <p v-else>Kurs nicht gefunden</p>
    </template>
  </OpalHorizontalPage>
</template>