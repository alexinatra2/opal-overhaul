<script setup lang="ts">
import {CourseNode} from "@/store/courses.ts";
import FileTreeNode from "@/components/course/FileTreeNode.vue";

withDefaults(
    defineProps<{ nodes: CourseNode[]; depth?: number }>(),
    {
      nodes: () => [],
      depth: 0
    }
);
</script>

<template>
  <div class="w-full">
    <ul>
      <FileTreeNode v-for="node in nodes" :key="node.title" :node="node" :depth="depth"/>
    </ul>
  </div>
</template>
