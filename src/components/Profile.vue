<template>
  <div class="profile" @click="goToProfile">
    <!-- Profilbild -->
    <img
        src="/profile.png"
        class="profile-icon"
    />
  </div>
</template>

<script setup lang="ts">
// Noch nicht implementiert: Navigation zum Profil
const goToProfile = () => {
  console.log("Zum Profil navigieren");
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Breite des Profilsymbols */
  height: 40px; /* Höhe des Profilsymbols */
  border-radius: 50%; /* Rundes Symbol */
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
  overflow: hidden; /* Verhindert Überlauf außerhalb des Kreises */
  border: 2px solid #fff; /* Weißer Rand um das Profil */
}

.profile:hover {
  border-color: #00b1d9; /* Hintergrundfarbe bei Hover */
}

.profile-icon {
  width: 100%; /* Bild passt in den Kreis */
  height: 100%;
  object-fit: cover; /* Zuschneiden für sauberes Einpassen */
}
</style>
