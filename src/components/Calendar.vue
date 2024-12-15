<script>
import WindowsCard from './WindowsCard.vue'
export default {
  name: 'Calendar',
  components: {
    WindowsCard
  },
  computed: {
    getCalendar() {
      return this.$store.state.calendar
    },
  }

}
</script>

<template>
  <div class="calendar">
      <WindowsCard v-for="date in getCalendar"
                   :key="date.day"
                   :number="date.day"
                   :column="date.column"
                   :row="date.row"
      />
  </div>
</template>

<style scoped>
.calendar {
  width: 100%;
  height: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(25, auto);
  gap: 10px;
}
</style>