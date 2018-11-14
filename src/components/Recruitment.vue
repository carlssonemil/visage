<template>
  <div id="recruitment" class="module" data-title="Recruitment">
    <ul>
      <li>
        <span class="class">Death Knight</span>
        <div class="specs">
          <img src="@/assets/deathknight_blood.png" alt="Blood" title="Blood">
          <img src="@/assets/deathknight_frost.png" alt="Frost" title="Frost">
          <img src="@/assets/deathknight_unholy.png" alt="Unholy" title="Unholy">
        </div>
      </li>
      <li>
        <span class="class">Demon Hunter</span>
        <div class="specs">
          <img src="@/assets/demonhunter_havoc.png" alt="Havoc" title="Havoc">
          <img src="@/assets/demonhunter_vengeance.png" alt="Vengeance" title="Vengeance">
        </div>
      </li>
      <li>
        <span class="class">Druid</span>
        <div class="specs">
          <img src="@/assets/druid_balance.png" alt="Balance" title="Balance">
          <img src="@/assets/druid_feral.png" alt="Feral" title="Feral">
          <img src="@/assets/druid_guardian.png" alt="Guardian" title="Guardian">
          <img src="@/assets/druid_restoration.png" alt="Restoration" title="Restoration">
        </div>
      </li>
      <li>
        <span class="class">Hunter</span>
        <div class="specs">
          <img src="@/assets/hunter_beastmastery.png" alt="Beast Mastery" title="Beast Mastery">
          <img src="@/assets/hunter_marksmanship.png" alt="Marksmanship" title="Marksmanship">
          <img src="@/assets/hunter_survival.png" alt="Survival" title="Survival">
        </div>
      </li>
      <li>
        <span class="class">Mage</span>
        <div class="specs">
          <img src="@/assets/mage_arcane.png" alt="Arcane" title="Arcane">
          <img src="@/assets/mage_fire.png" alt="Fire" title="Fire">
          <img src="@/assets/mage_frost.png" alt="Frost" title="Frost">
        </div>
      </li>
      <li>
        <span class="class">Monk</span>
        <div class="specs">
          <img src="@/assets/monk_brewmaster.png" alt="Brewmaster" title="Brewmaster">
          <img src="@/assets/monk_mistweaver.png" alt="Mistweaver" title="Mistweaver">
          <img src="@/assets/monk_windwalker.png" alt="Windwalker" title="Windwalker">
        </div>
      </li>
      <li>
        <span class="class">Paladin</span>
        <div class="specs">
          <img src="@/assets/paladin_holy.png" alt="Holy" title="Holy">
          <img src="@/assets/paladin_protection.png" alt="Protection" title="Protection">
          <img src="@/assets/paladin_retribution.png" alt="Retribution" title="Retribution">
        </div>
      </li>
      <li>
        <span class="class">Priest</span>
        <div class="specs">
          <img src="@/assets/priest_discipline.png" alt="Discipline" title="Discipline">
          <img src="@/assets/priest_holy.png" alt="Holy" title="Holy">
          <img src="@/assets/priest_shadow.png" alt="Shadow" title="Shadow">
        </div>
      </li>
      <li>
        <span class="class">Rogue</span>
        <div class="specs">
          <img src="@/assets/rogue_assassination.png" alt="Assassination" title="Assassination">
          <img src="@/assets/rogue_outlaw.png" alt="Outlaw" title="Outlaw">
          <img src="@/assets/rogue_subtlety.png" alt="Subtlety" title="Subtlety">
        </div>
      </li>
      <li>
        <span class="class">Shaman</span>
        <div class="specs">
          <img src="@/assets/shaman_elemental.png" alt="Elemental" title="Elemental">
          <img src="@/assets/shaman_enhancement.png" alt="Enhancement" title="Enhancement">
          <img src="@/assets/shaman_restoration.png" alt="Restoration" title="Restoration">
        </div>
      </li>
      <li>
        <span class="class">Warlock</span>
        <div class="specs">
          <img src="@/assets/warlock_affliction.png" alt="Affliction" title="Affliction">
          <img src="@/assets/warlock_demonology.png" alt="Demonology" title="Demonology">
          <img src="@/assets/warlock_destruction.png" alt="Destruction" title="Destruction">
        </div>
      </li>
      <li>
        <span class="class">Warrior</span>
        <div class="specs">
          <img src="@/assets/warrior_arms.png" alt="Arms" title="Arms">
          <img src="@/assets/warrior_fury.png" alt="Fury" title="Fury">
          <img src="@/assets/warrior_protection.png" alt="Protection" title="Protection">
        </div>
      </li>
    </ul>
    <router-link to="/apply">Apply</router-link>
  </div>
</template>

<script>
export default {
  name: 'Recruitment'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#recruitment {
  margin-left: 15px;

  div.specs {
    img {

      + img {
        margin-left: 2px;
      }
    }
  }
}
</style>