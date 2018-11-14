<template>
  <div id="app">
    <header>
      <div id="nav">
        <div>
          <router-link to="/" class="logo">&lt;Visage&gt;</router-link>
          <router-link to="/apply">Apply</router-link>
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

  &:focus {
    outline: none;
  }
}

body {
  background: $background-color;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  z-index: 1;

  &::after {
    background: $background-color;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.9;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}

#app {
  color: $text-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.25;
  margin: 0 auto ;
  max-width: $max-width;
  padding: #{ $header-height + 25px } 0 50px;
  text-align: center;
  width: 95%;
  z-index: 10;
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
      color: inherit;
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
        position: relative;
        top: 4px;
      }

      + a {
        margin-left: 15px;
      }

      &.logo {
        font-size: 20px;
        margin-right: 20px;
        opacity: 1;
        text-align: left;
      }

      &:not(.logo).router-link-exact-active {
        border-color: $primary-color;
        opacity: 1;
      }
    }
  }
}

a {
  color: $primary-color;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

button, .button {
  background: $primary-color;
  border: none;
  border-radius: 3px;
  color: $text-color;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  transition: 0.25s ease;

  &:hover {
    background: darken($primary-color, 10%);
    text-decoration: none;
  }
}
</style>
