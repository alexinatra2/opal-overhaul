<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <div class="flex flex-col items-stretch gap-4 rounded-2xl p-4 bg-white shadow-xl">
    <div v-if="slots.header" class="text-2xl font-bold">
      <slot name="header"></slot>
    </div>

    <slot></slot>
    
    <slot name="actions" v-if="slots.actions"></slot>
  </div>
</template>
