<template lang="html">
  <div class="row blue-grey darken-4">
    <nav class="blue-grey darken-4 nav-extended">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Administrador</a>
      </div>
      <div class="nav-content">
        <span class="nav-title digit">Usuarios Registrados</span>
        <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
          <i class="material-icons indigo">add</i>
        </a>
      </div>
    </nav>
    <div class="row">
      <div class="col s12 m6 l6">
          <table class="white-text">
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Telefóno</th>
              </tr>
            </thead>
            <tbody class="thin">
              <tr v-for="user in users.list" v-bind:key="user.username">
                <td class="capitalize">{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
import M from 'materialize-css'
import firebase from 'firebase'

export default{
  name:'admin',
  data() {
      return {
        "users":{
          "list":[],
          "length":0
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getUsers: function () {
      firebase.database().ref("users").once('value', (snapshot)=> {
        this.users.list = snapshot.val()
        this.users.length = snapshot.numChildren()
      })
    }
  },
  mounted(){
    const elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
    this.getUsers()
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
        { vmid: 'keywords', name: 'keywords', content: this.keywords }
      ]
    }
  }
}
</script>
<style lag="css">
.capitalize{
  text-transform:capitalize;
}
</style>
