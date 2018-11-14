<template>
  <div id="app">
    <header>
      <div id="nav">
        <div>
          <router-link to="/">Home</router-link>
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
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  width: 95%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
