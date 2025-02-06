<script setup lang="ts">
/*
  Importiere den Typ `CourseNode` aus dem Kurs-Store.
  Dieser Typ definiert die Struktur der Knoten im Dateibaum.
*/
import {CourseNode} from "@/store/courses.ts";

/*
  Importiere die `FileTreeNode`-Komponente.
  Diese Komponente stellt die Darstellung und Logik für einzelne Knoten im Dateibaum bereit.
*/
import FileTreeNode from "@/components/course/FileTreeNode.vue";

/*
  Definiere die Eigenschaften (Props) der Komponente:
  - `nodes`: Eine Liste von Knoten des Dateibaums (vom Typ `CourseNode`).
  - `depth`: Die aktuelle Tiefe im Baum (optional).

  Mit `withDefaults` werden Standardwerte für diese Eigenschaften festgelegt:
  - `nodes` hat standardmäßig eine leere Liste.
  - `depth` wird standardmäßig auf `0` gesetzt.
*/
withDefaults(
    defineProps<{ nodes: CourseNode[]; depth?: number }>(),
    {
      nodes: () => [],
      depth: 0
    }
);
</script>

<template>
  <!-- Container für die Dateibaumstruktur -->
  <div class="w-full">
    <!-- Ungeordnete Liste zur Darstellung der Knoten -->
    <ul>
      <!-- Erstelle für jeden Knoten eine `FileTreeNode`-Komponente -->
      <FileTreeNode
          v-for="node in nodes"
          :key="node.title"
          :node="node"
          :depth="depth"
      />
    </ul>
  </div>
</template>
