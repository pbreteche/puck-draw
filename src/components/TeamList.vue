<template>
  <ul>
    <li v-for="(team, index) in teams" v-bind:key="team.id">
      <span v-on:click="showForm(index)" v-show="index!=editedTeam">{{ team.name }}</span>
      <form v-on:submit.prevent="hideForm" v-show="index==editedTeam">
        <input v-model="teams[index].name">
      </form>
      <button v-on:click="remove(index)">Remove</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'TeamList',
  props: {
    teams: Array
    },
  data: function () {
    return {
      editedTeam: -1
    }
  },
  methods: {
    showForm: function (index) {
      this.editedTeam = index
    },
    hideForm: function (event) {
      this.editedTeam = -1
    },
    remove: function (index) {
      this.teams.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
