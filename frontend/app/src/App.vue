<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CvPage />
</template>

<script>
import CvPage from '@/pages/CvPage.vue'

export default {
  name: 'App',
  components: {
    CvPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
