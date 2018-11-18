<template>
  <div id="application" :class="application.accepted ? 'accepted' : application.denied ? 'denied' : 0">
    <p v-if="application.accepted" class="status accepted">Den här ansökan har accepterats.</p>
    <p v-if="application.denied" class="status denied">Den här ansökan har nekats.</p>
    
    <label>Namn:</label>
    <p>{{ application.name }}</p>

    <label>Ålder:</label>
    <p>{{ application.age }}</p>

    <label>Bnet-tag:</label>
    <p>{{ application.bnet }}</p>
    
    <label>Class:</label>
    <p>{{ application.class }}</p>
    
    <label>Spec:</label>
    <p>{{ application.spec }}</p>
    
    <label>Vi raidar 3 dagar i veckan (ons/tors/sön, 20:00 - 23:00) kan du hålla minst en 80-90% attendence? Om nej, varför?</label>
    <p>{{ application.attendence }}</p>

    <label>Tidigare erfarenhet och nuvarande?</label>
    <p>{{ application.previousExperience }}</p>

    <label>Vilken/vilka guilder har du vart med i tidigare och varför lämnade du?</label>
    <p>{{ application.previousGuilds }}</p>

    <label>Vårat mål är high end mythic raiding, vara bland de bättre, samt ha en skön och trevlig miljö där man kan ha roligt samtidigt som vi når våra mål. Vad är målet med raiding för dig?</label>
    <p>{{ application.raidingGoals }}</p>

    <label>Vi är en guild med mer än 20 medlemmar så ibland kommer man få sitta ute, har du något problem med det?</label>
    <p>{{ application.problemWithBench }}</p>

    <label>Länk till en printscreen av ditt UI i combat:</label>
    <p><a :href="application.uiPrintscreen">{{ application.uiPrintscreen }}</a></p>

    <label>Warcraftlogs:</label>
    <p><a :href="application.warcraftlogs">{{ application.warcraftlogs }}</a></p>

    <label>Armory:</label>
    <p><a :href="application.armory">{{ application.armory }}</a></p>

    <label>Har du något att tillägga?</label>
    <p>{{ application.otherInformation }}</p>

    <div v-if="!application.accepted && !application.denied">
      <button class="green" @click="$emit('changeStatus', { 'key': application['.key'], 'accepted': true})">Acceptera</button>
      <button class="red" @click="$emit('changeStatus', { 'key': application['.key'], 'denied': true})">Neka</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'application',
  props: { application: Object }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#application {
  border: 2px solid $background-color;
  padding: 15px;
  text-align: left;
  transition: 0.25s ease;

  &.accepted {
    border-color: $color-green;
  }

  &.denied {
    border-color: $color-red;
  }

  label {
    color: lighten($background-color, 25%);
    font-weight: 500;
  }

  p {
    margin-bottom: 15px;

    &.status {
      align-items: center;
      border-radius: 3px;
      display: flex;
      font-weight: 500;
      margin: 0 0 20px;
      padding: 8px;
      transition: 0.25s ease;

      &.accepted {
        background: $color-green;
        color: $text-color;
      }

      &.denied {
        background: $color-red;
        color: $text-color;
      }
    }
  }

  button {
    margin-top: 30px;
  }
}
</style>
