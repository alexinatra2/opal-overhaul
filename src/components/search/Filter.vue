<script setup>
import {defineExpose, onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const inputRef = ref(null);
const value = ref("");

defineExpose({
  getValue: () => value.value,
});

defineEmits(["remove"]);

onMounted(() => {
  inputRef.value?.focus();
});
</script>

<template>
  <div class="flex gap-4 rounded-full bg-gray-100 py-2 px-4 caret-primary-600">
    <input
        ref="inputRef"
        v-model="value"
        type="text"
        class="outline-none flex-1"
    />
    <button @click="$emit('remove')" class="text-secondary-600 cursor-pointer">
      <font-awesome-icon :icon="faClose"/>
    </button>
  </div>
</template>
