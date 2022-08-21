<template>
  <body>
    <div class="card">
      <!-- quand on es en mode login -->
      <h1 class="card__title" v-if="mode === 'login'">Connexion</h1>
      <!-- quand on es en mode inscription -->
      <h1 class="card__title" v-else>Inscription</h1>

      <p class="card__subtitle" v-if="mode === 'login'">
        Tu n'as pas encore de compte ?
        <!-- Afficher creer un compte  -->
        <span class="card__action" @click="switchToCreateAccount()"
          >Créer un compte</span
        >
      </p>
      <p class="card__subtitle" v-else>
        Tu as deja un compte?
        <!-- sinon afficher se connecter  -->
        <span class="card__action" @click="switchToLogin()">Se connecter</span>>
      </p>
      <div class="form-row">
        <input
          v-model="email"
          class="form-row__input"
          type="text"
          placeholder="Adresse mail"
        />
      </div>
      <div class="form-row" v-if="mode === 'create'">
        <input
          v-model="username"
          class="form-row__input"
          type="text"
          placeholder="nom"
        />
        <input
          v-model="prenom"
          class="form-row__input"
          type="text"
          placeholder="prenom"
        />
      </div>
      <div class="form-row">
        <input
          v-model="password"
          class="form-row__input"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="form-row">Adresse mail et/ou mot de passe invalide</div>
      <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
        Adresse mail déjà utilisée
      </div>
      <div class="form-row">
        <!-- afficher le bouton connection si mode === 'login'  -->
        <button
         @click="connected()"
          class="button"
          :class="{ 'button--disabled': !validatedFields }"
          v-if="mode === 'login'"
        >
          <span>Connexion</span>
        </button>
        <!-- sinon  afficher le bouton Inscription  -->
        <button
          @click="createAccount()"
          class="button"
          :class="{ 'button--disabled': !validatedFields }"
          v-else
        >
          <span>Inscription</span>
        </button>
      </div>
    </div>
  </body>
</template>



<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      mode: "login",
      email: "",
      prenom: "",
      username: "",
      password: "",
    };
  },
  methods: {
    switchToCreateAccount: function () {
      this.mode = "create";
    },
    switchToLogin: function () {
      this.mode = "login";
    },
    async connected() {
      const data = {
        email: this.email,
        password: this.password,
      };
      
       try {
        const url = "http://localhost:4000/api/signin";
        const response = await axios.post(url, data);
        console.log(response);
        this.$router.push("/adminpage");
      } catch (error) {
        console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
      }

    },
     createAccount: async function () {
      //console.log(this.email,this.nom,this.prenom,this.password);
      //on vas maintnant creer nos actions dans le store
      // this.$store.dispatch('createAccount',{
      //     email:this.email,
      //     prenom:this.prenom,
      //     username:this.username,
      //     password:this.password
      // });

      const data = {
        username: this.username,
        email: this.email,
        prenom: this.prenom,
        password: this.password,
      };

      const url = "http://localhost:4000/api/register";
      console.log("dd");
      try {
        const response = await axios.post(url, data);
        console.log(response);
      } catch (error) {
        console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
      }

    },
  },

  computed: {
    validatedFields: function () {
      if (this.mode === "create") {
        if (
          this.email != "" &&
          this.prenom != "" &&
          this.nom != "" &&
          this.password != ""
        ) {
          return true;
        } else {
          return false;
        }
        //si mode different de create
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap");
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
}
img {
  max-width: 100%;
  border-radius: 8px;
}
.card {
  max-width: 100%;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
}
.card__title {
  text-align: center;
  font-weight: 800;
}
.card__subtitle {
  text-align: center;
  color: #666;
  font-weight: 500;
}
.button {
  background: #2196f3;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
}
.card__action {
  color: #2196f3;
  text-decoration: underline;
}
.card__action:hover {
  cursor: pointer;
}
.button:hover {
  cursor: pointer;
  background: #1976d2;
}
.button--disabled {
  background: #cecece;
  color: #ececec;
}
.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
}
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}
.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}
.form-row__input::placeholder {
  color: #aaaaaa;
}
</style>>