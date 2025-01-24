<script setup lang="ts">
import OpalButton from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSortAlphaAsc} from "@fortawesome/free-solid-svg-icons";
import OpalVerticalPage from "@/components/shared/OpalVerticalPage.vue";
import CourseCard from "@/components/shared/CourseCard.vue";
import useCoursesStore from "@/store/courses.ts";

const courseData = useCoursesStore();
</script>

<template>
  <OpalVerticalPage>
    <template #headline>
      Deine Kurse
    </template>
    <template #headerContent>
      <OpalButton>
        <template #start-adornment>
          <font-awesome-icon :icon="faSortAlphaAsc"/>
        </template>
        Sortieren
      </OpalButton>
    </template>
    <section class="flex flex-wrap gap-4 p-4">
      <CourseCard
          v-for="course in courseData.courses"
          :name="course.name"
          :key="course.id"
          :id="course.id"
          :desc="course.desc"
          :author="course.author"
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
