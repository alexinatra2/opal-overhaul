<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <div class="w-full h-full flex flex-col items-stretch">
    <section class="w-full flex items-center bg-white p-4 gap-4 shadow-md">
      <h1 v-if="slots.headline" class="text-3xl font-bold flex-1">
        <slot name="headline"></slot>
      </h1>
      <div v-if="slots.headerContent">
        <slot name="headerContent"></slot>
      </div>
    </section>
    <div class="flex-1 overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>