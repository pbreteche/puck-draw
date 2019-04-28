<template>
  <div id="app">
    <h1>Puck Draw</h1>
    <AddTeam/>
  </div>
</template>

<script>
import AddTeam from './components/AddTeam.vue'

export default {
  name: 'app',
  components: {
    AddTeam
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
