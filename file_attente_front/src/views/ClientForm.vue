<template>
  <div class="flex">
    <!-- background left -->
    <div
      class="w-1/2 h-screen bg-[url('https://i.pinimg.com/originals/20/50/e6/2050e61dde59a5084e11d935fa3cafcb.jpg')]"
    >text</div>

    <div class="w-1/2">
      <!-- user rounded -->
      <div>
        <div
          class="bg-gray-200 w-24 h-24 rounded-full m-8 mx-auto flex justify-center items-center"
        >
          <span>
            <i class="fas fa-user text-3xl"></i>
          </span>
        </div>
        <h3>Nouveau client</h3>
      </div>
      <!-- section2 -->
      <div class="m-4 p-4">
        <!-- input -->
        <div class="flex justify-center items-center">
          <span class="mr-4">
            <i class="fa fa-user"></i>
          </span>
          <input
            v-model="nom"
            class="p-2 w-1/2 border rounded focus:border-green-800"
            type="text"
            placeholder="Nom Client"
          />
        </div>
        <!-- demande in put -->
        <div class="text-center mt-6">
           <div class="flex justify-center items-center ">
          <span class="mr-4">
            <i class="fas fa-message text-xl"></i>
          </span>

          <!-- p-2 w-1/2 mt-6 border rounded" -->
          
          <select class="p-2 w-1/2 border rounded" name="choisir sa demande"    v-model="selected">
            <option v-for="item in demandes" :key="item" v-bind:value="item" >{{ item.name }}</option>
          </select>
        </div>
        </div>
   
       
        <!-- textarea -->
        <div class="mt-6">
          <div class="flex justify-center">
            <span class="mr-4">
              <i class="fas fa-message text-xl"></i>
            </span>

            <textarea v-model="details"
              class="border rounded text-black"
              name="details"
              id
              cols="40"
              rows="5"
              placeholder="Details demande"
            ></textarea>
          </div>
        </div>
        <div class="w-96 mt-6 flex justify-between mx-auto text-white text-xl font-bold">
          <div class="w-24"></div>
          <router-link to="/codeview">
           <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white font-2xl px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
             Valider
             <span>
               <i class="fas fa-angle-right"></i>
             </span>
             </button>

          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientForm",
  data() {
    return {
      nom: "",
      demandes: [
        { name: "Assurance",id:1},
        { name: "Comptabilité",id:2},
        { name: "Espace sav",id:3 },
        { name: "Entreprises",id:4 }
      ],
      selected: 2,
      details: ""
    };
  },
  methods: {
    async createNewClient() {
      const dataClient = {
        nom: this.nom,
        id_demande: this.id_demande,
        details: this.details
      };
      // test

      // axios
    }
  }
};
</script>
