<template>
  <div v-if="content && content.progress" id="edit-content">
    <form @submit.prevent="saveContent()">
      <div class="row">
        <div class="column">
          <label for="">Description</label>
          <textarea :value="content.description" @input="saveContent($event.target.value, 'description')"></textarea>

          <label for="">Schedule</label>    
          <div v-for="(time, weekday) in content.schedule" :key="weekday" class="schedule">
            <p class="weekday">{{ weekday }}</p>
            <input type="text" class="time" :value="content.schedule[weekday]" @input="saveContent($event.target.value, 'schedule', weekday)">
          </div>
        </div>

        <div class="column">
          <label for="">Progress &ndash; Uldir</label>
          <div v-for="boss in content.progress.Uldir" :key="boss.name" class="progress">
            <p class="boss-name">{{ boss.name }}</p>
            <input type="text" class="boss-difficulty" :value="boss.difficulty" @input="saveContent($event.target.value, 'progress', boss.order)">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Import database Object from Firebase init file.
import { db } from '../firebaseApp'

export default {
  name: 'EditContent',
  firebase: {
    // Declare a database reference to 'content' table
    content: {
      source: db.ref("content"),
      asObject: true
    }
  },
  methods: {
    saveContent(value, type, identifier = null) {
      if (type === 'description') return this.$firebaseRefs.content.child(type).set(value);
      if (type === 'schedule') return this.$firebaseRefs.content.child(type).child(identifier).set(value);
      if (type === 'progress') return this.$firebaseRefs.content.child(type).child('Uldir').child(identifier).child('difficulty').set(value);

      console.log(`Property 'type' does not match possible entries.`);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#edit-content {
  background: $background-color;
  border: 1px solid darken($background-color, 2.5%);
  border-radius: 3px;
  padding: 20px;

  form {
    margin: 0;
  }
}

.schedule, .progress {
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  + .schedule, + .progress {
    margin-top: 5px;
  }

  > p {
    flex: 0 0 auto;
    margin: 0;
  }

  > input {
    margin: 0;
  }
}

.progress > input {
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  width: 30px;
}

.schedule > input {
  text-align: center;
  width: 110px;
}

.column + .column {
  margin-left: 40px;
}
</style>

