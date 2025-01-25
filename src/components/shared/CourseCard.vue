<script setup lang="ts">
import {computed, useSlots} from "vue";
import OpalCard from "@/components/shared/OpalCard.vue";
import useCoursesStore, {Course} from "@/store/courses.ts";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const coursesStore = useCoursesStore();

const slots = useSlots();
const {course} = defineProps<{ course: Course }>();
const isEnrolled = computed(() => coursesStore.enrolled.includes(course.id));
</script>

<template>
  <OpalCard>
    <template #header>
      <div class="relative w-full flex justify-between">
        <div class="text-left">
          <h3>{{ course.name }}</h3>
          <p class="text-base font-medium">{{ course.id }}</p>
          <p class="text-base font-medium text-gray-500">{{ course.author }}</p>
        </div>
        <font-awesome-icon v-if="isEnrolled" :icon="faCheck" class="text-primary-400"/>
      </div>
    </template>
    <p class="w-[300px] h-32 text-sm overflow-clip">
      {{ course.desc }}
    </p>
    <template v-if="slots.actions" #actions>
      <div class="flex justify-end">
        <slot name="actions"></slot>
      </div>
    </template>
  </OpalCard>
</template>