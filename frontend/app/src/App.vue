<template>
  <header>
    <a href="/"><img alt="{{ logo.alt }}" src="./assets/better-cv-logo-blue-rectangle.png"></a>
    {{ $t('title') }}
  </header>

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
</style>
