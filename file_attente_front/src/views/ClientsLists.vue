<template>
  <div>
    <!-- component -->
    <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Clients en cours</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
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
                      <div class="font-semibold text-center">temps restant</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100 mt-4">
                  <tr v-for="item in clients" :key="item" v-bind:value="item" class="" >
                    <td  class="p-2 whitespace-nowrap ">
                      <div class="flex items-center  p-2">
                        <div class="font-medium text-gray-800">{{item.name}}</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-xl font-bold">{{item.code}}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">{{item.demande}}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">{{item.tempsRest}}</div>
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
export default {
  name: "ClientsLists",

  data() {
    return {
      clients: [
        {
          name: "yacou",
          code: "1234BR",
          demande: "Comptabilité",
          tempsRest: "12 minutes"
        },
        {
          name: "Eric ",
          code: "1234BR",
          demande: "Assurance",
          tempsRest: "12 minutes"
        },
        {
          name: "Rober",
          code: "1234BR",
          demande: "Administration",
          tempsRest: "12 minutes"
        },
        {
          name: "yacou",
          code: "1234BR",
          demande: "Assurance",
          tempsRest: "12 minutes"
        },
        {
          name: "Yves",
          code: "1234BR",
          demande: "Comptabilité",
          tempsRest: "15 minutes"
        }
      ]
    };
  }
};
</script>