<script setup lang="ts">
/*
  Importiere den Zustandsspeicher (Store) für die Kurse und den Typ `Course`.
  `useCoursesStore` ermöglicht den Zugriff auf den Zustand und Funktionen zur Verwaltung der Kursanmeldung.
*/
import useCoursesStore, {Course} from "@/store/courses.ts";

/*
  Importiere eine wiederverwendbare Button-Komponente (`OpalButton`) aus dem gemeinsamen Komponentenordner.
*/
import OpalButton from "@/components/shared/OpalButton.vue";

/*
  Importiere die `computed`-Funktion aus Vue, um berechnete Eigenschaften zu erstellen.
*/
import {computed} from "vue";

/*
  Definiere die Eigenschaften (Props), die an die Komponente übergeben werden.
  Hier wird ein einzelnes `Course`-Objekt erwartet.
*/
const props = defineProps<{ course: Course }>();

/*
  Extrahiere die Kurs-ID aus den Eigenschaften.
  Diese wird später für die Anmeldung/Abmeldung benötigt.
*/
const courseId = props.course.id;

/*
  Initialisiere den Zustandsspeicher für Kurse.
*/
const coursesStore = useCoursesStore();

/*
  Definiere eine Funktion zum Umschalten der Kursanmeldung.
  Die Funktion ruft `toggleEnrolment` aus dem Zustandsspeicher auf und übergibt die Kurs-ID.
*/
const toggleEnrolment = () => {
  coursesStore.toggleEnrolment(courseId);
}

/*
  Erstelle eine berechnete Eigenschaft, die überprüft, ob der Kurs bereits belegt ist.
  Sie gibt `true` zurück, wenn die Kurs-ID in der Liste der belegten Kurse enthalten ist.
*/
const isEnrolled = computed(() => coursesStore.enrolled.includes(courseId));
</script>

<template>
  <!-- Hauptcontainer für die Kursanzeige mit flexibler Layoutstruktur -->
  <div class="w-full h-full py-4 px-8 flex flex-col gap-4">

    <!-- Sektion für Kursinformationen -->
    <section>
      <!-- Kursname als Hauptüberschrift -->
      <h1 class="text-5xl font-bold">{{ course.name }}</h1>

      <!-- Anzeige der Kurs-ID -->
      <p class="text-base">{{ course.id }}</p>

      <!-- Anzeige des Kursautors -->
      <p class="text-base text-gray-500">{{ course.author }}</p>

      <!-- Anzeige des Kurszeitraums, falls vorhanden -->
      <div v-if="course.period" class="text-base text-gray-500 flex gap-2">
        <p>{{ course.period.label }}</p>

        <!-- Detaillierte Angaben zum Kurszeitraum, falls verfügbar -->
        <p v-if="course.period.detailed">
          vom {{ course.period.detailed.start.toLocaleDateString() }} bis
          {{ course.period.detailed.end.toLocaleDateString() }}
        </p>
      </div>
    </section>

    <!-- Sektion für Updates zum Kurs -->
    <section class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Updates</h2>
      <p>Hier finden Sie Updates zu diesem Kurs</p>
    </section>

    <!-- Sektion für die Kursbeschreibung, falls vorhanden -->
    <section v-if="course.desc" class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Beschreibung</h2>
      <p>{{ course.desc }}</p>
    </section>

    <!-- Sektion für die Anmelde-/Abmeldefunktion -->
    <section>
      <!-- Schaltfläche zum Ein- oder Austragen aus dem Kurs -->
      <OpalButton @click="toggleEnrolment" class="w-48" :color-variant="isEnrolled ? 'red' : 'default'">
        {{ isEnrolled ? "Austragen" : "Einschreiben" }}
      </OpalButton>
    </section>
  </div>
</template>