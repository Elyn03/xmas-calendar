<template>
  <div class="windows" :style="gridStyle">
    <div class="windows-top">
      <div class="windows-glass">
        <h1 class="green">{{ number }}</h1>
      </div>
    </div>
    <div class="windows-middle"></div>
    <div class="windows-bottom"></div>
  </div>

  {{testCalcul}}
</template>

<script>
export default {
  name: 'WindowsCard',
  props: {
    number: Number,
    column: String,
    row: String
  },
  computed: {
    gridStyle() {
      return {
        gridColumn: this.column,
        gridRow: this.row,
      }
    },
    testCalcul() {
      let col = this.column.split("")
      let total = Number(col[2]) - Number(col[0])
      console.log(this.column, total)
    }
  }
}
</script>

<style scoped>
.windows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.windows-top {
  margin: 0 5px;
  padding: 2px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px solid cadetblue;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
}

.windows-glass {
  margin: 0 5px;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px solid cadetblue;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
}

.windows-middle {
  margin: 0 5px;
  height: 10px;
  background-color: white;
  border: 5px solid cadetblue;
  border-top: 0;
  border-bottom: 0;
}

.windows-bottom {
  height: 15px;
  background-color: white;
  border: 5px solid cadetblue;
  border-radius: 2px;
}
</style>
