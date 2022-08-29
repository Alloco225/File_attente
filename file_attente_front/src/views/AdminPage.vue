<template>
  <div>
    <div class="sm:px-6 w-full">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
          <p tabindex="0" class=" focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Administration des clients
          </p>
          <div
            class="  py-3  px-4  flex  items-center  text-sm  font-medium  leading-none  text-gray-600  bg-gray-200  hover:bg-gray-300  cursor-pointer  rounded">
            <p>Trie Par:</p>
            <select name="LeaveType"   @change="onChange($event)" class="bg-gray-100  px-2 " v-model="selectValue">
            <option v-for="item in times" :key="item" v-bind:value="item">{{ item.name }}</option>
           </select>
          
          </div>
        </div>
      </div>
         <div class=" flex justify-end items-center mr-8  ">
             
        </div>
      <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 w-screen">
        <div class="flex w-full ">
      <!-- Tab bar -->

    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex justify-between items-center flex-wrap -mb-px">
      <div class="flex">
          <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" v-on:click="toggleTabs(1)"   v-bind:class="{'text-gray-600 bg-white': openTab !== 1,'text-white bg-blue-600':openTab === 1}" >Tous </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page" v-on:click="toggleTabs(2)"  v-bind:class="{'text-gray-600 bg-white': openTab !== 2,'text-white bg-blue-600':openTab === 2}" >En cour</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" v-on:click="toggleTabs(3)"  v-bind:class="{'text-gray-600 bg-white': openTab !== 1,'text-white bg-blue-600':openTab === 3}" >Finis</a>
        </li>
      </div>

            <button  onclick="popuphandler(true)" class="mr-8 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded ">
            <p @click="this.$router.push('/')" class="text-sm font-medium leading-none text-white">
              Ajouter un client 
            </p>
          </button>
       
        
    </ul>
</div>
          <!-- <a class="cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
            All clients
          </a> -->
        </li>
      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-if="openTab == 1" class="" >
            <div class="mt-7 overflow-x-auto w-full">
          <table class="w-full whitespace-nowrap">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
                  <div class="font-semibold text-center">Date de création</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Status</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Detail</div>
                </th>
                  <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 mt-4">
              <tr v-for="(client, index) in clients" :key="index">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center p-2">
                    <div class="font-medium text-gray-800">
                      {{ client.username }}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-xl font-bold">
                    {{ client.randomGeneratedString }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    {{ client.demande.name }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.createdAt }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.status }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div v-if="client.status === 'en cour' ">
                    <button 
                    @click="changeStatus(client._id)"
                    class=" focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none " >Terminer
                  </button>
                  </div>
                  <div class="flex justify-center items-center" v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 text-green-500 font-bold text-xl" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  </div>
                 
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex justify-center items-center">
                    <svg @click="removeClient(client._id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                </td>
             
              </tr>
            </tbody>
          </table>
        </div>
            </div>
            <!-- tab items2 -->
            <div v-if="openTab == 2" >
              <div class="mt-7 overflow-x-auto w-full">
         <table class="w-full whitespace-nowrap">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
                  <div class="font-semibold text-center">Date de création</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Status</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Detail</div>
                </th>
                   <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 mt-4">
              <tr v-for="(client, index) in current" :key="index">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center p-2">
                    <div class="font-medium text-gray-800">
                      {{ client.username }}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-xl font-bold">
                    {{ client.randomGeneratedString }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    {{ client.demande.name }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.createdAt }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.status }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button
                   
                    class=" focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none " >Terminer
                  </button>
                </td>
                    <td class="p-2 whitespace-nowrap">
                    <div class="flex justify-center items-center">
                    <svg @click="removeClient(client._id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
            </div>

            <!-- tab items3 -->
            <div v-if="openTab == 3" >
             <table class="w-full whitespace-nowrap">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
                  <div class="font-semibold text-center">Date de création</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Status</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Detail</div>
                </th>
                   <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 mt-4">
              <tr v-for="(client, index) in endtask" :key="index">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center p-2">
                    <div class="font-medium text-gray-800">
                      {{ client.username }}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-xl font-bold">
                    {{ client.randomGeneratedString }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    {{ client.demande.name }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.createdAt }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{ client.status }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                 <div class="flex justify-center items-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 text-green-500 font-bold text-xl" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  </div>
                </td>
                    <td class="p-2 whitespace-nowrap">
                    <div class="flex justify-center items-center">
                    <svg @click="removeClient(client._id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        
            </div>
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
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      clients: [],
      current:[],
      endtask:[],
      selectValue: 1,
        times: [
        { name: "Normal", id: 1 },
        { name: "Lastes", id: 2 },
      ],
        openTab: 1,

    };
  },
   created() {
    // GET request using fetch with async/await
   this.fetchData();
  },
  mounted() {
    this.onChange(),
    this.currently(),
    this.finish()
    
  },

  methods: {
  toggleTabs(tabNumber){
      this.openTab = tabNumber
      console.log(this.openTab);
    },

     async currently(){
      const response = await fetch("http://localhost:4000/api/currenttask");
      const data = await response.json();
      this.current = data;
      
     },
       async finish(){
      const response = await fetch("http://localhost:4000/api/endtask");
      const data = await response.json();
      this.endtask = data;
      
     },


    async changeStatus(id) {
      await fetch(`http://localhost:4000/api/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-stype": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      const response = await fetch("http://localhost:4000/api/clients");
    const data = await response.json();
    this.clients = data;
    },

    async removeClient(id) {
      await fetch(`http://localhost:4000/api/delete/${id}`, {
        method: "delete",
        headers: {
          "Content-stype": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json({message:"element supprimé"}))
        .catch(err =>console.log(err))
        
        

     
     
    },

    async fetchData(){
    const response = await fetch("http://localhost:4000/api/clients");
    const data = await response.json();
    this.clients = data;
    console.log(this.clients);
     },
     async fetchData2(){
       const response = await fetch("http://localhost:4000/api/lastclients");
       const data = await response.json();
      this.clients = data;
     },
      
        onChange(event) {
            if (this.selectValue.name ===  'Normal') {
               this.fetchData();
            }if (this.selectValue.name === 'Lastes') {
              this.fetchData2();
            }
        },
      
  },
  
};
</script>