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
          <input v-model="application.name" id="form-name" name="Namn" type="text" placeholder="Ex: John Doe" v-validate="'required'" :class="{ error: errors.has('Namn') }">
          <span v-show="errors.has('Namn')" class="validation-error">{{ errors.first("Namn") }}</span>
        </div>

        <div class="column auto">
          <label for="form-age">Ålder:</label>
          <input v-model="application.age" id="form-age" name="Ålder" type="text" placeholder="Ex: 18" v-validate="'required|digits:2'" :class="{ error: errors.has('Ålder') }">
          <span v-show="errors.has('Ålder')" class="validation-error">{{ errors.first("Ålder") }}</span>
        </div>
      </div>

      <div class="row">
        <div class="column auto">
          <label for="form-bnet">Bnet-tag:</label>
          <input v-model="application.bnet" id="form-bnet" name="Bnet-tag" type="text" placeholder="Ex: Dragonslayer#1337" v-validate="'required'" :class="{ error: errors.has('Bnet-tag') }">
          <span v-show="errors.has('Bnet-tag')" class="validation-error">{{ errors.first("Bnet-tag") }}</span>
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
          <span v-show="errors.has('Class')" class="validation-error">{{ errors.first("Class") }}</span>
        </div>

        <div class="column">
          <label for="form-spec">Primär spec:</label>
          <input v-model="application.spec" id="form-spec" name="Primär Spec" v-validate="'required'" :class="{ error: errors.has('Primär Spec') }" type="text">
          <span v-show="errors.has('Primär Spec')" class="validation-error">{{ errors.first("Primär Spec") }}</span>
        </div>
      </div>

      <label for="form-attendence">Vi raidar 3 dagar i veckan (ons/tors/sön, 20:00 - 23:00) kan du hålla minst en 80-90% attendence? Om nej, varför?</label>
      <textarea v-model="application.attendence" id="form-attendence" name="Attendence" v-validate="'required'" :class="{ error: errors.has('Attendence') }"></textarea>
      <span v-show="errors.has('Attendence')" class="validation-error">{{ errors.first("Attendence") }}</span>

      <label for="form-previous-experience">Tidigare erfarenhet och nuvarande?</label>
      <textarea v-model="application.previousExperience" id="form-previous-experience" name="Tidigare erfarenhet" v-validate="'required'" :class="{ error: errors.has('Tidigare erfarenhet') }"></textarea>
      <span v-show="errors.has('Tidigare erfarenhet')" class="validation-error">{{ errors.first("Tidigare erfarenhet") }}</span>

      <label for="form-previous-guilds">Vilken/vilka guilder har du vart med i tidigare och varför lämnade du?</label>
      <textarea v-model="application.previousGuilds" id="form-previous-guilds"></textarea>

      <label for="form-raiding-goals">Vårat mål är high end mythic raiding, vara bland de bättre, samt ha en skön och trevlig miljö där man kan ha roligt samtidigt som vi når våra mål. Vad är målet med raiding för dig?</label>
      <textarea v-model="application.raidingGoals" id="form-raiding-goals" name="Raiding mål" v-validate="'required'" :class="{ error: errors.has('Raiding mål') }"></textarea>
      <span v-show="errors.has('Raiding mål')" class="validation-error">{{ errors.first("Raiding mål") }}</span>

      <label for="form-problem-with-bench">Vi är en guild med mer än 20 medlemmar så ibland kommer man få sitta ute, har du något problem med det?</label>
      <textarea v-model="application.problemWithBench" id="form-problem-with-bench"></textarea>

      <label for="form-ui-printscreen">Länk till en printscreen av ditt UI i combat (använd <a href="https://gyazo.com/">Gyazo</a> eller <a href="https://imgur.com/">Imgur</a>):</label>
      <input v-model="application.uiPrintscreen" id="form-ui-printscreen" name="UI Printscreen" type="text" placeholder="Ex: https://i.imgur.com/skSpO.jpg" v-validate="'required|url'" :class="{ error: errors.has('UI Printscreen') }">
      <span v-show="errors.has('UI Printscreen')" class="validation-error">{{ errors.first("UI Printscreen") }}</span>

      <label for="form-warcraftlogs">Warcraftlogs:</label>
      <input v-model="application.warcraftlogs" id="form-warcraftlogs" name="Warcraftlogs" type="text" placeholder="Ex: htts://www.warcraftlogs.com/character/eu/[server]/[karaktär]" v-validate="'required|url'" :class="{ error: errors.has('Warcraftlogs') }">
      <span v-show="errors.has('Warcraftlogs')" class="validation-error">{{ errors.first("Warcraftlogs") }}</span>

      <label for="form-armory">Armory:</label>
      <input v-model="application.armory" id="form-armory" name="Armory" type="text" placeholder="Ex: https://worldofwarcraft.com/en-gb/character/[server]/[karaktär]/" v-validate="'required|url'" :class="{ error: errors.has('Armory') }">
      <span v-show="errors.has('Armory')" class="validation-error">{{ errors.first("Armory") }}</span>

      <label for="form-other-information">Har du något att tillägga?</label>
      <textarea v-model="application.otherInformation" id="form-other-information"></textarea>

      <button type="submit">Skicka ansökan</button>
    </form>
  </div>
</template>

<script>
// Import database Object from Firebase init file.
import { db } from '../firebaseApp'

// Require axios package.
const axios = require('axios');

// Declare a database reference to 'applications' table.
let applicationsRef = db.ref("applications");

export default {
  name: 'apply',
  data () {
    return {
      // Application model.
      application: {}
    }
  },
  methods: {
    sendApplication() {
      // Validate input.
      this.$validator.validateAll().then((result) => {
        // If result from validation is true, continue...
        if (result) {
          // Set 'timestamp' to current time.
          this.application.timestamp = new Date().toUTCString();

          // Push application to database.
          applicationsRef.push(this.application);

          // Send a discord notification that a new application has been submitted.
          sendDiscordNotification(this.application);

          // Empty 'application' model.
          this.application = {};

          // Reset validation.
          this.$validator.reset();

          // Scroll to top of page.
          this.$scrollTop("main");

          // Show notification that application was sent.
          this.$notify({
            title: 'Tack för din ansökan!',
            text: 'Vi hör av oss om du blir accepterad.',
            type: 'success',
            duration: 10000
          });
        // ... If not...
        } else {
          // Scroll to top of page.
          this.$scrollTop("main");

          // Show notification that there are errors in the application.
          this.$notify({
            title: 'Fel i ansökan',
            text: 'Åtgärda felen och försök skicka igen.',
            type: 'error',
            duration: 10000
          });
        }
      });
    }
  }
}

// Send a message to Discord using webhooks.
function sendDiscordNotification(application) {
  // Define the JSON object to send to webhook.
  // See: https://birdie0.github.io/discord-webhooks-guide/json.html
  const json = {
    "embeds": [
      {
        "author": {
          "name": "⚔️ Visage",
          "url": "https://visage-wow.firebaseapp.com"
        },
        "description": "A new application has been submitted. [View all applications](https://visage-wow.firebaseapp.com/admin).",
        "color": 7649302,
        "fields": [
          {
            "name": "Name",
            "value": application.name,
            "inline": true
          },
          {
            "name": "Bnet",
            "value": application.bnet,
            "inline": true
          },
          {
            "name": "Class",
            "value": application.class,
            "inline": true
          }
        ]
      }
    ]
  }

  // Post to webhook URL using axios.
  return axios.post(process.env.VUE_APP_DISCORD_WEBHOOK, json).catch(error => console.log(error));
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#apply {
  font-size: 18px;
  margin: 0 auto;
  max-width: 600px;
  padding: 75px 0;
  text-align: left;

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
</style>
