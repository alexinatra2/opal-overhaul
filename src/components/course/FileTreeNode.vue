<script setup lang="ts">
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import FileTree from "@/components/course/FileTree.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {CourseNode} from "@/store/courses.ts";
import {ref} from "vue";

defineProps<{ node: CourseNode, depth: number }>();
const open = ref(false);
const toggleOpen = () => {
  open.value = !open.value;
}
</script>

<template>
  <li>
    <div
        class="w-full flex justify-between items-center
        py-2 pr-4 cursor-pointer
        hover:bg-(--primary-60) hover:text-white transition"
        :style="{ paddingLeft: `calc(var(--spacing) * (4 * ${depth} + 4))` }"
        @click="toggleOpen"
    >
      <p class="select-none">
        {{ node.title }}
      </p>
      <font-awesome-icon v-if="node.children" :icon="open ? faCaretUp : faCaretDown"/>
    </div>
    <FileTree
        v-if="node.children && open"
        :nodes="node.children"
        :depth="(depth || 0) + 1"
    />
  </li>
</template>

<style scoped>

</style>