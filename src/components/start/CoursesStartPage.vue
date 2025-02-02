<script setup lang="ts">
import OpalButton from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSortAlphaAsc, faSortAlphaDesc} from "@fortawesome/free-solid-svg-icons";
import OpalVerticalPage from "@/components/shared/OpalVerticalPage.vue";
import CourseCard from "@/components/shared/CourseCard.vue";
import {computed, ref} from "vue";
import {storeToRefs} from "pinia";
import useCoursesStore from "@/store/courses.ts";
import OpalTransitionGroup from "@/components/shared/OpalTransitionGroup.vue";

const sortAscending = ref(true);
const {enrolledCourses} = storeToRefs(useCoursesStore());
const sortedCourses = computed(() => enrolledCourses
    .value
    .toSorted((course1, course2) => {
      return course1.name < course2.name;
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
    <section class="grid grid-cols-4 gap-4 p-4">
      <OpalTransitionGroup>
        <CourseCard
            v-for="course in sortedCourses"
            :course="course"
            :key="course.id"
        />
      </OpalTransitionGroup>
    </section>
  </OpalVerticalPage>
</template>
