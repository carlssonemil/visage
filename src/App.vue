<template>
  <div id="app">
    <header>
      <div id="nav">
        <div>
          <router-link to="/" class="logo">&lt;Visage&gt;</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div>
          <a href="https://www.wowprogress.com/guild/eu/tarren-mill/Visage">WoWProgress</a>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 75px auto 0;
  max-width: 1200px;
  text-align: center;
  width: 95%;
}

header {
  background: lightgray;
  height: 50px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  #nav {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;

    div {
      align-items: center;
      display: flex;
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      + a {
        margin-left: 15px;
      }

      &.logo {
        font-size: 22px;
        line-height: 22px;
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
