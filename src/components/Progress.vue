<template>
  <div id="progress" class="module" data-title="Progress">
    <ul>
      <li><span class="tier">Uldir</span><span class="total">{{ currentProgress }}/{{ totalProgress }} M</span></li>
      
      <li v-for="boss in progress.Uldir" :key="boss.name">
        <span class="boss">{{ boss.name }}</span>
        <span class="difficulty">{{ boss.difficulty }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: See if there is any APIs for checking wow progress and use axios.
//const axios = require('axios');

export default {
  name: 'Progress',
  props: { progress: Object },
  computed: {
    currentProgress() {
      return this.progress.Uldir.filter(boss => boss.difficulty === "M").length;
    },
    totalProgress() {
      return this.progress.Uldir.length;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#progress {
  ul {
    li {
      &:not(:first-child) {
        font-weight: 500 !important;
        opacity: 0.5;
      }

      span.difficulty {
        text-align: center;
        width: 15px;
      }
    }
  }
}
</style>
