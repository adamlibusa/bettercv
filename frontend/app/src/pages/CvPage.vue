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
    <div class="slider-box">
      <vue-slider
          ref="slider"
          v-model="sliderValue"
          v-bind="sliderOptions"
          :data="cvViewOptions"
      />
    </div>
    <section>

      <!-- First let's do the card version -->
    </section>
  </div>
</template>

<script>
import VueSlider from 'vue-3-slider-component'
import cv from '@/data/adam-cv.json'
import {getFullName} from '@/util'

export default {
  name: 'CvPate',
  components: {
    VueSlider,
  },
  data () {
    return {
      sliderValue: 'brief',
      sliderOptions: {
        dotSize: 26,
        height: 16,
        adsorb: true,
        tooltipPlacement: 'top',
        useKeyboard: true,
      }
    }
  },
  computed: {
    cv() { return cv },
    fullName() { return getFullName(cv) },
    cvViewOptions() {
      return [
        { value: 'business-card', label: this.$t('cvView.options.businessCard') },
        { value: 'brief', label: this.$t('cvView.options.brief') },
        { value: 'full', label: this.$t('cvView.options.full') },
      ]
    }
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

  .slider-box {
    margin-inline-start: 75%;

    .vue-slider {
      cursor: pointer;
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
