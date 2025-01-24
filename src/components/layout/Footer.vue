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
  width: 100%;
  background-color: var(--gray-70);
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 2rem;
}

.footer-link {
  text-decoration: none;
  color: var(--text-dark);
  transition: text-decoration 0.3s ease, color 0.3s ease;
}

.footer-link:hover {
  text-decoration: underline;
  color: var(--primary-40);
}
</style>

