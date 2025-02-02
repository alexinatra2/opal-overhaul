<script setup lang="ts">
import Card from "@/components/shared/OpalCard.vue";
import Button from "@/components/shared/OpalButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <Card>
      <img src="/logo.png" alt="Logo" class="h-24 logo scale-animate self-center"/>
      <p class="introduction">
        Das ist Text, der erklärt, was OPAL ist und wie man seinen ersten Kurs
        hinzufügt. Das ist Text, der erklärt, was OPAL ist und wie man seinen
        ersten Kurs hinzufügt.
      </p>

      <router-link to="/search" class="self-center">
        <Button>
          <template #start-adornment>
            <font-awesome-icon :icon="faPlus"/>
          </template>
          Ersten Kurs hinzufügen
        </Button>
      </router-link>
    </Card>
  </div>
</template>


