<script>
import CvPage from '@/pages/CvPage.vue'

export default {
  name: 'App',
  components: {
    CvPage,
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="header-box">
        <a href="/"><img :alt="$t('logo.alt')" src="@/assets/better-cv-logo-blue-rectangle.png"></a>
        <a href="/"><h1>{{ $t('title') }}</h1></a>
      </div>
    </div>
  </header>

  <CvPage />
</template>

<style lang="scss">
  header {
    .header-box {
      display: flex;
      align-items: center;
      border-block: 1px solid;
      margin-block: 12px;

      * {
        margin: 5px 0;
      }
    }

    h1 {
      font-size: 23px;
      padding-inline-start: 30px;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>
