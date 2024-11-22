<template>
  <div class="profile" @click="goToProfile">
    <img src="/profile.png" alt="Profil" class="profile-icon" />
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
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--main-theme-gray-20);
  transition: border-color 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  border: 2px solid var(--neutral-white);
}

.profile:hover {
  border-color: var(--main-theme-color-40);
  background-color: var(--main-theme-gray-10);
}

.profile-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
