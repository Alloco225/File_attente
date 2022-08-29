<template>

  <div class="flex">

    <!-- background left -->
    <div
      class="w-1/2 h-screen bg-cover bg-[url('https://i.pinimg.com/originals/20/50/e6/2050e61dde59a5084e11d935fa3cafcb.jpg')]"
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
      <form @submit.prevent="createClient">
        <div class="m-4 p-4">
        <!-- input -->
        <div class="flex justify-center items-center">
         
          <span class="mr-4">
            <i class="fa fa-user"></i>
          </span>
          <input
            v-model="username"
            class="p-2 w-1/2 border rounded focus:border-green-800"
            type="text"
            placeholder="Nom Client"
          />
        </div>
        <!-- demande input -->
        <div class="text-center mt-6">
          <div class="flex justify-center items-center">
            <span class="mr-4">
              <i class="fas fa-message text-xl"></i>
            </span>

            <!-- p-2 w-1/2 mt-6 border rounded" -->

            <select class="p-2 w-1/2 border rounded" name="choisir sa demande" v-model="selected" id="select">
              
              <option v-for="item in demande" :key="item" v-bind:value="item">{{ item.name }}</option>
            </select>
          </div>
        </div>

        <!-- textarea -->
        <div class="mt-6">
          <div class="flex justify-center">
            <span class="mr-4">
              <i class="fas fa-message text-xl"></i>
            </span>

            <textarea
              v-model="details"
              class="border rounded text-black focus:border-green-800 p-2"
              name="details"
              id
              cols="38"
              rows="5"
              placeholder="Details demande"
            ></textarea>
          </div>
        </div>
        <div class="w-96 mt-6 flex justify-between mx-auto text-white text-xl font-bold">
          <div class="w-24"></div>
          
            <button
              
              class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white font-2xl px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Valider
              <span>
                <i class="fas fa-angle-right"></i>
              </span>
            </button>
         
        </div>
       
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ClientForm",
  data() {
    return {
      username: "",
      demande: [
        { name: "Assurance", id: 1 },
        { name: "Comptabilité", id: 2 },
        { name: "Espace sav", id: 3 },
        { name: "Entreprises", id: 4 }
      ],
      selected: '',
      details: ""
    };
  },
  methods: {
   async createClient(){
   
    if(this.username === "" || this.selected === "" || this.details === ""){
     console.log("les champs sont  vide ");
    }else{

      try {
          let data = await axios.post('http://localhost:4000/api/newclient', {
                username: this.username, demande: this.selected,details:this.details,

                headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type,"
                }

            })

            if (data) {
              console.log(data);
              this.$router.push("/codeview");
            }
            
      } catch (error) {
        console.log(error);
      }
    //  axios.post('http://localhost:4000/api/newclient', {
    //       username: this.username, demande: this.selected,details:this.details,

    //       headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //       "Access-Control-Allow-Headers": "Origin, Content-Type,"
    //        }

    //   })
    //   .then(res =>{
    //      console.log(res);
    //   });
    //   this.$router.push("/codeview");
    }
   }


    // async createNewClient() {
    //   if (this.nom === "" || this.selected === "" || this.details === "") {
    //     console.log("les champs sont  vide ");
        
    //   }
    //    else {
    //     console.log("valider");
    //     const dataClient = {
    //       name: this.name,
    //       demande: this.selected,
    //       details: this.details
    //     };
    //     console.log(dataClient);

    //     this.$router.push({name: 'ClientsLists', params: {data:this.dataClient}});
    //   }

    //   // test

    //   // axios
    // }
  }
};
</script>
