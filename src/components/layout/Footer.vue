<template>
  <footer class="footer">
    <div class="footer-content">
      <a href="#" class="footer-link">Datenschutz</a>
      <a href="#" class="footer-link">Nutzungsbedingungen</a>
      <a href="#" class="footer-link">Impressum</a>
      <a href="#" class="footer-link">Barrierefreiheit</a>
      <a href="#" class="footer-link">Betriebsstatus</a>
      <a href="#" class="footer-link">Über Opal (version ...)</a>
      <a href="#" class="footer-link">Powered by OPA</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: var(--color-gray-700);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
}

.footer-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
}

.footer-link {
  text-decoration: none;
  color: var(--text-dark);
  transition: text-decoration 0.3s ease, color 0.3s ease;
}

.footer-link:hover {
  text-decoration: underline;
  color: var(--color-primary-400);
}
</style>