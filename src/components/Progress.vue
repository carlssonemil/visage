<template>
  <div id="progress" class="module" data-title="Progress">
    <ul>
      <li><span class="tier">Uldir</span><span class="total">6/8 M</span></li>
      <li><span class="boss">Taloc</span><span class="difficulty">M</span></li>
      <li><span class="boss">MOTHER</span><span class="difficulty">M</span></li>
      <li><span class="boss">Fetid Devourer</span><span class="difficulty">M</span></li>
      <li><span class="boss">Zek'voz, Herald of N'zoth</span><span class="difficulty">M</span></li>
      <li><span class="boss">Vectis</span><span class="difficulty">M</span></li>
      <li><span class="boss">Zul, Reborn</span><span class="difficulty">M</span></li>
      <li><span class="boss">Mythrax the Unraveler</span><span class="difficulty">H</span></li>
      <li><span class="boss">G'huun</span><span class="difficulty">H</span></li>
    </ul>
  </div>
</template>

<script>
// TODO: See if there is any APIs for checking wow progress and use axios.
//const axios = require('axios');

export default {
  name: 'Progress'
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
    }
  }
}
</style>
