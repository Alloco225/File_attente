<template>
  <div>
    <!-- component -->
    <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <router-link to="/login">    
      <button class="mt-4 object-none object-right-top bg-blue-600 text-white font-bold px-4 py-1 animate-bounce rounded " >clic here to adminpage</button>
      </router-link>
      <div class="  flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="overflow-auto   w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 h-2/3">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Clients en cours</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="overflow-auto table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Nom</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Code clients</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Demande</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center">En cour</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100 mt-4">
                  <tr v-for="(client ,index) in clients" :key="index"  >
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center p-2">
                        <div class="font-medium text-gray-800">{{client.username}}</div>
                      </div>
                    </td>
                      <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-xl font-bold">{{client.randomGeneratedString}}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-xl font-bold">{{client.demande.name}}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-center font-medium text-green-500">{{client.status}}</div>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ClientsLists",

  data() {  
    return {
      clients: [
       
        // {
        //   name: "",
        //   detail: "",
        //   demande: "",
         
        // },
      ],
      //dataClients:[]
    };
  },
  created(){
   //this.dataClients  =this.clients.push( this.$route.params.data);
    // console.log(this.dataClients);
   
   // console.log(this.clients);
    // if(this.clients === null){
    //    this.clients.push(this.$route.params.data)

    // }else {
    //   console.log("errer");
    // }
    this.getClients();

  },
  methods: {
   async  getClients(){
      await axios.get('http://localhost:4000/api/currenttask'
          
       )
       .then(res =>{
         this.clients= res.data;
         console.log("===> api",this.clients);
       })

     },
     
  },
};
</script>

// recuperation des donnés du formulaire 
*  a- creer la route 
* b- ajouter les donner des diffferent chanps comme paramettre de la route 
* c-aficher la liste de donne de la route dans un tableau
d-Ajouter les donneés dans le tabbleaux existent