<template>
  <article class="tile">
    <header class="tile-header">
      <button class="actions-button" aria-label="Actions menu">⋮</button>
    </header>
    <section class="tile-body">
      <img :src="imageSrc" alt="Tile image" class="tile-image" />
      <div class="tile-text">
        <h3 class="tile-title">{{ title }}</h3>
        <p class="tile-subtitle">{{ subtitle }}</p>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    imageSrc: { type: String, required: false },
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
  },
};
</script>

<style scoped>
.tile {
  justify-content: flex-start;
  background-color: var(--main-theme-gray-70);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.tile-header {
  position: absolute;
  top: 0;
  right: 8px;
}

.actions-button {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.tile-body {
  display: flex;
  align-items: center;
  padding-top: 8px;
}

.tile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding-right: 8px;
}

.tile-text {
  text-align: left;
}

.tile-title {
  font-size: 1.2em;
}

.tile-subtitle {
  color: #666;
}
</style>
