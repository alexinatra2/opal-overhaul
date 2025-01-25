<script setup lang="ts">
import OpalButton from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSortAlphaAsc, faSortAlphaDesc} from "@fortawesome/free-solid-svg-icons";
import OpalVerticalPage from "@/components/shared/OpalVerticalPage.vue";
import CourseCard from "@/components/shared/CourseCard.vue";
import useCoursesStore from "@/store/courses.ts";
import {computed, ref} from "vue";

const sortAscending = ref(true);
const courseData = useCoursesStore();
const sortedCourses = computed(() => courseData.courses.toSorted((course1, course2) => {
  return sortAscending.value ? course1.name < course2.name : course1.name > course2.namea;
}));

const toggleSortDirection = () => {
  sortAscending.value = !sortAscending.value;
}
</script>

<template>
  <OpalVerticalPage>
    <template #headline>
      Deine Kurse
    </template>
    <template #headerContent>
      <OpalButton @click="toggleSortDirection">
        <template #start-adornment>
          <font-awesome-icon :icon="sortAscending ? faSortAlphaAsc : faSortAlphaDesc"/>
        </template>
        Sortieren
      </OpalButton>
    </template>
    <section class="flex flex-wrap gap-4 p-4">
      <CourseCard
          v-for="course in sortedCourses"
          :course="course"
          :key="course.id"
      >
        <template #actions>
          <OpalButton>
            <router-link :to="`/courses/${course.id}`">
              Zur Kursseite
            </router-link>
          </OpalButton>
        </template>
      </CourseCard>
    </section>
  </OpalVerticalPage>
</template>

<style scoped>
</style>
