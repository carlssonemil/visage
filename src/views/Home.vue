<template>
  <div id="home">
    <div id="welcome">
      <h1>&lt;Visage&gt;</h1>
      <span class="server">Tarren Mill EU – Horde</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper diam non volutpat sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>

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

#home {
  display: block;
  padding: 60px 0;
}

#welcome {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.95);

  h1 {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0 0;
    text-transform: uppercase;
  }

  span.server {
    opacity: 0.5;
  }

  p {
    font-size: 18px;
    margin: 30px 0 60px;
    text-align: left;
  }
}

.columns {
  display: flex;
  margin: 15px 0;

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
  background: rgba(darken($background-color, 5%), 0.8);
  border: 1px solid darken($background-color, 10%);
  border-radius: 3px;
  cursor: default;
  padding: 15px 10px 10px;
  position: relative;

  &::before {
    border-radius: 3px;
    color: $primary-color;
    content: attr(data-title);
    font-family: inherit;
    font-weight: 500;
    padding: 0 5px;
    position: absolute;
    left: 10px;
    top: -12px;
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
