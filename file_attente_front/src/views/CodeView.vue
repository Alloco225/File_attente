<template>
  <div class="mt-4">
    <div class="w-1/2 h-96 bg-white shadow-xl mx-auto">
      <!-- image -->
      <div
        class="w-32 h-32 bg-white mx-auto mt rounded bg-cover bg-[url('https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1')]"
      ></div>
      <h2 class="font-bold text-2xl mt-2">Merci !</h2>
      <h5>Votre soumision a été bien enregistré.</h5>
      <h4 class="font-bold mt-2">Votre code est le :</h4>

      <div class="w-48 bg-green-500 mx-auto mt-4 py-1 rounded">
        <span class="fond-bold text-2xl text-white">{{code}}</span>
      </div>
      <h3 class="mt-2">Veillez attendre votre tour!</h3>
      <!-- lie vers la liste des clients -->
     <router-link to="/clientslists">
           <button class="mx-2 my-2 bg-green-500 transition duration-150 ease-in-out hover:bg-green-700 rounded text-white font-2xl px-6 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
             Consulter la liste des clients en cour
          
             </button>

          </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "CodeView",
  data() {
    return {
      code: "1243BB56"
    };
  }
};
</script>


<style scoped>
</style>