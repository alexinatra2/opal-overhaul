<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <div class="w-full h-full flex items-stretch">
    <section class="min-w-[500px] flex flex-col items-stretch text-left bg-white gap-4 shadow-md">
      <h1 v-if="slots.headline" class="text-xl font-bold p-4">
        <slot name="headline"></slot>
      </h1>
      <div v-if="slots.sideContent">
        <slot name="sideContent"></slot>
      </div>
    </section>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>