<script setup lang="ts">
import useCoursesStore, {Course} from "@/store/courses.ts";
import OpalButton from "@/components/shared/OpalButton.vue";
import {computed} from "vue";

const props = defineProps<{ course: Course }>();
const courseId = props.course.id;

const coursesStore = useCoursesStore();
const toggleEnrolment = () => {
  coursesStore.toggleEnrolment(courseId);
}
const isEnrolled = computed(() => coursesStore.enrolled.includes(courseId));
</script>

<template>
  <div class="w-full h-full py-4 px-8 flex flex-col gap-4">
    <section>
      <h1 class="text-5xl font-bold">{{ course.name }}</h1>
      <p class="text-base">{{ course.id }}</p>
      <p class="text-base text-gray-500">{{ course.author }}</p>
      <div v-if="course.period" class="text-base text-gray-500 flex gap-2">
        <p>{{ course.period.label }}</p>
        <p v-if="course.period.detailed">
          vom {{ course.period.detailed.start.toLocaleDateString() }} bis
          {{ course.period.detailed.end.toLocaleDateString() }}
        </p>
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Updates</h2>
      <p>Hier finden Sie updates zu diesem Kurs</p>
    </section>

    <section v-if="course.desc" class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Beschreibung</h2>
      <p>{{ course.desc }}</p>
    </section>

    <section>
      <OpalButton @click="toggleEnrolment" class="w-48" :color-variant="isEnrolled ? 'red' : 'default'">
        {{ isEnrolled ? "Austragen" : "Einschreiben" }}
      </OpalButton>
    </section>
  </div>
</template>