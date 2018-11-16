<template>
  <div v-if="this.application" id="applications">
    <ul>
      <li v-for="application in applications" :key="application['.key']" :class="{ active: (application['.key'] === selected) }" v-on:click="openApplication(application['.key'])">
        <div>
          <p class="name">{{ application.name }}</p>
          <span class="battletag">{{ application.bnet }}</span>
        </div>
        <i v-if="application.accepted" data-eva="checkmark-circle-2" data-eva-fill="#37b24d"></i>
        <i v-if="application.denied" data-eva="close-square" data-eva-fill="#f03e3e"></i>
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
      } else if (args.denied) {
        db.ref("applications").child(args.key).update({
          accepted: null,
          denied: true
        });
      }
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
  border: 1px solid darken($background-color, 7.5%);
  border-radius: 3px;
  display: flex;
  margin-top: 20px;
  overflow: hidden;

  ul {
    background: lighten($background-color, 2.5%);
    border-right: 1px solid darken($background-color, 7.5%);

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

      .name {
        font-weight: 500;
        margin-right: 50px;
        white-space: nowrap;
      }

      .battletag {
        font-size: 12px;
        opacity: 0.25;
      }
    }
  }
}
</style>
