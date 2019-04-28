import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddTeam from './components/AddTeam.vue'
import Draw from './components/Draw.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/create-teams', component: AddTeam },
  { path: '/draw', component: Draw },
  { path: '*', redirect: '/create-teams' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
