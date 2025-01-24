<script setup lang="ts">
import Card from "@/components/shared/OpalCard.vue";
import Button from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="centered">
    <Card>
      <template #header>
        <img src="/logo.png" alt="Logo" class="logo scale-animate" height="80px"/>
      </template>

      <p class="introduction">
        Das ist Text, der erklärt, was OPAL ist und wie man seinen ersten Kurs
        hinzufügt. Das ist Text, der erklärt, was OPAL ist und wie man seinen
        ersten Kurs hinzufügt.
      </p>

      <template #actions>
        <router-link to="/search">
          <Button>
            <template #start-adornment>
              <font-awesome-icon :icon="faPlus"/>
            </template>
            Ersten Kurs hinzufügen
          </Button>
        </router-link>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.introduction {
  max-width: 300px;
  text-align: left;
  text-wrap: pretty;
}
</style>
