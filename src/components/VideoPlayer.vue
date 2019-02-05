<template>
  <div class="video-player">
    <div class="backdrop animated fadeIn" @click="$emit('close')"></div>
    <vue-plyr class="video animated zoomIn faster" :options="options">
      <video :src="src">
        <source :src="src" type="video/mp4" size="1080">
      </video>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: { src: String },
  data() {
    return {
      options: {
        autoplay: true,
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        resetOnEnd: true
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.video-player {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  .backdrop {
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  .video {
    box-shadow: 0px 25px 50px -25px rgba(0, 0, 0, 0.9);
    max-width: 900px;
    width: 90%;
  }
}

// Plyr Customization

.plyr {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
}

.plyr__control--overlaid {
  background: rgba($primary-color, 0.8) !important;
}

.plyr--video .plyr__control.plyr__tab-focus, .plyr--video .plyr__control:hover, .plyr--video .plyr__control[aria-expanded=true] {
    background: $primary-color !important;
}

.plyr__control.plyr__tab-focus {
  box-shadow: 0 0 0 5px rgba($primary-color, 0.5) !important;
}

.plyr--full-ui input[type=range] {
  color: $primary-color !important;
}

</style>