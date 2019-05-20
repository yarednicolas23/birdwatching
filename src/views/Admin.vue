<template lang="html">
  <div class="row blue-grey darken-4">
    <nav class="blue-grey darken-4">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Administrador</a>
      </div>
    </nav>
    <div class="row">
      <div class="col s12 m6 l6">
        <h4 class="bold white-text">Usuarios Registrados</h4>
        <div class="divider"></div>
        <table class="white-text">
          <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefóno</th>
            </tr>
          </thead>
          <tbody class="thin" v-if="users.list != 0">
            <tr v-for="user in users.list" v-bind:key="user.username">
              <td class="capitalize">{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.phone}}</td>
            </tr>
          </tbody>
          <div class="center" v-else>
            <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
          <h4 class="thin white-text">Galeria</h4>
          <div class="divider"></div>
          <div class="col s12">
            <div class="col s12 m6 l6"  v-for="(bird,key) in gallery.list" v-bind:key="key">
              <div class="card horizontal">
                <div class="card-image">
                  <img :src="'img/'+bird.img">
                  <span class="card-title">{{bird.name}}</span>
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>{{bird.description}}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        "gallery":{
          "list":{}
        },
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
    },
    getGallery: function () {
      firebase.database().ref("page/home/gallery").once('value', (snapshot)=> {
        this.gallery.list = snapshot.val()
        //this.users.length = snapshot.numChildren()

      })
    }
  },
  mounted(){
    const elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
    this.getUsers()
    this.getGallery()
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
nav {
  padding:0 10px;
}
</style>
