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
            <div class="col s12 m6 l6" v-for="(bird,key) in gallery.list" v-bind:key="key">
              <div class="card horizontal">
                <div class="card-image">
                  <img :src="getSrc(key)">
                  <span class="card-title">{{bird.name}}</span>
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>{{bird.description}}</p>
                  </div>
                  <div class="card-action">
                    <a href="#" class="green-text">editar</a>
                    <a href="#" class="red-text">eliminar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <button data-target="addgallery" class="btn waves-effect waves-light blue-grey col s12 modal-trigger" type="button" name="button">
              Agregar Imagen
              <i class="material-icons right">add</i>
            </button>
          </div>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="addgallery" class="modal">
      <form v-on:submit.prevent="addPicture">
        <div class="modal-content">
          <h4>Añadir Imagen</h4>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="gallery.new.model.name" id="name" type="text" class="validate" required>
              <label for="name">Nombre</label>
            </div>
            <div class="input-field col s12">
              <textarea v-model="gallery.new.model.description" id="description" class="materialize-textarea" data-length="120" required></textarea>
              <label for="description">Descripción</label>
            </div>
            <img class="responsive-img" style="max-width: 150px;" :src="upload.img+'?'+upload.time" alt="">
            <div class="preloader-wrapper small active" v-if="this.gallery.new.loader">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
            <div class="col s12">
              <span class="add">
                <div class="file-field input-field">
                  <div class="btn indigo" :disabled="gallery.new.model.name ? null : !null">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen</span>
                    <input type="file" multiple v-on:change="uploadImg($event)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file">
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button :disabled="gallery.new.valid ? false : true" type="submit" class="modal-close waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import M from 'materialize-css'
import firebase from 'firebase'

export default{
  name:'admin',
  data() {
      return {
        "upload":{"img":"","time":0},
        "gallery":{
          "new":{
            "model":{
              "name":"",
              "description":""
            },
            "valid":false,
            "loader":false
          },
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
    },
    getSrc(name) {
      return require('../assets/img/'+name+'/'+ name + "-400.png")
    },
    addPicture: function() {
      M.toast({html: 'Cargando...'})
      firebase.database().ref().child('users').push(this.form)
      .once( "value", function() {
        M.toast({html: 'Tu Registro fue Exitoso'})
      }, function (error) {
        M.toast({html: 'Ups:'+error})
      })
    },
    uploadImg(e){
      this.gallery.new.loader = true
      var data= new FormData()
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img")
      data.append('name', this.gallery.new.model.name)
      $.ajax({
        url: 'https://apimgs.000webhostapp.com/api/upload/',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          try {
            if (data=="ok") {
              M.toast({html: 'Imagen subida 👾'})
              this.gallery.new.valid = true
              this.upload.img = "https://apimgs.000webhostapp.com/img/"+this.gallery.new.model.name+".png"
              this.upload.time = new Date().getTime()
              this.gallery.new.loader = false
            }
            if (data=="error" || data!="ok") {
              M.toast({html: 'Ups! hubo un error 👾'})
            }
          } catch (e) {
            M.toast({html: 'Ups, hubo un error 👾 '})
          }
        },
      });
    }
  },
  created(){
    this.getGallery()
  },
  mounted(){
    const elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
    const elemsmodal = document.querySelectorAll('.modal')
    M.Modal.init(elemsmodal)
    const characterCounter = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(characterCounter)
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
nav {
  padding:0 10px;
}
</style>
