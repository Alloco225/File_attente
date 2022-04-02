<template>
  <div>
    <div class="sm:px-6 w-full">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            "
          >
            Administration des clients
          </p>
          <div
            class="
              py-3
              px-4
              flex
              items-center
              text-sm
              font-medium
              leading-none
              text-gray-600
              bg-gray-200
              hover:bg-gray-300
              cursor-pointer
              rounded
            "
          >
            <p>Trie Par:</p>
            <select
              aria-label="select"
              class="
                focus:text-indigo-600 focus:outline-none
                bg-transparent
                ml-1
              "
            >
              <option class="text-sm text-indigo-800">Latest</option>
              <option class="text-sm text-indigo-800">Oldest</option>
              <option class="text-sm text-indigo-800">Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
          <div class="flex items-center">
            <a
              class="
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:bg-indigo-50
                focus:ring-indigo-800
              "
              href=" javascript:void(0)"
            >
              <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>Tous</p>
              </div>
            </a>
            <a
              class="
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:bg-indigo-50
                focus:ring-indigo-800
                ml-4
                sm:ml-8
              "
              href="javascript:void(0)"
            >
              <div
                class="
                  py-2
                  px-8
                  text-gray-600
                  hover:text-indigo-700 hover:bg-indigo-100
                  rounded-full
                "
              >
                <p>En cours</p>
              </div>
            </a>
            <a
              class="
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:bg-indigo-50
                focus:ring-indigo-800
                ml-4
                sm:ml-8
              "
              href="javascript:void(0)"
            >
              <div
                class="
                  py-2
                  px-8
                  text-gray-600
                  hover:text-indigo-700 hover:bg-indigo-100
                  rounded-full
                "
              >
                <p>Finis</p>
              </div>
            </a>
          </div>
          <button
            onclick="popuphandler(true)"
            class="
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
              mt-4
              sm:mt-0
              inline-flex
              items-start
              justify-start
              px-6
              py-3
              bg-indigo-700
              hover:bg-indigo-600
              focus:outline-none
              rounded
            "
          >
            <p class="text-sm font-medium leading-none text-white">
              Ajouter un client
            </p>
          </button>
        </div>
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
            >
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
                  <div class="font-semibold text-center">Temps restant</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Detail</div>
                </th>
               
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 mt-4">
              <tr  v-for="(client ,index) in clients" :key="index"  >
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center p-2">
                    <div class="font-medium text-gray-800">
                      {{client.username}}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-xl font-bold">
                    {{client.randomGeneratedString }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    {{ client.demande.name }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{client.updatedAt}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">sddfsfsf</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button
                    class="
                      focus:ring-2 focus:ring-offset-2 focus:ring-red-300
                      text-sm
                      leading-none
                      text-gray-600
                      py-3
                      px-5
                      bg-gray-100
                      rounded
                      hover:bg-gray-200
                      focus:outline-none
                    "
                  >
                    View
                  </button>
                </td>
           
              </tr>
            </tbody>
          </table>
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
    };
  },
async created() {
  // GET request using fetch with async/await
  const response = await fetch("http://localhost:4000/api/clients");
  const data = await response.json();
  this.clients = data;
  console.log(this.clients);
},
  methods: {

  },
};
</script>