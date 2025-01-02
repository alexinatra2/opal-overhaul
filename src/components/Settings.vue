<script setup lang="ts">
const goToSettings = () => {
  console.log("Zu den Einstellungen navigieren");
};
</script>


<template>
  <div class="gear" @click="goToSettings">
    <img src="/zahnrad.png" class="gear-icon" />
  </div>
</template>


<style scoped>
.gear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.gear:hover {
  transform: scale(1.1); /* Vergrößert das Zahnrad leicht */
  filter: brightness(1.2); /* Erhellt das Bild */
}

.gear-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>