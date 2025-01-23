<script setup lang="ts">
import Card from "@/components/shared/Card.vue"; // Adjust the path if necessary
</script>

<template>
  <div class="centered">
    <Card>
      <template #header>
        <h2>🔥 MUI-Style Card</h2>
      </template>

      <p>This is a centered card component.</p>

      <template #actions>
        <button>OK</button>
        <button>Cancel</button>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Optional: makes it take full screen height */
}
</style>
