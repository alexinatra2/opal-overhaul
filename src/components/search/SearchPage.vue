<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import useCoursesStore, {Course} from "@/store/courses.ts";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCheck, faFilter} from "@fortawesome/free-solid-svg-icons";
import OpalButton from "@/components/shared/OpalButton.vue";
import OpalCard from "@/components/shared/OpalCard.vue";
import {useRoute} from "vue-router";

const coursesStore = useCoursesStore();

const loading = ref(true);
const serverData = reactive<{ courses: Array<Course> }>({courses: []});

const loadAvailableCourses = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  serverData.courses = coursesStore.courses;
  loading.value = false;
}

const route = useRoute();
watch(() => route.query.value, loadAvailableCourses, {immediate: true});
</script>

<template>
  <section class="w-full flex items-center bg-white p-4 gap-4">
    <h1 class="text-3xl font-bold flex-1">Kurssuche</h1>
    <OpalButton>
      <template #start-adornment>
        <font-awesome-icon :icon="faFilter"/>
      </template>
      Filtern
    </OpalButton>
  </section>
  <p v-if="loading">Loading...</p>
  <section v-if="serverData.courses.length > 0" class="flex flex-wrap gap-4 p-4">
    <OpalCard v-for="course in serverData.courses" :key="course.id">
      <template #header>
        <div class="relative">
          <div class="w-full text-left">
            <h3>{{ course.name }}</h3>
            <p class="text-base font-medium">{{ course.id }}</p>
            <p class="text-base font-medium text-gray-500">{{ course.author }}</p>
          </div>
          <div class="absolute top-1 right-0 flex items-center gap-2">
            <font-awesome-icon :icon="faCheck" class="text-(--primary-40)"/>
            <p class="text-sm font-medium">eingeschrieben</p>
          </div>
        </div>
      </template>
      <p class="w-[300px] h-32 text-sm overflow-clip">
        {{ course.desc }}
      </p>
      <template #actions>
        <div class="flex justify-end">
          <OpalButton>
            <router-link :to="`/course/${course.id}`">
              Zur Kursseite
            </router-link>
          </OpalButton>
        </div>
      </template>
    </OpalCard>
  </section>
</template>

<style scoped>

</style>