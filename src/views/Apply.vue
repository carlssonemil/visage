<template>
  <div id="apply">
    <h2>Ansök</h2>

    <p>Krav som måste uppfyllas för att ansöka:</p>
    <ul>
      <li>Vara minst 18 år fyllda</li>
      <li>Kunna skriva och förstå svenska</li>
      <li>Ha en mikrofon och ha tillgång till Discord</li>
      <li>Fylla i denna ansökan på ett korrekt sätt. Se det som en jobbansökan, är den dåligt skriven blir mottagandet dåligt. Fyll i varje fält så bra ni kan och fråga om det är något ni undrar över.</li>
    </ul>

    <p>Låter allt bra? Låt oss då gå vidare till ansökan:</p>

    <form @submit.prevent="sendApplication()">
      <div class="row">
        <div class="column">
          <label for="form-name">Namn:</label>
          <input v-model="application.name" id="form-name" name="Name" type="text" placeholder="Ex: John Doe" v-validate="'required'" :class="{ error: errors.has('Name') }">
          <span v-show="errors.has('Name')" class="validation-error">Det här fältet är obligatoriskt.</span>
        </div>

        <div class="column auto">
          <label for="form-age">Ålder:</label>
          <input v-model="application.age" id="form-age" name="Age" type="text" placeholder="Ex: 18" v-validate="'required'" :class="{ error: errors.has('Age') }">
          <span v-show="errors.has('Age')" class="validation-error">Det här fältet är obligatoriskt.</span>
        </div>
      </div>

      <div class="row">
        <div class="column auto">
          <label for="form-bnet">Bnet-tag:</label>
          <input v-model="application.bnet" id="form-bnet" name="Bnet-tag" type="text" placeholder="Ex: Dragonslayer#1337" v-validate="'required'" :class="{ error: errors.has('Bnet-Tag') }">
          <span v-show="errors.has('Bnet-Tag')" class="validation-error">Det här fältet är obligatoriskt.</span>
        </div>

        <div class="column">
          <label for="form-class">Class:</label>
          <select v-model="application.class" id="form-class" name="Class" v-validate="'required'" :class="{ error: errors.has('Class') }">
            <option value="Death Knight">Death Knight</option>
            <option value="Demon Hunter">Demon Hunter</option>
            <option value="Druid">Druid</option>
            <option value="Hunter">Hunter</option>
            <option value="Mage">Mage</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Priest">Priest</option>
            <option value="Rogue">Rogue</option>
            <option value="Shaman">Shaman</option>
            <option value="Warlock">Warlock</option>
            <option value="Warrior">Warrior</option>
          </select>
          <span v-show="errors.has('Class')" class="validation-error">Det här fältet är obligatoriskt.</span>
        </div>

        <div class="column">
          <label for="form-spec">Primär spec:</label>
          <select v-model="application.spec" id="form-spec" name="Spec" v-validate="'required'" :class="{ error: errors.has('Spec') }">
            <option value="DPS">DPS</option>
            <option value="Healer">Healer</option>
            <option value="Tank">Tank</option>
          </select>
          <span v-show="errors.has('Spec')" class="validation-error">Det här fältet är obligatoriskt.</span>
        </div>
      </div>

      <label for="form-attendence">Vi raidar 3 dagar i veckan (ons/tors/sön, 20:00 - 23:00) kan du hålla minst en 80-90% attendence? Om nej, varför?</label>
      <textarea v-model="application.attendence" id="form-attendence" name="Attendence" v-validate="'required'" :class="{ error: errors.has('Attendence') }"></textarea>
      <span v-show="errors.has('Attendence')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-current-guild">Nuvarande och tidigare guild, och varför du lämnat/vill lämna dessa?</label>
      <textarea v-model="application.currentGuild" id="form-current-guild" name="Current Guild" v-validate="'required'" :class="{ error: errors.has('Current Guild') }"></textarea>
      <span v-show="errors.has('Current Guild')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-previous-experience">Tidigare erfarenhet och nuvarande?</label>
      <textarea v-model="application.previousExperience" id="form-previous-experience" name="Previous Experience" v-validate="'required'" :class="{ error: errors.has('Previous Experience') }"></textarea>
      <span v-show="errors.has('Previous Experience')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-previous-guilds">Vilken/vilka guilder har du vart med i tidigare och varför lämnade du?</label>
      <textarea v-model="application.previousGuilds" id="form-previous-guilds"></textarea>

      <label for="form-raiding-goals">Vårat mål är high end mythic raiding, vara bland de bättre, samt ha en skön och trevlig miljö där man kan ha roligt samtidigt som vi når våra mål. Vad är målet med raiding för dig?</label>
      <textarea v-model="application.raidingGoals" id="form-raiding-goals" name="Raiding Goals" v-validate="'required'" :class="{ error: errors.has('Raiding Goals') }"></textarea>
      <span v-show="errors.has('Raiding Goals')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-problem-with-bench">Vi är en guild med mer än 20 medlemmar så ibland kommer man få sitta ute, har du något problem med det?</label>
      <textarea v-model="application.problemWithBench" id="form-problem-with-bench"></textarea>

      <label for="form-ui-printscreen">Länk till en printscreen av ditt UI i combat (använd <a href="https://gyazo.com/">Gyazo</a> eller <a href="https://imgur.com/">Imgur</a>):</label>
      <input v-model="application.uiPrintscreen" id="form-ui-printscreen" name="UI Printscreen" type="text" placeholder="Ex: https://i.imgur.com/skSpO.jpg" v-validate="'required'" :class="{ error: errors.has('UI Printscreen') }">
      <span v-show="errors.has('UI Printscreen')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-warcraftlogs">Warcraftlogs:</label>
      <input v-model="application.warcraftlogs" id="form-warcraftlogs" name="Warcraftlogs" type="text" placeholder="Ex: htts://www.warcraftlogs.com/character/eu/[server]/[karaktär]" v-validate="'required'" :class="{ error: errors.has('Warcraftlogs') }">
      <span v-show="errors.has('Warcraftlogs')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-armory">Armory:</label>
      <input v-model="application.armory" id="form-armory" name="Armory" type="text" placeholder="Ex: https://worldofwarcraft.com/en-gb/character/[server]/[karaktär]/" v-validate="'required'" :class="{ error: errors.has('Armory') }">
      <span v-show="errors.has('Armory')" class="validation-error">Det här fältet är obligatoriskt.</span>

      <label for="form-other-information">Har du något att tillägga?</label>
      <textarea v-model="application.otherInformation" id="form-other-information"></textarea>

      <button type="submit">Skicka ansökan</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
};

const app = Firebase.initializeApp(config);
const db = app.database();

let applicationsRef = db.ref("applications");

export default {
  name: 'apply',
  data () {
    return {
      application: {}
    }
  },
  methods: {
    sendApplication() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          applicationsRef.push(this.application);

          this.application = {};

          this.$validator.reset();
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#apply {
  font-size: 18px;
  margin: 0 auto;
  max-width: 600px;
  text-align: left;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 20px;
  }

  p {
    margin: 10px 0;
  }

  ul {
    margin: 0px 20px 20px;

    li {
      list-style: disc;
      margin: 5px 0;
    }
  }

}

.row {
  display: flex;

  .column {
    flex: 1;

    &.auto {
      flex: 0 auto;
    }

    + .column {
      margin-left: 10px;
    }
  }
}

form {
  margin-top: 40px;
  
  label {
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }

  input {
    background: lighten($background-color, 5%);
    border: 2px solid lighten($background-color, 5%);
    border-radius: 3px;
    color: $text-color;
    font-family: inherit;
    font-size: 16px;
    display: block;
    margin-bottom: 15px;
    padding: 4px 8px;
    transition: 0.25s ease;
    width: 100%;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }

    &.error {
      border-color: $color-red;
    }
  }

  textarea {
    @extend input;

    min-height: 100px;
    max-height: 300px;
    resize: vertical;
  }

  select {
    @extend input;

    padding: 3px 0 3px 4px;
  }

  .validation-error {
    color: $color-red;
    font-size: 12px;
    font-weight: 500;
    position: relative;
    top: -20px;
  }

  button {
    background: $primary-color;
    border: none;
    border-radius: 3px;
    color: $text-color;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 16px;
  }
}
</style>
