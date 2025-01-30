<script setup lang="ts">
import OpalButton from "@/components/shared/OpalButton.vue";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = withDefaults(defineProps<{
  colorVariant?: "default" | "green" | "red",
  icon: IconDefinition
}>(), {
  colorVariant: "default",
});
</script>

<template>
  <OpalButton v-bind:props>
    <template #start-adornment>
      <font-awesome-icon :icon="props.icon"/>
    </template>
    <slot></slot>
  </OpalButton>
</template>