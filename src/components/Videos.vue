<template>
  <div id="videos" class="module" data-title="Videos">
    <div class="video" v-for="video in videos" :key="video.name">
      <img v-if="video.src" :src="video.img" :alt="video.name" @click="showVideoPlayer = true, videoSrc = video.src">
      <p>{{ video.name }}</p>
    </div>

    <VideoPlayer v-if="showVideoPlayer" @close="showVideoPlayer = false" :src="videoSrc" />
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'videos',
  props: { videos: Object },
  components: {
    VideoPlayer
  },
  data() {
    return {
      showVideoPlayer: false,
      videoSrc: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#videos {
  margin-top: 50px;
  text-align: left;

  .video {
    cursor: pointer;
    display: inline-block;
    width: 200px;

    &:hover {
      p {
        opacity: 0.75;
      }
    }

    img {
      border: 1px solid darken($background-color, 10%);
      border-radius: 3px;
      width: 100%;
    }

    p {
      font-size: 15px;
      font-weight: 500;
      margin-left: 2px;
      opacity: 0.5;
      transition: 0.25s ease;
    }
  }
}
</style>
