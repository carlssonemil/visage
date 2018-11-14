<template>
  <div class="home">
    <div class="columns">
      <div>
        <Schedule />
        <Progress />
      </div>
      <Recruitment />
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue'
import Schedule from '@/components/Schedule.vue'
import Recruitment from '@/components/Recruitment.vue'

export default {
  name: 'home',
  components: {
    Progress,
    Schedule,
    Recruitment
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.columns {
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    .module:first-child {
      margin-bottom: 15px;
    }

    .module {
      flex: 0 auto;
    }
  }
}

.module {
  border: 1px solid lighten($background-color, 5%);
  border-radius: 3px;
  padding: 15px 10px 10px;
  position: relative;

  &::before {
    background: $background-color;
    color: lighten($background-color, 20%);
    content: attr(data-title);
    font-family: inherit;
    font-weight: 500;
    padding: 0 5px;
    position: absolute;
    left: 10px;
    top: -10px;
  }

  ul {
    width: 100%;

    li {
      align-items: center;
      border-radius: 3px;
      display: flex;
      font-weight: 700;
      justify-content: space-between;
      padding: 4px 8px;
      transition: 0.25s ease;

      &:hover {
        background-color: lighten($background-color, 5%);
      }

      div.specs {
        align-items: center;
        display: flex;
      }
    }
  }
}
</style>
