<template>
  <div id="app">
    <header>
      <div id="nav">
        <div>
          <router-link to="/" class="logo">&lt;Visage&gt;<span class="server">Tarren Mill - EU</span></router-link>
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
@import '@/styles/variables.scss';

* {
  box-sizing: border-box;
}

body {
  background: $background-color;
}

#app {
  color: $text-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: #{ $header-height + 25px } auto 0;
  max-width: $max-width;
  text-align: center;
  width: 95%;
}

header {
  background: $header-background;
  height: $header-height;
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
    max-width: $max-width;
    width: 95%;

    div {
      align-items: center;
      display: flex;
    }

    a {
      font-weight: 500;
      opacity: 0.5;
      text-decoration: none;
      transition: 0.25s ease;

      &:hover {
        opacity: 0.75;
      }

      &:focus, &:visited, &:active {
        color: inherit;
      }

      &:not(.logo) {
        border-bottom: 2px solid $header-background;
        padding: 0 2px 3px;
      }

      + a {
        margin-left: 15px;
      }

      &.logo {
        font-size: 20px;
        opacity: 1;
        text-align: left;

        span.server {
          display: block;
          font-size: 12px;
          margin-top: 4px;
          opacity: 0.5;
        }
      }

      &:not(.logo).router-link-exact-active {
        border-color: $primary-color;
        opacity: 1;
      }
    }
  }
}
</style>
