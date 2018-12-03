<template>
  <div id="recruitment" class="module" data-title="Recruitment">
    <div>
      <ul>
        <!--<li v-for="(specs, className) in neededClasses" :key="className">
          <span class="class">{{ className }}</span>
          <div class="specs">
            <img v-for="(needed, spec) in specs" :key="spec" :src="require(`@/assets/${ className.toLowerCase().replace(/\s/g, '') }_${ spec.toLowerCase().replace(/\s/g, '') }.png`)" :alt="spec" :title="spec">
          </div>
        </li>-->


        <li>
          <span class="class">Druid</span>
          <div class="specs">
            <img src="@/assets/druid_balance.png" alt="Balance" title="Balance">
            <span class="priority" title="Medium Priority"></span>
          </div>
        </li>
        <li>
          <span class="class">Mage</span>
          <div class="specs">
            <img src="@/assets/mage_arcane.png" alt="Arcane" title="Arcane">
            <img src="@/assets/mage_fire.png" alt="Fire" title="Fire">
            <img src="@/assets/mage_frost.png" alt="Frost" title="Frost">
            <span class="priority" title="Medium Priority"></span>
          </div>
        </li>
        <li>
          <span class="class">Priest</span>
          <div class="specs">
            <img src="@/assets/priest_discipline.png" alt="Discipline" title="Discipline">
            <span class="priority" title="High Priority"></span>
          </div>
        </li>
        <li>
          <span class="class">Rogue</span>
          <div class="specs">
            <img src="@/assets/rogue_assassination.png" alt="Assassination" title="Assassination">
            <img src="@/assets/rogue_outlaw.png" alt="Outlaw" title="Outlaw">
            <img src="@/assets/rogue_subtlety.png" alt="Subtlety" title="Subtlety">
            <span class="priority" title="Low Priority"></span>
          </div>
        </li>
        <li>
          <span class="class">Shaman</span>
          <div class="specs">
            <img src="@/assets/shaman_elemental.png" alt="Elemental" title="Elemental">
            <span class="priority" title="Low Priority"></span>
          </div>
        </li>
        <li>
          <span class="class">Warlock</span>
          <div class="specs">
            <img src="@/assets/warlock_affliction.png" alt="Affliction" title="Affliction">
            <img src="@/assets/warlock_demonology.png" alt="Demonology" title="Demonology">
            <img src="@/assets/warlock_destruction.png" alt="Destruction" title="Destruction">
            <span class="priority" title="High Priority"></span>
          </div>
        </li>
      </ul>

      <div class="priority-info">
        <span class="priority" title="Low Priority"></span>
        <span>Low Priority</span>

        <span class="priority" title="Medium Priority"></span>
        <span>Medium Priority</span>

        <span class="priority" title="High Priority"></span>
        <span>High Priority</span>
      </div>
    </div>

    <router-link to="/apply" class="button">Apply</router-link>
  </div>
</template>

<script>
export default {
  name: 'Recruitment',
  props: { recruitment: Object },
  computed: {
    neededClasses() {
      return this.recruitment;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#recruitment {
  justify-content: space-between;
  margin-left: 15px;

  @media screen and (max-width: $mobile) {
    margin-left: 0;
    margin-top: 15px;
  }

  div.specs {
    img {

      + img {
        margin-left: 2px;
      }
    }
  }

  span.priority {
    $priority-size: 10px;

    background: gray;
    border-radius: $priority-size;
    display: inline-block;
    height: $priority-size;
    margin-left: 10px;
    width: $priority-size;

    &[title*="Low"] {
      background: $color-green;
    }

    &[title*="Medium"] {
      background: $color-yellow;
    }

    &[title*="High"] {
      background: $color-red;
    }
  }

  .priority-info {
    align-items: center;
    color: lighten($background-color, 15%);
    display: flex;
    font-weight: 700;
    font-size: 10px;
    justify-content: center;
    margin: 15px 0;

    span:nth-child(even) {
      margin: 0 10px 0 5px;
      position: relative;
      white-space: nowrap;
    }
  }

  .button {
    margin-top: 10px;
  }
}
</style>