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

    <form>
      <div class="row">
        <div class="column">
          <label for="form-name">Namn:</label>
          <input id="form-name" type="text" placeholder="Ex: John Doe">
        </div>

        <div class="column auto">
          <label for="form-age">Ålder:</label>
          <input id="form-age" type="text" placeholder="Ex: 18">
        </div>
      </div>

      <div class="row">
        <div class="column auto">
          <label for="form-bnet">Bnet-tag:</label>
          <input id="form-bnet" type="text" placeholder="Ex: Dragonslayer#1337">
        </div>

        <div class="column">
          <label for="form-class">Class:</label>
          <select id="form-class">
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
        </div>

        <div class="column">
          <label for="form-spec">Primär spec:</label>
          <select id="form-spec">
            <option value="DPS">DPS</option>
            <option value="Healer">Healer</option>
            <option value="Tank">Tank</option>
          </select>
        </div>
      </div>

      <label for="form-attendence">Vi raidar 3 dagar i veckan (ons/tors/sön, 20:00 - 23:00) kan du hålla minst en 80-90% attendence?</label>
      <textarea id="form-attendence"></textarea>

      <label for="form-current-guild">Nuvarande och tidigare guild, och varför du lämnat/vill lämna dessa?</label>
      <textarea id="form-current-guild"></textarea>

      <label for="form-previous-experience">Tidigare erfarenhet och nuvarande?</label>
      <textarea id="form-previous-experience"></textarea>

      <label for="form-previous-guilds">Vilken/vilka guilder har du vart med i tidigare och varför lämnade du?</label>
      <textarea id="form-previous-guilds"></textarea>

      <label for="form-raiding-goals">Vårat mål är high end mythic raiding, vara bland de bättre, samt ha en skön och trevlig miljö där man kan ha roligt samtidigt som vi når våra mål. Vad är målet med raiding för dig?</label>
      <textarea id="form-raiding-goals"></textarea>

      <label for="form-problem-with-bench">Vi är en guild med mer än 20 medlemmar så ibland kommer man få sitta ute, har du något problem med det?</label>
      <textarea id="form-problem-with-bench"></textarea>

      <label for="form-ui-printscreen">Länk till en printscreen av ditt UI i combat (använd <a href="https://gyazo.com/">Gyazo</a> eller <a href="https://imgur.com/">Imgur</a>):</label>
      <input id="form-ui-printscreen" type="text" placeholder="Ex: https://i.imgur.com/skSpO.jpg">

      <label for="form-warcraftlogs">Warcraftlogs:</label>
      <input id="form-warcraftlogs" type="text" placeholder="Ex: htts://www.warcraftlogs.com/character/eu/[server]/[karaktär]/">

      <label for="form-armory">Armory:</label>
      <input id="form-armory" type="text" placeholder="Ex: https://worldofwarcraft.com/en-gb/character/[server]/[karaktär]/">

      <label for="form-other-information">Har du något att tillägga?</label>
      <textarea id="form-other-information"></textarea>

      <button type="button">Skicka ansökan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'apply'
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
