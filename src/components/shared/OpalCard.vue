<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <div class="flex flex-col items-stretch gap-8 rounded-xl p-8 shadow-md bg-white">
    <div v-if="slots.header" class="text-lg font-bold">
      <slot name="header"></slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div v-if="slots.actions" class="card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>



