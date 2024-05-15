<script>
import langIsoCodes from 'iso-639-1'
import {getSkillsWithExperienceLengthSorted, getStarredActions} from '@/util'
import cv from '@/data/adam-cv.json'

export default {
  name: "CvBusinessCard",
  methods: {
    getYear(isoDateString) {
      return (new Date(isoDateString)).getFullYear()
    }
  },
  computed: {
    cv() { return cv },
    langIsoCodes() { return langIsoCodes },
    skills() { return getSkillsWithExperienceLengthSorted(cv)/*.slice(0, 20)*/ },
    starredActions() { return getStarredActions(cv) },
    jobHistory() { return cv.jobHistory.filter(job => !job.minor) },
  }
}
</script>

<template>
  <div class="business-card">
    <div class="contact">
      <dl>
        <dt>{{ $t('cv.contact.email') }}</dt><dd>{{ cv.contact.email }}</dd>
        <dt>{{ $t('cv.contact.phone') }}</dt><dd>{{ cv.contact.phone }}</dd>
      </dl>
    </div>
    <div class="education">
      <ul class="boring-list">
        <li v-for="x in cv.education" :key="x.label"><b>{{ x.label }}</b>, {{ x.schoolName }}</li>
      </ul>
    </div>
    <div class="languages">
      <ul class="boring-list-tight">
        <li v-for="[langCode, level] in Object.entries(cv.languages)" :key="langCode"><b>{{ langIsoCodes.getName(langCode) }}</b>: {{ level }}</li>
      </ul>
    </div>
    <!-- TODO: Sort jobs by year -->
    <div class="job-history">
      <ul class="boring-list">
        <li v-for="x in jobHistory" :key="x.positionName">{{ `${getYear(x.from)} – ${getYear(x.to)}` }} <br /> {{ x.positionName }} {{ x.primaryCompany ? `at ${x.primaryCompany}` : null }}</li>
      </ul>
    </div>
    <div class="skills">
      <h6>{{ $t('cv.skills.heading') }}</h6>
      <ul class="boring-list-tight">
        <li v-for="[skill, expLength] in skills" :key="skill">{{ `${skill} (${expLength > 0 ? expLength : '<1'})` }}</li>
      </ul>
    </div>
    <div class="starred-actions">
      <b>{{ $t('cv.starredActions.heading') }}</b>
      <ul class="boring-list">
        <li v-for="starredAction in starredActions" :key="starredAction">{{ starredAction }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .business-card {
    display: grid;
    grid-template-columns: [left-border] 6fr [divider-hor-1] 8fr [divider-hor-2] 4fr [right-border];
    grid-template-rows: [top-border] 4fr [divider-ver-1] 4fr [divider-ver-2] 4fr [bottom-border];
    grid-gap: 6px;
    margin-block-start: 24px;

    & > h6 {
      font-weight: bold;
    }

    & > * {
      border: 1px solid;
      padding: 12px;
    }

    .contact {
      grid-column-start: 1;
      grid-column-end: divider-hor-1;
      grid-row-start: 1;
      grid-row-end: divider-ver-1;
    }

    .education {
      grid-column-start: 1;
      grid-column-end: divider-hor-1;
      grid-row-start: 2;
      grid-row-end: divider-ver-2;
    }

    .languages {
      grid-column-start: 1;
      grid-column-end: divider-hor-1;
      grid-row-start: 3;
      grid-row-end: bottom-border;
      columns: 2;
    }

    .job-history {
      grid-column-start: 2;
      grid-column-end: divider-hor-2;
      grid-row-start: 1;
      grid-row-end: bottom-border;
    }

    .skills {
      grid-column-start: 3;
      grid-column-end: right-border;
      grid-row-start: 1;
      grid-row-end: bottom-border;
      font-size: small;

      ul {
        columns: 2;
      }
    }

    .starred-actions {
      grid-column-start: 1;
      grid-column-end: right-border;
      grid-row-start: 4;
      grid-row-end: bottom-border;
    }

    @media only screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > * {
        border: none;
      }
    }
  }
</style>