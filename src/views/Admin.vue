<template lang="html">
  <div class="row blue-grey darken-4">
    <nav class="nav-extended blue-grey darken-4">
      <div class="nav-wrapper" style="padding:0%">
        <a href="#" class="brand-logo">Birdwatching administrator</a>
      </div>
      <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#users">Users</a></li>
        <li class="tab"><a href="#gallery" v-on:click="listImgs()">Gallery🖼</a></li>
        <li class="tab"><a href="#birds" class="active">Birds🐦</a></li>
        <li class="tab"><a href="#short-programs" v-on:click="getShortPrograms()">Short Programs🌳</a></li>
        <li class="tab"><a href="#tours" v-on:click="getTours()">Tours🌎</a></li>
        <li class="tab"><a href="#pages" v-on:click="listPages()">Edit Pages</a></li>
        <li class="tab hide"><a href="#about-us" v-on:click="this.getAbout()">About us</a></li>
        <li class="tab"><a href="#staff" v-on:click="getStaff()">Staff</a></li>
        <li class="tab hide"><a href="#birdwatching-colombia">Birdwatching Colombia</a></li>
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
                <td>{{user.message!=null?user.message:null}}</td>
                <td>{{user.date!=null?user.date.substring(0,21):null}}</td>
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
          <h5 class="thin blue-grey-text text-lighten-3 col s6">Birds Gallery Home</h5>
          <button data-target="addgallery" style="margin-top:10px" class="btn waves-effect waves-light blue-grey col s6 modal-trigger" type="button" name="button">
            Add Image
            <i class="material-icons right">add</i>
          </button>
          <div class="col s12 divider"></div>
          <table class="white-text">
            <thead>
              <th>Image</th>
              <th>Name</th>
            </thead>
            <tbody>
              <tr v-for="(i,key) in gallery" v-bind:key="key">
                <td><img class="z-depth-4" style="height:50px;width:auto" :src="'https://imgsapi.000webhostapp.com/img/'+i"></td>
                <td>{{i}}</td>
                <td><a v-on:click="deleteImg(i.replace('.png',''))" class="pointer red-text">delete</a></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    <div id="birds" class="row">
      <div class="row">
        <div class="col s12">
            <h5 class="thin blue-grey-text text-lighten-3 col s6">Birds Gallery Home</h5>
            <button data-target="addbird" style="margin-top:10px" class="btn waves-effect waves-light blue-grey col s6 modal-trigger" type="button" name="button">
              Add image
              <i class="material-icons right">add</i>
            </button>
            <div class="col s12 divider"></div>
            <div class="col s12">
              <table class="white-text">
                <thead>
                  <th>Image</th>
                  <th>Name</th>
                </thead>
                <tbody>
                  <tr v-for="(bird,key) in home.gallery.list" v-bind:key="key">
                    <td><img class="z-depth-4" style="height:50px;width:auto" :src="getSrc(key)"></td>
                    <td class="capitalize">{{bird.name}}</td>
                    <td><a v-on:click="modalEditPicture(key,bird)" class="pointer green-text modal-trigger" data-target="editgallery">edit</a></td>
                    <td><a v-on:click="deletePicture(key)" class="pointer red-text">delete</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col s12">
            </div>
        </div>
      </div>
    </div>
    <div id="short-programs" class="row">
      <div class="col s12">
        <h5 class="thin blue-grey-text text-lighten-3 col s6">Short Programs List</h5>
       <button data-target="addshortprogram" style="margin-top:10px" class="btn waves-effect waves-light blue-grey col s6 modal-trigger" type="button" name="button">
         add short program
         <i class="material-icons right">add</i>
       </button>
        <div class="col s12 divider"></div>
        <div class="col s12 m6 l6" v-for="(short,key) in shortprograms.list" v-bind:key="key">
          <div class="card" style="border-radius:10px;">
            <div class="card-image">
              <img :src="getSrc(short.photo,true)" style="width:100%;border-radius:10px;">
              <span class="card-title">{{short.name}}
                 <a class="waves-effect waves-green btn-flat green-text modal-trigger" v-on:click="editProgram(key);" data-target="editshortprogram">Edit</a><a class="waves-effect waves-red btn-flat red-text"  v-on:click="deleteProgram(key)">Delete</a></span>
            </div>
          </div>
        </div>
     </div>
    </div>
    <div id="tours" class="row">
     <div class="col s12">
       <h5 class="thin blue-grey-text text-lighten-3 col s6">Tours List</h5>
       <button data-target="addtour" style="margin-top:10px" class="btn waves-effect waves-light blue-grey col s6 modal-trigger" type="button" name="button">
         Agregar Tour
         <i class="material-icons right">add</i>
       </button>
       <div class="col s12 divider"></div>
       <table class="white-text">
         <thead>
           <th>Image</th>
           <th>Name</th>
           <th>Route</th>
           <th>Price</th>
         </thead>
         <tbody>
           <tr class="" v-for="(t,i) in tours.list" v-bind:key="i">
             <td><img class="z-depth-4" style="height:50px;width:auto" :src="'https://imgsapi.000webhostapp.com/img/'+t.background+'.png'"></td>
             <td>{{t.title}}</td>
             <td>{{t.route}}</td>
             <td>{{t.price}}</td>
             <td><a v-on:click="modalEditTour(t,i)" class="pointer green-text modal-trigger" data-target="edittour">edit</a></td>
           </tr>
         </tbody>
       </table>
     </div>
    </div>
    <div id="pages" class="row">
      <div class="col s12">
        <table class="white-text">
          <thead>
            <th>Image</th>
            <th>Name</th>
          </thead>
          <tbody>
            <tr v-for="(p,i) in pages.list" v-bind:key="i">
              <td><img class="z-depth-4" style="height:50px;width:auto" :src="getSrc(p.background)"></td>
              <td>{{i}}</td>
              <td><a class="btn-flat green-text waves-effect modal-trigger" :class="i=='home'?'disabled':''" data-target="editpage" v-on:click="getPage(i)">editar</a></td>
            </tr>
          </tbody>
        </table>
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
       <button class="btn col s12 green" v-on:click="updateAbout">Guardar Cambios <i class="material-icons right">save</i> </button>
     </div>
    </div>
    <div id="staff" class="row">
      <div class="col s12">
        <CodeEditor><textarea class="code-input" v-model="staff.code"></textarea></CodeEditor>
        <br>
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
       <button class="btn col s12 green" v-on:click="updateAbout">Guardar Cambios <i class="material-icons right">save</i> </button>
     </div>
    </div>
    <!-- Modal Structure -->
    <div id="addbird" class="modal" style="width:90%;height:90vh">
      <form v-on:submit.prevent="addPicture">
        <div class="modal-content">
          <h4>Add Bird</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input id="add-bird-url" v-model="home.gallery.new.model.url" type="text" class="validate" required>
                <label for="add-bird-url">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="add-bird-name" v-model="home.gallery.new.model.name" type="text" class="validate" required>
                <label for="add-bird-name">Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">photo</i>
                <input id="add-bird-photo" v-model="home.gallery.new.model.photo" type="text" class="validate" required>
                <label for="add-bird-photo">Photo</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">gps_fixed</i>
                <input id="add-bird-ubication" v-model="home.gallery.new.model.ubication" type="text" class="validate" required>
                <label for="add-bird-ubication">Ubicacion</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">map</i>
                <input id="add-bird-map" v-model="home.gallery.new.model.map" type="text" class="validate" required>
                <label for="add-bird-map">Map</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
              <div class="input-field col s12">
                <i class="material-icons prefix">code</i>
                <textarea id="add-bird-description" style="min-height:300px" v-model="home.gallery.new.model.description" class="materialize-textarea" required></textarea>
                <label for="add-bird-description">HTML code</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- :disabled="home.gallery.new.valid ? false : true" -->
          <button type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>
    <div id="editgallery" class="modal" style="width:90%;height:90vh">
      <form v-on:submit.prevent="editPicture">
        <div class="modal-content">
          <h4>Edit bird info</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input id="edit-bird-url" v-model="home.gallery.edit.url" type="text" class="validate" required/>
                <label for="edit-bird-url">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="edit-bird-name" v-model="home.gallery.edit.name" type="text" class="validate" required/>
                <label for="edit-bird-name" class="active">Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">photo</i>
                <input id="edit-bird-photo" v-model="home.gallery.edit.photo" type="text" class="validate" required>
                <label for="edit-bird-photo">Photo</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">gps_fixed</i>
                <input id="edit-bird-ubication" v-model="home.gallery.edit.ubication" type="text" class="validate" required/>
                <label for="edit-bird-ubication" class="active">Ubication</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">map</i>
                <input id="edit-bird-map" v-model="home.gallery.edit.map" type="text" class="validate" required>
                <label for="edit-bird-map" class="active">Url Google Maps</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
            <div class="input-field col s12">
              <textarea id="edit-bird-code" v-model="home.gallery.edit.description" style="min-height:300px" class="materialize-textarea" required></textarea>
              <label for="edit-bird-code" class="active">HMTL code</label>
            </div>
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
    </div>

    <div id="addtour" class="modal" style="width:90%;height:90vh">
      <form>
        <div class="modal-content">
          <h4>Add Tour</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input :id="'key'" type="text" v-model="tours.new.key" class="validate" required>
                <label :for="'key'">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input :id="'title'" type="text" v-model="tours.new.title" class="validate">
                <label :for="'title'">Title</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">photo</i>
                <input :id="'background'" type="text" v-model="tours.new.background" class="validate">
                <label :for="'background'">Background</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">group</i>
                <input :id="'group'" type="text" v-model="tours.new.group" class="validate">
                <label :for="'group'">Group</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">near_me</i>
                <input :id="'route'" type="text" v-model="tours.new.route" class="validate">
                <label :for="'route'">Route</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">monetization_on</i>
                <input :id="'price'" type="text" v-model="tours.new.price" class="validate">
                <label :for="'price'">Price</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
              <div class="input-field">
                <i class="material-icons prefix">code</i>
                <textarea :id="'tour'+'description'" class="materialize-textarea" style="min-height:300px" v-model="tours.new.description"></textarea>
                <label :for="'tour'+'description'">HTML code</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">more</i>
                <input :id="'metatags'" type="text" v-model="tours.new.metatags" class="validate">
                <label :for="'metatags'">Meta tags</label>
              </div>
            </div>
            <button class="btn col s12 green" v-on:click="updateTour(tours.new,tours.new.key)">Guardar Cambios <i class="material-icons right">save</i> </button>
            <a class="col s12 center modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
      </form>
    </div>
    <div id="edittour" class="modal" style="width:90%;height:90vh">
      <div class="modal-content">
        <h4>Edit Tour</h4>
        <div class="row">
          <div class="col s12 m5 l5">
            <div class="input-field">
              <i class="material-icons prefix">link</i>
              <input :id="'edit'+'url'" type="text" v-model="tours.edit.url" class="validate">
              <label class="active" :for="'edit'+'url'">URL</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">title</i>
              <input :id="'edit'+'title'" type="text" v-model="tours.edit.title" class="validate">
              <label class="active" :for="'edit'+'title'">Title</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">title</i>
              <input :id="'edit'+'background'" type="text" v-model="tours.edit.background" class="validate">
              <label class="active" :for="'edit'+'background'">Background</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">group</i>
              <input :id="'edit'+'group'" type="text" v-model="tours.edit.group" class="validate">
              <label class="active" :for="'edit'+'group'">Group</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">near_me</i>
              <input :id="'edit'+'route'" type="text" v-model="tours.edit.route" class="validate">
              <label class="active" :for="'edit'+'route'">Route</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">monetization_on</i>
              <input :id="'edit'+'price'" type="text" v-model="tours.edit.price" class="validate">
              <label class="active" :for="'edit'+'price'">Price</label>
            </div>
          </div>
          <div class="col s12 m7 l7">
            <div class="input-field">
              <i class="material-icons prefix">code</i>
              <textarea :id="'edit'+'description'" class="materialize-textarea" style="min-height:300px" v-model="tours.edit.description"></textarea>
              <label class="active" :for="'edit'+'description'">HTML Code</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">more</i>
              <input :id="'metatags'" type="text" v-model="tours.edit.metatags" class="validate">
              <label :for="'metatags'">Meta tags</label>
            </div>
          </div>
          <button class="btn col s12 green" v-on:click="updateTour(tours.edit,tours.edit.url)">Guardar Cambios <i class="material-icons right">save</i> </button>
        </div>
      </div>
    </div>

    <div id="addshortprogram" class="modal" style="width:90%;height:90vh">
      <form v-on:submit.prevent="addProgram">
        <div class="modal-content">
          <h4>Add Short Program</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input id="short-key" v-model="shortprograms.create.key" type="text" class="validate"  required>
                <label for="short-key">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="short-name" v-model="shortprograms.create.name" type="text" class="validate" required>
                <label for="short-name">Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">map</i>
                <input v-model="shortprograms.create.map" type="text" class="validate" required>
                <label>Google maps url</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">place</i>
                <input v-model="shortprograms.create.location" type="text" class="validate" required>
                <label>Location</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
              <div class="input-field">
                <i class="material-icons prefix">code</i>
                <textarea id="short-description" style="min-height:300px" v-model="shortprograms.create.description" class="materialize-textarea" required></textarea>
                <label for="short-description">HTML code</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- :disabled="home.gallery.new.valid ? false : true" -->
          <button type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>
    <div id="editshortprogram" class="modal" style="width:90%;height:90vh">
      <form v-on:submit.prevent="updateProgram">
        <div class="modal-content">
          <h4>Edit Short Program</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input id="edit-short-key" v-model="shortprograms.edit.key" type="text" class="validate" disabled required>
                <label class="active" for="editname">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="edit-short-name" v-model="shortprograms.edit.name" type="text" class="validate" required>
                <label class="active" for="editname">Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">photo</i>
                <input id="edit-short-photo" v-model="shortprograms.edit.photo" type="text" class="validate" required>
                <label for="edit-short-photo">Photo</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">map</i>
                <input id="edit-short-map" v-model="shortprograms.edit.map" type="text" class="validate" required>
                <label for="edit-short-map">Google maps url</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">place</i>
                <input id="edit-short-location" v-model="shortprograms.edit.location" type="text" class="validate" required>
                <label for="edit-short-location">Location</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
              <div class="input-field col s12">
                <i class="material-icons prefix">code</i>
                <textarea id="edit-short-description" style="min-height:300px" v-model="shortprograms.edit.description" class="materialize-textarea" required></textarea>
                <label class="active" for="editdescription">HTML code</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- :disabled="home.gallery.new.valid ? false : true" -->
          <button type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
      </form>
    </div>

    <div id="editpage" class="modal" style="width:90%;height:100vh">
      <form v-on:submit.prevent="updatePage">
        <div class="modal-content">
          <h4>Edit Page</h4>
          <div class="row">
            <div class="col s12 m5 l5">
              <div class="input-field">
                <i class="material-icons prefix">link</i>
                <input id="edit-page-url" v-model="pages.edit.url" type="text" class="validate" disabled required>
                <label class="active" for="editname">URL</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">photo</i>
                <input id="edit-page-photo" v-model="pages.edit.background" type="text" class="validate" required>
                <label for="edit-page-photo">Photo</label>
              </div>
              <div class="input-field">
                <select id="select-images" class="icons">
                  <option value="" disabled selected>Choose your option</option>
                  <option v-for="(g,i) in gallery" v-bind:key="i" value="" :data-icon="getSrc(g,true)">{{g}}</option>
                </select>
                <label>Images in select</label>
              </div>
            </div>
            <div class="col s12 m7 l7">
              <div class="input-field col s12">
                <i class="material-icons prefix">code</i>
                <textarea id="edit-page-code" style="min-height:300px" v-model="pages.edit.code" class="materialize-textarea" required></textarea>
                <label class="active" for="edit-page-code">HTML code</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- :disabled="home.gallery.new.valid ? false : true" -->
          <button type="submit" class="waves-effect waves-green btn green">Guardar</button>
          <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
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
        "list":{},
        "edit":{}
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
      "tours":{"new":{},"list":{},"edit":{}},
      "shortprograms":{
        "create":{},
        "edit":{},
        "list":{}
      },
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
    getPage:function(n) {
      firebase.database().ref("page").child(n).once('value', (snapshot)=> {
        this.pages.edit=snapshot.val()
        this.pages.edit.url = n
      })
      this.listImgs()
      setTimeout(function(){M.updateTextFields()},1000)
      setTimeout(function(){M.FormSelect.init(document.querySelectorAll('select'))},1000)
    },
    //Home Methods
    homeGallery: function () {
      firebase.database().ref("page/home/gallery").once('value', (snapshot)=> {
        this.home.gallery.list = snapshot.val()
      })
    },
    addPicture: function() {
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/home/gallery/'+this.home.gallery.new.model.url.replace(" ","-"))
      .set(this.home.gallery.new.model, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Saved'})
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
          M.toast({html: 'Eliminado'})
        }
      })
    },

    modalEditPicture:function(key,bird) {
      this.home.gallery.edit = bird
      setTimeout(function () {
        M.updateTextFields()
      }, 1000);
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
        url: 'https://imgsapi.000webhostapp.com/api/upload/index.php',
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
              this.home.upload.img = "https://imgsapi.000webhostapp.com/img/"+this.home.gallery.new.model.name.replace(" ","-")+".png"
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
        url: 'https://imgsapi.000webhostapp.com/api/list/',
        method: 'GET',
        data:{
          "type":"imgs"
        },
        success: (data)=> {
          this.gallery = JSON.parse(data)
          //console.log(JSON.parse(data));
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
        url: 'https://imgsapi.000webhostapp.com/api/delete/',
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
          M.toast({html: 'Saved :D'})
        }
      })
    },

    //Tours
    getTours(){
      M.toast({html: 'Cargando...'})
      firebase.database().ref("page/tours/list").once('value', (snapshot)=> {
        M.toast({html: 'Ok 🐦'})
        this.tours.list = snapshot.val()
      })
    },
    modalEditTour:function(tour,k) {
      this.tours.edit=tour
      this.tours.edit.url=k
      setTimeout(function(){M.updateTextFields()},1000)
    },
    updateTour(tour,key){
      M.toast({html: 'Cargando...'})
      if (key!=null) {
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
      }
    },
    //Short Programs
    addProgram() {
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/shortprograms/list/'+this.shortprograms.create.key)
      .set(this.shortprograms.create, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },
    getShortPrograms(){
      M.toast({html: 'Cargando...'})
      firebase.database().ref("page/shortprograms/list").once('value', (snapshot)=> {
        M.toast({html: 'Ok 🐦'})
        this.shortprograms.list = snapshot.val()
      })
    },
    editProgram(program){
      firebase.database().ref("page/shortprograms/list/"+ program).once('value', (snapshot)=> {
        this.shortprograms.edit = snapshot.val()
      })
      setTimeout(function(){M.updateTextFields()},1000)
    },
    updateProgram(){
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/shortprograms/list/'+this.shortprograms.edit.key)
      .set(this.shortprograms.edit, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Tu Registro fue Exitoso'})
        }
      })
    },
    deleteProgram(k){
      M.toast({html: 'Cargando...'})
      firebase.database().ref('page/shortprograms/list/'+k)
      .set(null, function(error) {
        if (error) {
          // The write failed...
          M.toast({html: 'Ups:'+error})
        } else {
          // Data saved successfully!
          M.toast({html: 'Eliminado'})
        }
      })
    },

    getUsers: function () {
      firebase.database().ref("users").once('value', (snapshot)=> {
        this.users.list = snapshot.val()
        this.users.length = snapshot.numChildren()
      })
    },
    getSrc(name,extension) {
      if (name!=undefined) {
        if (extension) {
          return 'https://imgsapi.000webhostapp.com/img/'+ name
        }
        return 'https://imgsapi.000webhostapp.com/img/'+ name.replace(" ","-") + ".png"
        //if (require('../assets/img/'+ name + ".png") != null) {
          //return 'https://imgsapi.000webhostapp.com//img/'+ name.replace(" ","-") + ".png"
          //return require('../assets/img/'+ name + ".png")
        //}
      }

    },
  },
  created(){
    this.homeGallery()
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
