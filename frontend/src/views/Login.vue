<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-dark optout-header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./logo_gu.png" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="pageWhatsApp">
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Ateção</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-html="msg"> </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <p align="center" class="textPageWhatsApp">
        <img src="./grupo_unico.png" alt="Logo Grupo Uni.co" />
      </p>
      <div align="center" class="textPageWhatsApp">
        <div class="g-sign-in-button" @click="loginWithGoogle">
          <div class="content-wrapper">
            <div class="logo-wrapper">
                <img src="https://developers.google.com/identity/images/g-logo.png" />
            </div>
            <span class="text-container">
              <span> Login com Google </span>
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      
      <q-form
        @submit="login"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="email"
          label="Digite seu e-mail *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor informe seu e-mail']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Digite sua senha *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Por favor informe sua senha'
          ]"
        />

        <div>
          <q-btn label="Enviar" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-page-container>
  </q-layout>
</template>
<script>
// @ is an alias to /src
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from "vue";

export default {
  name: 'Login',
  data() {
    return {
      email: ref(null),
      password: ref(null)
    }
  },
  computed: {
    user: function() {
      // console.log(JSON.parse(localStorage.getItem('authData')));
      return JSON.parse(localStorage.getItem('authData')) || {photoURL : "./avatar_default.png" };
    }
  },
   methods: {
    login() {
      const auth = getAuth();
      // console.log(auth)
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem('authData', JSON.stringify(user))
               
          this.$router.push('/')
          // ...
        })
        .catch((error) => {
          console.log(error)
          localStorage.removeItem('authData');
          // const errorCode = error.code;
          // console.log(errorCode)
          // const errorMessage = error.message;
          // console.log(errorMessage)
          this.$router.push('/login');
        });
    },
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // console.log(token)
          
          // The signed-in user info.
          const user = result.user;
          // console.log(user)
          localStorage.setItem('authData', JSON.stringify(user));
          this.$router.push('/');
          // ...
        }).catch((error) => {
          console.log(error)
          // Handle Errors here.
          // const errorCode = error.code;
          // console.log(errorCode)
          // const errorMessage = error.message;
          // console.log(errorMessage)
          // The email of the user's account used.
          // const email = error.email;
          // console.log(email)
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // console.log(credential)
          localStorage.removeItem('authData');
          this.$router.push('/login');
          // ...
        });
    }
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);    

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      }
    };
  },
};
</script>
<style>
*, *:before, *:after {
    box-sizing: border-box;
}

.g-sign-in-button {
    margin: 10px;
    display: inline-block;
    width: 240px;
    height: 50px;
    background-color: #4285f4;
    color: #fff;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    transition: background-color .218s, border-color .218s, box-shadow .218s;
}

.g-sign-in-button:hover {
    cursor: pointer;
    -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
    box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
}

.g-sign-in-button:active {
    background-color: #3367D6;
    transition: background-color 0.2s;
}

.g-sign-in-button .content-wrapper {
    height: 100%;
    width: 100%;
    border: 1px solid transparent;
}

.g-sign-in-button img {
    width: 18px;
    height: 18px;
}

.g-sign-in-button .logo-wrapper {
    padding: 15px;
    background: #fff;
    width: 58px;
    height: 100%;
    border-radius: 1px;
    display: inline-block;
}

.g-sign-in-button .text-container {
    font-family: Roboto,arial,sans-serif;
    font-weight: 500;
    letter-spacing: .21px;
    font-size: 16px;
    line-height: 48px;
    vertical-align: top;
    border: none;
    display: inline-block;
    text-align: center;
    width: 180px;
}
.q-placeholder {
  padding-top: 43px !important;
}
.iconBrand {
  margin-top: 30px;
}
body {
  font-family: "roboto", sans-serif;
}

.optout-header {
  background-color: #0000001a !important;
}

.footerWhatsApp {
  vertical-align: center;
  height: 200px;
}
.footerWhatsAppCol {
  background-color: #0000001a !important;
  text-align: center;
  vertical-align: center;
}
.buttonBGPuketFooter {
  margin-top: 16px;
  width: 140px;
  height: 50px;
}
.buttonBGIMGFooter {
  margin-top: 26px;
  width: 209px;
  height: 42px;
}
.buttonBGLBFooter {
  margin-top: 26px;
  width: 209px;
  height: 48px;
}
.buttonBGMindFooter {
  margin-top: 15px;
  width: 110px;
  height: 56px;
}
.buttonBGGutenFooter {
  margin-top: 26px;
  width: 209px;
  height: 46px;
}

.buttonBGPuketLogo {
  display: inline-block;
  width: 140px;
  height: 50px;
}
.buttonBGIMGLogo {
  display: inline-block;
  width: 209px;
  height: 42px;
}
.buttonBGMindLogo {
  display: inline-block;
  width: 159px;
  height: 68px;
}
.buttonBGGutenLogo {
  display: inline-block;
  width: 209px;
  height: 42px;
}
.buttonBGLBLogo {
  display: inline-block;
  width: 209px;
  height: 46px;
}
.buttonBGMind {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 159px;
  height: 68px;
}
.buttonBGPuket {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 199px;
  height: 68px;
}
.buttonBGGuten {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 209px;
  height: 42px;
}
.textPageWhatsApp {
  font-size: 0.9em;
}
.pageWhatsApp {
  margin: 30px 30px 30px 30px;
}
.inputEmailWhats {
  max-width: 600px !important;
}
.brandsCheckbox {
  max-width: 350px;
}
.brandsItem {
  margin-top: 30px;
  justify-content: left !important;
  text-align: left;
}
.brandsItemSection {
  justify-content: left !important;
  text-align: left;
}
.reasonTxt {
  max-width: 600px;
}
.reasons {
  max-width: 600px;
  text-align: left !important;
}
</style>