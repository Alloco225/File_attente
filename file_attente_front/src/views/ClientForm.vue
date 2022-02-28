<template>
  <div class="flex">
    <!-- background left -->
    <div class="w-1/2 h-screen bg-[url('https://i.pinimg.com/originals/20/50/e6/2050e61dde59a5084e11d935fa3cafcb.jpg')]">text</div>

    <div class=" w-1/2  ">
      <!-- user rounded -->
        <div>
                  <div class="bg-gray-200 w-24 h-24 rounded-full m-8 mx-auto"></div>
                  <h3>Nouveau client</h3>

        </div>
      <!-- section2 -->
      <div class=" m-4 p-4">
        <!-- input -->
        <div class="flex justify-center items-center">
          <span class="mr-4"><i class="fa fa-user"></i></span>
          <input class="p-2 w-1/2 border rounded" type="text" placeholder="Nom Client" />
        </div>
        <!-- demande in put -->
        <div class="flex justify-center items-center">
          <span class="mr-4">
            <i class="fas fa-message text-xl"></i>
          </span>

          <select class="p-2 w-1/2 mt-6 border rounded" name="demande" id>
            <option value>Demande 1</option>
            <option value>Demande 2</option>
            <option value>Demande 3</option>
          </select>
        </div>
        <!-- textarea -->
        <div class=" mt-6">
            <div class="flex justify-center "> 
                <span class="mr-4"><i class="fas fa-message text-xl"></i> </span>

          <textarea class="border rounded text-black " name="details" id cols="40" rows="5" placeholder="Details demande"></textarea>
            </div>
        </div>
          <div class=" w-96 mt-6  flex  justify-between mx-auto text-white text-xl  font-bold">
        <div class="w-24 "></div>
              <button class="p-2 px-6 rounded bg-blue-400 mr-4">Valider
                  <span><i class="fas fa-angle-right "></i></span>
                </button>
        </div>
       
   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientForm"
  // data(){
  //     return {
  //         nom,
  //         id_demande,
  //         details
  //     }
  // },
  // methods: {
  //     async createNewClient(){
  //         const dataClient = {nom: this.nom, id_demande :this.id_demande, details: this.details}

  //         // axios

  //     }
  // }
};
</script>
