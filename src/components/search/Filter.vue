<script setup lang="ts">
import {defineExpose, onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const inputRef = ref(null);
const selectedField = ref("name");
const selectedOperator = ref("contains");
const term = ref("");

defineExpose({
  getValue: () => {
    return {
      field: selectedField,
      operator: selectedOperator,
      term: term.value
    };
  }
});

defineEmits(["remove"]);

onMounted(() => {
  inputRef.value?.focus();
});
</script>

<template>
  <div
      class="flex flex-wrap items-center rounded-full bg-gray-100 overflow-hidden">
    <select v-model="selectedField"
            class="bg-primary-600 pl-4 pr-2 py-2 appearance-none cursor-pointer text-white font-semibold">
      <option value="name">Name</option>
      <option value="id">ID</option>
      <option value="author">Autor</option>
      <option value="desc">Beschreibung</option>
    </select>
    <select v-model="selectedOperator"
            class="bg-primary-400 p-2 appearance-none cursor-pointer text-white font-semibold">
      <option value="contains">=</option>
      <option value="not contains">&isin;</option>
      <option value="equals">&notin;</option>
    </select>
    <input
        ref="inputRef"
        v-model="term"
        type="text"
        class="flex-1 p-2 outline-none border-none w-max-12"
    />
    <button @click="$emit('remove')" class="text-secondary-600 cursor-pointer pr-4">
      <font-awesome-icon :icon="faClose"/>
    </button>
  </div>
</template>
