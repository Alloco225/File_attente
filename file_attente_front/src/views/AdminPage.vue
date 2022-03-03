<template>
  <div>
    <div class="sm:px-6 w-full">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
          <p
            tabindex="0"
            class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >Administration des clients</p>
          <div
            class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
          >
            <p>Trie Par:</p>
            <select
              aria-label="select"
              class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
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
              class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800"
              href=" javascript:void(0)"
            >
              <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>Tous</p>
              </div>
            </a>
            <a
              class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div
                class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full"
              >
                <p>En cours</p>
              </div>
            </a>
            <a
              class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div
                class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full"
              >
                <p>Finis</p>
              </div>
            </a>
          </div>
          <button
            onclick="popuphandler(true)"
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
          >
            <p class="text-sm font-medium leading-none text-white">Ajouter un client</p>
          </button>
        </div>
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
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
                  <div class="font-semibold text-center">Date de création</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Temps restant</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Detail</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Option</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 mt-4">
              <tr v-for="index in clients" :key="index" :value="index" >
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center p-2">
                    <div class="font-medium text-gray-800">{{index.name}}</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-xl font-bold">{{index.code}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">{{index.demande}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{index.date}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-sm text-center">{{index.tempsRest}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                  >View</button>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button
                    class="focus:ring-2 rounded-md focus:outline-none"
                    onclick="dropdownFunction(this)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      onclick="dropdownFunction(this)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
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
export default {
  name: "AdminPage",
  data() {
    return {
      clients: [
        {
          name: "yacou",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "maxime",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "alber",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "Akz",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "hollande",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "casime",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "koura",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "aziz",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "yacou",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        },
        {
          name: "yacou",
          code: "3445B4G",
          demande: "Assurance",
          date: "12/08/2021",
          tempsRest: "12 minnutes",
          detail: ""
        }
      ]
    };
  }
};
</script>