<template>
  <div id="admin">
    <div v-if="!this.authenticated" id="login">
      <h2>Logga in</h2>
      <form @submit.prevent="login()">
        <label for="">Användarnamn</label>
        <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" />

        <label for="">Lösenord</label>
        <input type="password" name="password" v-model="input.password" placeholder="Lösenord" />
        <button type="submit">Logga in</button>
      </form>
    </div>

    <div v-if="this.authenticated" id="authenticated">
      <h2>Admin – Ansökningar</h2>
      <Applications />
    </div>
  </div>
</template>

<script>
// Import components:
import Applications from '@/components/Applications.vue'

// Import database Object from Firebase init file.
import { db } from '../firebaseApp'

export default {
  name: 'admin',
  components: {
    Applications
  },
  firebase: {
    // Declare a database reference to 'users' table.
    users: db.ref("users")
  },
  data() {
    return {
      // Variable handling if user is logged in or not.
      authenticated: false,

      // Input model.
      input: {},

      // Object holding errors.
      errorList: {}
    }
  },
  mounted() {
    // Check if user has logged in before by fetching variable from localStorage.
    if (localStorage.authenticated) {
      // Set variable to value of localStorage value.
      this.authenticated = JSON.parse(localStorage.authenticated);
    }
  },
  methods: {
    login() {
      if (this.input.username && this.input.password) {
        let user = this.users.find(user => (user.username) ? user.username === this.input.username : null);

        if (user) {
          if (this.input.username === user.username && this.input.password === user.password) {
            this.authenticated = localStorage.authenticated = true;
          } else if (this.input.username === user.username) {
            this.errorList = { password: "Incorrect password." }
          } else if (this.input.password === user.password) {
            this.errorList = { username: "Incorrect username." }
          }
        } else {
          this.errorList = { username: "Username does not exist in database."}
        }
      } else {
        this.errorList = {
          username: "Username is required.",
          password: "Password is required."
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  margin: 0 auto;
  max-width: 350px;
  padding: 75px 0;
  text-align: center !important;
}

#admin {
  padding: 75px 0;
}

.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }
}
</style>

