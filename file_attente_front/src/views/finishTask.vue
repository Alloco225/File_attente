<template>
    <div>
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
          <div class="flex items-center">
            <a class=" rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800">
              <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>Tous</p>
              </div>
            </a>
            <a class=" rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              >
              <div class=" py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                <p>En cours</p>
              </div>
            </a>
            <a href="javascript:void(0)" class=" rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml- ">
              <div class=" py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                <p>Finis</p>
              </div>
            </a>
          </div>
          <button
            onclick="popuphandler(true)"
            class=" focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded ">
            <p @click="this.$router.push('/')" class="text-sm font-medium leading-none text-white">
              Ajouter un client 
            </p>
          </button>
        </div>
        <div class="mt-7 overflow-x-auto">
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
                  <button
                    @click="changeStatus(client._id)"
                    class=" focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none " >Terminer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"finishTask",
    data() {
        return {
            clients:[],
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        //http://localhost:4000/api/endtask
    async fetchData(){
    const response = await fetch("http://localhost:4000/api/clients");
    const data = await response.json();
    this.clients = data;
     },
    },
}
</script>