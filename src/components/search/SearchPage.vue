<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import useCoursesStore, {Course} from "@/store/courses.ts";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFilter, faSpinner} from "@fortawesome/free-solid-svg-icons";
import OpalButton from "@/components/shared/OpalButton.vue";
import {useRoute} from "vue-router";
import OpalVerticalPage from "@/components/shared/OpalVerticalPage.vue";
import CourseCard from "@/components/shared/CourseCard.vue";

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
  <OpalVerticalPage>
    <template #headline>
      Kurssuche
    </template>

    <template #headerContent>
      <OpalButton>
        <template #start-adornment>
          <font-awesome-icon :icon="faFilter"/>
        </template>
        Filtern
      </OpalButton>
    </template>

    <template #default>
      <div v-if="loading" class="w-full h-full flex justify-center items-center">
        <font-awesome-icon :icon="faSpinner" class="text-primary-600 animate-spin" size="2xl"/>
      </div>
      <section v-if="serverData.courses.length > 0" class="flex flex-wrap gap-4 p-4">
        <CourseCard
            v-for="course in serverData.courses"
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
    </template>
  </OpalVerticalPage>
</template>
