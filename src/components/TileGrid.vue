<template>
  <ul class="grid-container" :style="{
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, auto)`,
  }">
    <li v-for="tile in tiles" :key="tile.id" class="grid-item">
      <Tile :imageSrc="tile.imageSrc" :title="tile.title" :subtitle="tile.subtitle" />
    </li>
  </ul>
</template>

<script lang="ts">
import Tile from './Tile.vue';

export default {
  components: { Tile },
  props: {
    tiles: {
      type: Array,
      required: true,
      default: () => [],
    },
    columns: {
      type: Number,
      required: true,
      default: 4,
    },
    rows: {
      type: Number,
      required: true,
      default: 2,
    },
  },
};
</script>

<style scoped>
.grid-container {
  height: 100%;
  flex-grow: 1;
  display: grid;
  gap: 20px;
  /* Space between tiles */
  padding: 20px;
  list-style: none;
}

.grid-item {
  display: flex;
  padding: 20px;
}
</style>
