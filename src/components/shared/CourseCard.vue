<script setup lang="ts">
import {useSlots} from "vue";
import OpalCard from "@/components/shared/OpalCard.vue";

const slots = useSlots();
const props = defineProps<{ name: string; id: string; author: string; desc?: string }>();
</script>

<template>
  <OpalCard>
    <template #header>
      <div class="w-full text-left">
        <h3>{{ props.name }}</h3>
        <p class="text-base font-medium">{{ props.id }}</p>
        <p class="text-base font-medium text-gray-500">{{ props.author }}</p>
      </div>
    </template>
    <p class="w-[300px] h-32 text-sm overflow-clip">
      {{ props.desc }}
    </p>
    <template v-if="slots.actions" #actions>
      <div class="flex justify-end">
        <slot name="actions"></slot>
      </div>
    </template>
  </OpalCard>
</template>