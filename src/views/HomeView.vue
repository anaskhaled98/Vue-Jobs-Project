<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import Jobs from "@/components/Jobs.vue";
</script>

<template>
  <Hero />
  <HomeCards />
  <Jobs :limit="3" :showButton="true" />
</template>
