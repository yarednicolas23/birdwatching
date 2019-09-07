<template lang="html">
  <div class="row blue-grey darken-4">
    <nav class="nav-extended blue-grey darken-4">
      <div class="nav-wrapper" style="padding:0%">
        <a href="#" class="brand-logo">🐦🦉🦅Administrador🦆🦃</a>
      </div>
      <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#users">Usuarios Registrados</a></li>
        <li class="tab"><a href="#gallery" v-on:click="listImgs()">Gallery🦉</a></li>
        <li class="tab"><a href="#pages">Paginas</a></li>
        <li class="tab"><a class="active" href="#home">Home</a></li>
        <li class="tab"><a href="#about-us">About us</a></li>
        <li class="tab"><a href="#staff">Staff</a></li>
        <li class="tab"><a href="#birdwatching-colombia">Birdwatching Colombia</a></li>
        <li class="tab"><a href="#tours">Tours</a></li>
        <li class="tab"><a href="#short-programs">Short Programs</a></li>
        <li class="tab disabled"><a href="#disabled">Disabled Tab</a></li>
      </ul>
    </div>
    </nav>
    <!-- Content of tabs -->
    <div id="users" class="row">
      <div class="row">
        <div class="col s12">
          <h5 class="thin blue-grey-text text-lighten-3">Usuarios Registrados</h5>
          <div class="divider "></div>
          <table class="blue-grey-text text-lighten-3">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
              </tr>
            </thead>
            <tbody class="thin" v-if="users.list != 0">
              <tr v-for="user in users.list" v-bind:key="user.username">
                <td class="capitalize">{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.message}}</td>
                <td>{{user.date}}</td>
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
    </div>
    <div id="gallery" class="row">
        <div class="col s12">
          <div class="col s12 m3 l3" v-for="(i,key) in gallery" v-bind:key="key">
            <div class="card blue-grey darken-3 white-text z-depth-4">
              <div class="card-image">
                <img :src="'https://apiforimgs.000webhostapp.com/img/'+i">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <span class="card-title">{{i}}</span>
                  <p></p>
                </div>
                <div class="card-action">
                  <a v-on:click="deleteImg(i.replace('.png',''))" class="pointer red-text">eliminar</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <button data-target="addgallery" class="btn waves-effect waves-light blue-grey col s12 modal-trigger" type="button" name="button">
              Add Image
              <i class="material-icons right">add</i>
            </button>
          </div>
        </div>
    </div>
    <div id="pages" class="row">
      <div class="col s12">
        <div class="col s12 m3 l3" v-for="(page,key) in pages.list" v-bind:key="key">
          <div class="card horizontal blue-grey darken-3 white-text z-depth-4">
            <div class="card-image">
              <img :src="getSrc(page.background)">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">{{key}}</span>
                <p></p>
              </div>
              <div class="card-action">
                <a class="pointer green-text modal-trigger" data-target="editgallery">editar</a>
                <a class="pointer red-text">eliminar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="home" class="row">
      <div class="row">
        <div class="col s12">
            <h5 class="thin blue-grey-text text-lighten-3">Galería</h5>
            <div class="divider"></div>
            <div class="col s12">
              <div class="col s12 m6 l6" v-for="(bird,key) in home.gallery.list" v-bind:key="key">
                <div class="card horizontal blue-grey darken-3 white-text z-depth-4">
                  <div class="card-image">
                    <img :src="getSrc(key)">
                    <span class="card-title">{{bird.name}}</span>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <p>{{bird.description}}</p>
                    </div>
                    <div class="card-action">
                      <a v-on:click="modalEditPicture(key,bird)" class="pointer green-text modal-trigger" data-target="editgallery">editar</a>
                      <a v-on:click="deletePicture(key)" class="pointer red-text">eliminar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12">
              <button data-target="addbird" class="btn waves-effect waves-light blue-grey col s12 modal-trigger" type="button" name="button">
                Agregar Imagen
                <i class="material-icons right">add</i>
              </button>
            </div>
        </div>
      </div>
    </div>
    <div id="about-us" class="row">
      <div class="col s12">
        <div class="col s12 m8 l8">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Codigo del contenido</span>
             <div class="row">
                <div class="col s12">
                  <CodeEditor><textarea class="code-input" v-model="about.code"></textarea></CodeEditor>
                </div>
             </div>
           </div>
         </div>
       </div>
       <div class="col s12 m4 l4">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Background Image</span>
             <div class="row">
               <div class="slider">
                 <ul class="slides">
                   <li  v-for="(bird,key) in home.gallery.list" v-bind:key="key">
                     <img :src="getSrc(key)"> <!-- random image -->
                     <div class="caption center-align">
                       <h3>{{key}}</h3>
                       <p>
                         <label class="white-text">
                           <input name="group1" type="radio" v-on:click="about.background = key" />
                           <span>Select image</span>
                         </label>
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
       <button class="btn col s12 green" v-on:click="updateAbout">Guardar Cambios <i class="material-icons right">save</i> </button>
     </div>
    </div>
    <div id="staff" class="row">
      <div class="col s12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Codigo del contenido</span>
            <div class="row">
               <div class="col s12">
                 <CodeEditor><textarea class="code-input" v-model="staff.code"></textarea></CodeEditor>
               </div>
            </div>
          </div>
        </div>
        <button class="btn col s12 green" v-on:click="updateStaff">Guardar Cambios <i class="material-icons right">save</i> </button>
      </div>
    </div>
    <div id="birdwatching-colombia" class="row">
      <div class="col s12">
        <div class="col s12 m8 l8">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Codigo del contenido</span>
             <div class="row">
                <div class="col s12">
                  <CodeEditor><textarea class="code-input" v-model="birdwatching.code"></textarea></CodeEditor>
                </div>
             </div>
           </div>
         </div>
       </div>
       <div class="col s12 m4 l4">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Background Image</span>
             <div class="row">
               <div class="slider">
                 <ul class="slides">
                   <li  v-for="(bird,key) in home.gallery.list" v-bind:key="key">
                     <img :src="getSrc(key)"> <!-- random image -->
                     <div class="caption center-align">
                       <h3>{{key}}</h3>
                       <p>
                         <label class="white-text">
                           <input name="group1" type="radio" v-on:click="birdwatching.background = key" />
                           <span>Select image</span>
                         </label>
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
       <button class="btn col s12 green" v-on:click="updateAbout">Guardar Cambios <i class="material-icons right">save</i> </button>
     </div>
    </div>
    <div id="tours" class="row">
      <div class="col s12">
        <div class="col s12 m6 l4"  v-for="(tour,key) in tours.list" v-bind:key="key">
          <div class="card blue-grey darken-3 white-text z-depth-4">
            <div class="card-content white-text">
              <span class="card-title">{{tour.title}} <i class="material-icons right activator pointer">edit</i></span>
              <div class="row">
                <div class="col s12">
                  <p>{{tour.description}}</p>
                </div>
                <div class="col s12">
                  <ul class="collapsible no-border">
                    <li>
                      <div class="collapsible-header blue-grey darken-3 no-border">
                        <i class="material-icons">group</i>
                        {{tour.group}}
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header blue-grey darken-3 no-border">
                        <i class="material-icons">near_me</i>
                        {{tour.route}}
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header blue-grey darken-3 no-border">
                        <i class="material-icons">monetization_on</i>
                        {{tour.price}}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-reveal blue-grey darken-3 white-text z-depth-4">
              <span class="card-title">Editar<i class="material-icons right">close</i></span>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">title</i>
                  <input :id="key+'title'" type="text" v-model="tour.title" class="validate white-text">
                  <label :for="key+'title'">Title</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">description</i>
                  <textarea :id="key+'description'" class="materialize-textarea white-text" v-model="tour.description"></textarea>
                  <label :for="key+'description'">Description</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">title</i>
                  <input :id="key+'background'" type="text" v-model="tour.background" class="validate white-text">
                  <label :for="key+'background'">Background</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">group</i>
                  <input :id="key+'group'" type="text" v-model="tour.group" class="validate white-text">
                  <label :for="key+'group'">Group</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">near_me</i>
                  <input :id="key+'route'" type="text" v-model="tour.route" class="validate white-text">
                  <label :for="key+'route'">Route</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">monetization_on</i>
                  <input :id="key+'price'" type="text" v-model="tour.price" class="validate white-text">
                  <label :for="key+'price'">Price</label>
                </div>
                <button class="btn col s12 green" v-on:click="updateTour(tour,key)">Guardar Cambios <i class="material-icons right">save</i> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12">
        <button data-target="addtour" class="btn waves-effect waves-light blue-grey col s12 modal-trigger" type="button" name="button">
          Agregar Tour
          <i class="material-icons right">add</i>
        </button>
      </div>
    </div>
    <div id="short-programs" class="row">
      <div class="col s12">
        <div class="col s12 m8 l8">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Codigo del contenido</span>
             <div class="row">
                <div class="col s12">
                  <CodeEditor><textarea class="code-input" v-model="birdwatching.code"></textarea></CodeEditor>
                </div>
             </div>
           </div>
         </div>
       </div>
       <div class="col s12 m4 l4">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title">Background Image</span>
             <div class="row">
               <div class="slider">
                 <ul class="slides">
                   <li  v-for="(bird,key) in home.gallery.list" v-bind:key="key">
                     <img :src="getSrc(key)"> <!-- random image -->
                     <div class="caption center-align">
                       <h3>{{key}}</h3>
                       <p>
                         <label class="white-text">
                           <input name="group1" type="radio" v-on:click="birdwatching.background = key" />
                           <span>Select image</span>
                         </label>
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
       <button class="btn col s12 green" v-on:click="updateAbout">Guardar Cambios <i class="material-icons right">save</i> </button>
     </div>
    </div>
    <div id="disabled" class="row"></div>
    <!-- Modal Structure -->
    <div id="addbird" class="modal">
      <form v-on:submit.prevent="addPicture">
        <div class="modal-content">
          <h4>Add Imagen</h4>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="home.gallery.new.model.name" id="name" type="text" class="validate" required>
              <label for="name">Nombre</label>
            </div>
            <div class="input-field col s12">
              <textarea v-model="home.gallery.new.model.description" id="description" class="materialize-textarea" data-length="250" required></textarea>
              <label for="description">Descripción</label>
            </div>
            <div class="input-field col s12">
              <input v-model="home.gallery.edit.audio" id="audio" type="text" class="validate" required>
              <label for="audio">Audio link xenocanto</label>
            </div>
            <div class="input-field col s12">
              <input v-model="home.gallery.edit.ubication" type="text" class="validate" required>
              <label>Ubicacion</label>
            </div>
            <img class="responsive-img" style="max-width: 150px;" :src="home.upload.img+'?'+home.upload.time" alt="">
            <div class="preloader-wrapper small active" v-if="this.home.gallery.new.loader">
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
                  <div class="btn indigo" :disabled="home.gallery.new.model.name ? null : !null">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen 400x400</span>
                    <input type="file" multiple v-on:change="uploadImg($event,true)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file of 400px">
                  </div>
                </div>
              </span>
            </div>
            <div class="col s12">
              <span class="add">
                <div class="file-field input-field">
                  <div class="btn indigo" :disabled="home.gallery.new.model.name ? null : !null">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen Background</span>
                    <input type="file" multiple v-on:change="uploadImg($event)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file Background">
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button :disabled="home.gallery.new.valid ? false : true" type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>
    <div id="editgallery" class="modal">
      <form v-on:submit.prevent="editPicture">
        <div class="modal-content">
          <h4>Edit Imagen</h4>
          <div class="col s12">
            <div class="input-field col s12">
              <input v-model="home.gallery.edit.name" id="name" type="text" class="validate" required>
              <label for="name">Nombre</label>
            </div>
            <div class="input-field col s12">
              <textarea v-model="home.gallery.edit.description" id="description" class="materialize-textarea" data-length="250" required></textarea>
              <label for="description">Descripción</label>
            </div>
            <div class="input-field col s12">
              <input v-model="home.gallery.edit.audio" id="audio" type="text" class="validate" required>
              <label for="audio">Audio link xenocanto</label>
            </div>
            <div class="input-field col s12">
              <input v-model="home.gallery.edit.ubication" id="name" type="text" class="validate" required>
              <label for="name">Ubicacion</label>
            </div>
            <img class="responsive-img" style="max-width: 150px;" :src="home.upload.img+'?'+home.upload.time" alt="">
            <div class="preloader-wrapper small active" v-if="this.home.gallery.new.loader">
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
                  <div class="btn indigo" :disabled="home.gallery.edit.name ? null : !null">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen 400x400</span>
                    <input type="file" multiple v-on:change="uploadImg($event,true)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file of 400px">
                  </div>
                </div>
              </span>
            </div>
            <div class="col s12">
              <span class="add">
                <div class="file-field input-field">
                  <div class="btn indigo" :disabled="home.gallery.edit.name ? null : !null">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen Background</span>
                    <input type="file" multiple v-on:change="uploadImg($event)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file Background">
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>

    <div id="addgallery" class="modal">
      <form v-on:submit.prevent="addPicture">
        <div class="modal-content">
          <h4>Add Imagen</h4>
          <div class="row">
            <div class="preloader-wrapper small active" v-if="this.home.gallery.new.loader">
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
                  <div class="btn indigo">
                    <i class="material-icons left">cloud_upload</i>
                    <span>Subir Imagen Background</span>
                    <input type="file" multiple v-on:change="uploadImg($event)">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one file Background">
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>
    <div id="addtour" class="modal">
      <!-- v-on:submit.prevent="addPicture"-->
      <form>
        <div class="modal-content">
          <h4>Add Tour</h4>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">map</i>
              <input :id="'key'" type="text" v-model="tours.new.key" class="validate">
              <label :for="'key'">Key</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">title</i>
              <input :id="'title'" type="text" v-model="tours.new.title" class="validate">
              <label :for="'title'">Title</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">description</i>
              <textarea :id="'description'" class="materialize-textarea" v-model="tours.new.description"></textarea>
              <label :for="'description'">Description</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">title</i>
              <input :id="'background'" type="text" v-model="tours.new.background" class="validate">
              <label :for="'background'">Background</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">group</i>
              <input :id="'group'" type="text" v-model="tours.new.group" class="validate">
              <label :for="'group'">Group</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">near_me</i>
              <input :id="'route'" type="text" v-model="tours.new.route" class="validate">
              <label :for="'route'">Route</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">monetization_on</i>
              <input :id="'price'" type="text" v-model="tours.new.price" class="validate">
              <label :for="'price'">Price</label>
            </div>
            <button class="btn col s12 green" v-on:click="updateTour(tours.new,tours.new.key)">Guardar Cambios <i class="material-icons right">save</i> </button>
            <a class="col s12 center modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import CodeEditor from '../components/CodeEditor.vue'

import $ from 'jquery'
import M from 'materialize-css'
import firebase from 'firebase'

export default{
  name:'admin',
  components:{CodeEditor},
  data() {
      return {
        "pages":{
          "list":{}
        },
        "home":{
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
            "edit":{},
            "list":{}
          },
        },
        "gallery":[],
        "about":{
          "code":""
        },
        "staff":{"code":""},
        "birdwatching":{},
        "tours":{"new":{}},
        "users":{
          "list":[],
          "length":0
        },
        "admin":{
          "title": 'Admin',
          "description":'',
          "keywords": ''
        }
      }
  },
  methods: {
    // List Pages
    listPages: function () {
      firebase.database().ref("page").once('value', (snapshot)=> {
        this.pages.list = snapshot.val()
      })
    },
    //Home Methods
    homeGallery: function () {
      firebase.database().ref("page/home/gallery").once('value', (snapshot)=> {
        this.home.gallery.list = snapshot.val()
        setTimeout(function () {
          M.Slider.init(document.querySelectorAll('.slider'))
        }, 2000)
      })
    },
    addPicture: function() {
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/home/gallery/'+this.home.gallery.new.model.name.replace(" ","-"))
      .set(this.home.gallery.new.model, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },
    editPicture: function() {
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/home/gallery/'+this.home.gallery.edit.name.replace(" ","-"))
      .set(this.home.gallery.edit, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Editado :D'})
        }
      })
    },
    deletePicture(name) {
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/home/gallery/'+name)
      .set(null,(error)=> {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          this.deleteImg(name)
          this.deleteImg(name+'-400')
          M.toast({html: 'Eliminado'})
        }
      })
    },
    modalEditPicture:function(key,bird) {
      this.home.gallery.edit = bird
      M.updateTextFields()
    },
    uploadImg(e,size){
      this.home.gallery.new.loader = true
      var data= new FormData()
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img")
      if (size==true) {
        data.append('name', this.home.gallery.new.model.name.replace(" ","-")+"-400")
      }else {
        data.append('name', this.home.gallery.new.model.name.replace(" ","-"))
      }
      $.ajax({
        url: 'https://apiforimgs.000webhostapp.com/api/upload/index.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          try {
            if (data=="ok") {
              M.toast({html: 'Imagen subida 🐦'})
              this.home.gallery.new.valid = true
              this.home.upload.img = "https://apiforimgs.000webhostapp.com/img/"+this.home.gallery.new.model.name.replace(" ","-")+".png"
              this.home.upload.time = new Date().getTime()
              this.home.gallery.new.loader = false
            }
            if (data=="error" || data!="ok") {
              M.toast({html: 'Ups! hubo un error 🐦'})
            }
          } catch (e) {
            M.toast({html: 'Ups, hubo un error 🐦 '})
          }
        },
      });
    },
    listImgs() {
      M.toast({html: 'Cargando...! 🐦'})
      $.ajax({
        url: 'https://apiforimgs.000webhostapp.com/api/list/',
        method: 'GET',
        data:{
          "type":"imgs"
        },
        success: (data)=> {
          this.gallery = JSON.parse(data)
          console.log(JSON.parse(data));
          if (data == "ok") {
            M.toast({html: 'Listo! 🐦'})
          }
        },
        error: function() {
          M.toast({html: 'Error 🐦'})
        }
      });
    },
    deleteImg(name) {
      M.toast({html: 'Cargando...! 🐦'})
      $.ajax({
        url: 'https://apiforimgs.000webhostapp.com/api/delete/',
        method: 'GET',
        data:{
          "type":"delete",
          "name":name+'.png'
        },
        success: (data)=> {
          if (data == "ok") {
            M.toast({html: 'Imagen Eliminada! 🐦'})
          }
        },
        error: function() {
          M.toast({html: 'Error al eliminar Imagen! 🐦'})
        }
      });
    },

    // About Methods
    getAbout(){
      firebase.database().ref("page/about-us").once('value', (snapshot)=> {
        this.about = snapshot.val()
      })
    },
    updateAbout(){
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/about-us/')
      .set(this.about, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },
    // Staff Methods
    getStaff(){
      firebase.database().ref("page/staff").once('value', (snapshot)=> {
        this.staff = snapshot.val()
      })
    },
    updateStaff(){
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/staff/')
      .set(this.staff, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },

    //Tours
    getTours(){
      firebase.database().ref("page/tours/list").once('value', (snapshot)=> {
        this.tours.list = snapshot.val()
      })
    },

    updateTour(tour,key){
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/tours/list/'+key)
      .set(tour, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },

    getUsers: function () {
      firebase.database().ref("users").once('value', (snapshot)=> {
        this.users.list = snapshot.val()
        this.users.length = snapshot.numChildren()
      })
    },
    getSrc(name) {
      if (name!=undefined) {
        if (require('../assets/img/'+ name + ".png") != null) {
          //return 'https://apiforimgs.000webhostapp.com/img/'+ name.replace(" ","-") + "-400.png"
          return require('../assets/img/'+ name + ".png")
        }
      }

    },
  },
  created(){
    this.homeGallery()
    this.getAbout()
    this.getStaff()
    this.listPages()
    this.getTours()
  },
  mounted(){
    const elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
    const elemsmodal = document.querySelectorAll('.modal')
    M.Modal.init(elemsmodal)
    const characterCounter = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(characterCounter)
    this.getUsers()
    const tabs = document.querySelectorAll('.tabs')
    M.Tabs.init(tabs)
    M.Chips.init(document.querySelectorAll('.chips'))
  },
  metaInfo () {
    return {
      title: this.admin.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.admin.description },
        { vmid: 'keywords', name: 'keywords', content: this.admin.keywords }
      ]
    }
  }
}
</script>
<style lag="css">
.pointer{
  cursor: pointer;
}
.capitalize{
  text-transform:capitalize;
}
nav {
  padding:0 10px;
}
.no-border{
  border: 0px solid transparent !important;
}
</style>
