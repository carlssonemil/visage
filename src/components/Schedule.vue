<template>
  <div id="schedule" class="module" data-title="Schedule">
    <ul>
      <li v-for="(time, weekday) in schedule" :key="weekday">
        <span class="weekday">{{ weekday }}</span>
        <span class="time">{{ time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: { schedule: Object }
}
</script>