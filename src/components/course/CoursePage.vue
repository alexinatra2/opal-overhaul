<script setup lang="ts">
/*
  Importiere die `OpalHorizontalPage`-Komponente.
  Diese Komponente stellt ein horizontales Layout für die Seitenelemente bereit.
*/
import OpalHorizontalPage from "@/components/shared/OpalHorizontalPage.vue";

/*
  Importiere den Zustandsspeicher (Store) für die Kurse.
  Dieser Store enthält die Daten und Logik für die Kursverwaltung.
*/
import useCoursesStore from "@/store/courses.ts";

/*
  Importiere die `useRoute`-Funktion aus dem Vue-Router.
  Diese Funktion ermöglicht den Zugriff auf die aktuelle Route und deren Parameter.
*/
import {useRoute} from "vue-router";

/*
  Importiere die `FileTree`- und `CourseContent`-Komponenten.
  - `FileTree` zeigt die Struktur des Kurses in Form eines Datei-/Ordnerbaums an.
  - `CourseContent` zeigt die Inhalte des ausgewählten Kurses.
*/
import FileTree from "@/components/course/FileTree.vue";
import CourseContent from "@/components/course/CourseContent.vue";

/*
  Importiere die `computed`-Funktion aus Vue, um berechnete Eigenschaften zu erstellen.
*/
import {computed} from "vue";

/*
  Initialisiere die aktuelle Route, um auf Parameter wie die Kurs-ID zuzugreifen.
*/
const route = useRoute();

/*
  Initialisiere den Zustandsspeicher für Kurse.
*/
const courseStore = useCoursesStore();

/*
  Definiere eine berechnete Eigenschaft, die den aktuellen Kurs anhand der Route-ID sucht.
  Die `courses`-Liste wird durchsucht, um den passenden Kurs zu finden.
*/
const course = computed(() => courseStore.courses.find((c) => c.id === route.params.id));
</script>

<template>
  <!-- Layout-Komponente für die horizontale Anordnung von Inhalt und Seitenleiste -->
  <OpalHorizontalPage>

    <!-- Platzhalter für die Überschrift der Seite -->
    <template #headline>
      Kurselemente
    </template>

    <!-- Seiteninhalt (Dateibaum) wird nur angezeigt, wenn der Kurs und seine Knoten vorhanden sind -->
    <template #sideContent v-if="course && course.nodes">
      <FileTree :nodes="course.nodes" />
    </template>

    <!-- Hauptinhalt der Seite -->
    <template #default>
      <!-- Anzeige der Kursinhalte, falls der Kurs vorhanden ist -->
      <CourseContent v-if="course" :course="course" />

      <!-- Nachricht, falls der Kurs nicht gefunden wurde -->
      <p v-else>Kurs nicht gefunden</p>
    </template>
  </OpalHorizontalPage>
</template>
