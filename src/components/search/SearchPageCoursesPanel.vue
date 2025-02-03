<script setup lang="ts">

import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CourseCard from "@/components/shared/CourseCard.vue";
import OpalButton from "@/components/shared/OpalButton.vue";
import OpalTransitionGroup from "@/components/shared/OpalTransitionGroup.vue";
import useCoursesStore, {Course} from "@/store/courses.ts";
import {reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";

const coursesStore = useCoursesStore();

const loading = ref(true);
const serverData = reactive<{ courses: Array<Course> }>({courses: []});

const loadAvailableCourses = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  serverData.courses = coursesStore.courses;
  loading.value = false;
}

const route = useRoute();
watch(() => route.query.value, loadAvailableCourses, {immediate: true});
</script>

<template>
  <div class="relative w-full h-full" :key="$route.fullPath">
    <div v-if="loading" class="absolute inset-0 flex justify-center items-center">
      <font-awesome-icon :icon="faSpinner" class="text-primary-600 animate-spin z-10" size="2xl"/>
      <div class="absolute inset-0 bg-gray-200 backdrop-opacity-10"/>
    </div>
    <section class="grid grid-cols-4 gap-4 p-4">
      <OpalTransitionGroup>
        <CourseCard
            v-for="course in serverData.courses"
            :course="course"
            :key="course.id"
            show-enrolment-status
        >
          <template #actions>
            <OpalButton>
              <router-link :to="`/courses/${course.id}`">
                Zur Kursseite
              </router-link>
            </OpalButton>
          </template>
        </CourseCard>
      </OpalTransitionGroup>
    </section>
  </div>
</template>

<style scoped>

</style>