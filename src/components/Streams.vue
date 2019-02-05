<template>
  <div v-if="channels" id="streams" class="module" data-title="Streams">
    <VueTwitchPlayer v-for="channel in channels" :key="channel" :channel="channel" :width="''" :height="''" />
  </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player';

export default {
  name: 'streams',
  components: {
    VueTwitchPlayer
  },
  data() {
    return {
      channels: [
        "sow0w",
        "madvexd",
        "dabush"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#streams {
  display: flex;
  margin-top: 30px;

  > div {
    position: relative;
    overflow: hidden;

    > iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
}
</style>
