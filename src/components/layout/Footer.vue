<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <a href="#" class="footer-link">Impressum</a>
      <a href="#" class="footer-link">Datenschutz</a>
      <a href="#" class="footer-link">Nutzungsbedingungen</a>
    </div>
  </footer>
</template>



<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px; /* Höhe des Footers */
  background-color: var(--background-grey);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); /* Schatten oben */
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 2em; /* Abstand zwischen den Links */
}

.footer-link {
  text-decoration: none; /* Entfernt die Standard-Unterstreichung */
  color: var(--text-light); /* Setzt die Linkfarbe */
  font-size: 0.9rem; /* Optionale Schriftgröße */
  transition: text-decoration 0.3s ease, color 0.3s ease; /* Sanfter Übergang */
}

.footer-link:hover {
  text-decoration: underline; /* Unterstreicht den Text bei Hover */
  color: var(--main-theme-color-40); /* Ändert die Farbe beim Hover */
}
</style>

