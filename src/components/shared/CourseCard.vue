<script setup lang="ts">
import {computed} from "vue";
import OpalCard from "@/components/shared/OpalCard.vue";
import useCoursesStore, {Course} from "@/store/courses.ts";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const coursesStore = useCoursesStore();

const {course} = withDefaults(defineProps<{ course: Course, showEnrolmentStatus?: boolean }>(), {
  showEnrolmentStatus: false,
});
const isEnrolled = computed(() => coursesStore.enrolled.includes(course.id));
</script>

<template>
  <router-link :to="`/courses/${course.id}`">
    <OpalCard class="border-2 border-transparent hover:border-primary-600 h-64 overflow-hidden">
      <template #header>
        <div class="relative w-full flex justify-between">
          <div class="text-left max-w-md">
            <h3>{{ course.name }}</h3>
            <p class="text-base font-medium">{{ course.id }}</p>
            <p class="text-base font-medium text-gray-500">{{ course.author }}</p>
          </div>
          <font-awesome-icon v-if="showEnrolmentStatus && isEnrolled" :icon="faCheck" class="text-primary-400"/>
        </div>
      </template>
      <p class="h-32 text-sm overflow-clip">
        {{ course.desc }}
      </p>
    </OpalCard>
  </router-link>
</template>