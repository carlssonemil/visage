<template>
  <div v-if="this.application" id="applications">
    <ul>
      <li v-for="application in sortedApplications" :key="application['.key']" :class="{ active: (application['.key'] === selected), hasStatus: (application.accepted || application.denied) }" v-on:click="openApplication(application['.key'])">
        <div>
          <i v-if="application.accepted" data-eva="checkmark-circle-2" data-eva-fill="#37b24d"></i>
          <i v-if="application.denied" data-eva="close-square" data-eva-fill="#f03e3e"></i>
          <div>
            <p class="name">{{ application.name }}</p>
            <span class="battletag">{{ application.bnet }}</span>
          </div>
        </div>
        <span class="timestamp">{{ timeSincePost(application.timestamp) }}</span>
      </li>
    </ul>
    <div class="application-view">
      <Application v-if="this.application" :application="this.application" v-on:changeStatus="changeStatus" />
    </div>
  </div>
</template>

<script>
import Application from '@/components/Application.vue'
import * as eva from 'eva-icons'

import { db } from '../firebaseApp'

export default {
  name: 'applications',
  components: {
    Application
  },
  firebase: {
    applications: db.ref("applications")
  },
  data() {
    return {
      key: null,
      selected: undefined
    }
  },
  computed: {
    application() {
      return !this.key ? this.applications[0] : this.applications.find(a => a['.key'] === this.key);
    },
    sortedApplications() {
      return this.applications.slice().sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    }
  },
  methods: {
    openApplication(key) {
      this.key = this.selected = key;
    },
    changeStatus(args) {
      if (args.accepted) {
        db.ref("applications").child(args.key).update({
          accepted: true,
          denied: null
        });
        
        this.$scrollTop("main");
      } else if (args.denied) {
        db.ref("applications").child(args.key).update({
          accepted: null,
          denied: true
        });
        
        this.$scrollTop("main");
      }
    },
    timeSincePost(timestamp) {
      let day = 1000 * 60 * 60 * 24;
      let postDate = new Date(timestamp).getTime();
      let today = new Date().getTime();

      let dayDifference = Math.round((today - postDate) / day);

      return dayDifference === 0 ? 'Idag' : dayDifference === 1 ? 'Igår' : `${ dayDifference.toString() } dagar sedan`;
    }
  },
  updated() {
    if (!this.selected) this.selected = this.application['.key'];
    eva.replace();
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#applications {
  background: $background-color;
  border: 1px solid darken($background-color, 2.5%);
  border-radius: 3px;
  display: flex;
  margin-top: 20px;
  overflow: hidden;

  ul {
    background: lighten($background-color, 2.5%);
    border-right: 1px solid darken($background-color, 2.5%);

    li {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      line-height: 1;
      padding: 15px;
      text-align: left;
      transition: 0.25s ease;

      &:hover {
        background: lighten($background-color, 5%);
      }

      &.active {
        background: lighten($background-color, 10%);
      }

      > div {
        align-items: center;
        display: flex;
      }

      .name {
        font-weight: 500;
        margin-right: 50px;
        white-space: nowrap;
      }

      .battletag {
        color: $primary-color;
        font-size: 12px;
      }

      svg {
        margin-right: 10px;
      }

      .timestamp {
        display: block;
        font-size: 10px;
        margin-top: 4px;
        opacity: 0.25;
      }
    }
  }
}
</style>
