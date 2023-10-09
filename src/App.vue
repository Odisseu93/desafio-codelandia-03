<script setup lang="ts"> 
import CardList from './components/CardList.vue';
import Hero from './components/Hero.vue';
import { ToastifyContainer } from 'vue3-toastify'

</script>

<template>
  <ToastifyContainer/>
  <Hero/>
  <CardList/>
</template>