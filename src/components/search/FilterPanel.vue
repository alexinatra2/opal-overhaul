<script setup lang="ts">
import {faFilter, faPlus} from "@fortawesome/free-solid-svg-icons";
import StartIconButton from "@/components/shared/StartIconButton.vue";
import {computed, reactive, ref} from "vue";
import Filter from "@/components/search/Filter.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const MAX_AMOUNT_FILTERS = 2;

const filters = reactive([]);
const addButtonDisabled = computed(() => filters.length >= MAX_AMOUNT_FILTERS);

const addFilter = () => {
  const newRef = ref(null);
  filters.push(newRef);
};

const removeFilter = (i: number) => {
  filters.splice(i, 1);
}
</script>

<template>
  <div class="flex justify-end items-center gap-4">
    <Filter v-for="(filterRef, index) in filters" :ref="filterRef" @remove="removeFilter(index)"/>
    <button @click="addFilter"
            class="rounded-full w-10 text-white bg-primary-600 hover:bg-primary-400
            transition aspect-square cursor-pointer
            disabled:bg-gray-200 disabled:p-4 disabled:cursor-not-allowed"
            :disabled="addButtonDisabled"
    >
      <font-awesome-icon :icon="faPlus"/>
    </button>
    <StartIconButton :icon="faFilter">
      Filtern
    </StartIconButton>
  </div>
</template>