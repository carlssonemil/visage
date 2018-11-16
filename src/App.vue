<template>
  <div id="app">
    <header>
      <div id="nav">
        <div>
          <router-link to="/" class="logo">&lt;Visage&gt;</router-link>
        </div>
        <div>
          <router-link to="/apply">Apply</router-link>
          <span class="divider">&bullet;</span>
          <a href="https://www.wowprogress.com/guild/eu/tarren-mill/Visage">WoWProgress</a>
        </div>
      </div>
    </header>
    <main id="main">
      <div class="container">
        <router-view/>
      </div>
    </main>
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
  overflow: hidden;
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
  padding: #{ $header-height } 0 50px;
  text-align: center;
  width: 100%;
  z-index: 10;
}

main {
  height: calc(100vh - #{ $header-height });
  overflow-y: auto;
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: $max-width;
    width: 95%;
  }
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

    span.divider {
      margin: 0 10px;
      opacity: 0.2;
      position: relative;
      top: 3px;
    }
  }
}

h2 {
  font-size: 24px !important;
  font-weight: 600 !important;
  margin: 0 0 20px !important;
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

  + button {
    margin-left: 8px;
  }

  &.red {
    background: $color-red;

    &:hover {
      background: darken($color-red, 2.5%);
    }
  }

  &.green {
    background: $color-green;

    &:hover {
      background: darken($color-green, 10%);
    }
  }
}

form {
  margin-top: 40px;
  text-align: left;
  
  label {
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }

  input {
    background: lighten($background-color, 5%);
    border: 1px solid lighten($background-color, 15%);
    border-radius: 2px;
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
}
</style>
