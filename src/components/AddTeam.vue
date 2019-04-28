<template>
<div>
<form v-show="teams.length < 16" v-on:submit.prevent="add">
  <input v-model="newTeamName" placeholder="Team name"/>
</form>
  <span>{{ teams.length }} / 16</span>
  <TeamList v-bind:teams="teams"/>
  </div>
</template>

<script>

import TeamList from './TeamList.vue'

export default {
  name: 'AddTeam',
  components: {TeamList},
  data: function () {
    return {
      newTeamName: '',
      teams: [],
      increment: 1
    }
  },
  methods: {
    add: function () {
      this.teams.push({
        id: this.increment,
        name: this.newTeamName
      })
      this.newTeamName = ''
      this.increment++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
