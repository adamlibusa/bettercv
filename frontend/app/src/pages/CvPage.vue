<template>
  <div class="container">
    <section class="photo-area">
      <div class="photo">
        <img
            src="@/assets/user-photos/IMG_3260_cropped.jpg"
            :alt="$t('cv.photo.alt', {name: fullName})"
            width="250"
        />
      </div>
      <h2 class="name">{{ fullName }}</h2>
      <div class="summary">{{ cv.summary }}</div>
    </section>
    <section>
      <!-- First let's do the card version -->
    </section>
  </div>
</template>

<script>
import cv from '@/data/adam-cv.json'
import {getFullName} from '@/util'

export default {
  name: 'CvPate',
  props: {
    msg: String,
  },
  computed: {
    cv: () => cv,
    fullName: () => getFullName(cv),
  },
}
</script>

<style scoped lang="scss">
  .photo-area {
    display: grid;
    grid-template-columns: [left-border] 1fr [inner-horizontal-divider] 3fr [right-border];
    grid-template-rows: [top-border] 1fr [inner-vertical-divider] 1fr [bottom-border];
    grid-gap: 12px;

    .photo {
      grid-column-start: 1;
      grid-column-end: inner-horizontal-divider;
      grid-row-start: 1;
      grid-row-end: bottom-border;
    }

    .name {
      grid-column-start: 2;
      grid-column-end: right-border;
      grid-row-start: 1;
      grid-row-end: inner-vertical-divider;
      margin-block-start: 36px;
      font-size: 36px;
    }

    .summary {
      grid-column-start: 2;
      grid-column-end: right-border;
      grid-row-start: 2;
      grid-row-end: bottom-border;
    }
  }

  @media only screen and (max-width: 800px) {
    .photo-area {
      display: flex;
      flex-direction: column;
      align-items: center;

      .photo {
      }

      .name {
        margin-block-start: 36px;
        font-size: 36px;
      }

      .summary {
        margin-inline: 36px;
      }
    }
  }

</style>
