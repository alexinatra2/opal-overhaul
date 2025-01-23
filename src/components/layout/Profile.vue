<template>
  <div class="profile" @click="goToProfile">
    <img src="/profile.png" class="profile-icon" />
  </div>
</template>

<script setup lang="ts">
const goToProfile = () => {
  console.log("Zum Profil navigieren");
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
}

.profile:hover {
  transform: scale(1.1); /* Vergrößert das gesamte Profilbild leicht */
  filter: brightness(1.2); /* Erhellt das Bild */
}

.profile-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
