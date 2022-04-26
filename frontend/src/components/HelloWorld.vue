<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-dark optout-header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./logo_gu.png" />
          </q-avatar>
          Grupo Uni.co
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
      <p
        align="center"
        class="textPageWhatsApp"
        v-if="!successResponse && !errorResponse"
      >
        Seja bem-vindo(a) ao nosso Projeto Modelo <br /><br />

        Nossas marcas:<br />
      </p>

      <div align="center">
        <div class="iconBrand">
          <img
            class="buttonBGPuketLogo"
            src="./puket-logo.png"
            alt="Logo Puket"
          />
        </div>
        <div class="iconBrand">
          <img
            class="buttonBGIMGLogo"
            src="./imaginarium_logo.png"
            alt="Logo Imaginarium"
          />
        </div>
        <div class="iconBrand">
          <img class="buttonBGMindLogo" src="./mind_logo.png" alt="Logo Mind" />
        </div>
        <div class="iconBrand">
          <img
            class="buttonBGGutenLogo"
            src="./logo_guten.png"
            alt="Logo Guten"
          />
        </div>
        <div class="iconBrand">
          <img
            class="buttonBGLBLogo"
            src="./logo_lb.jpg"
            alt="Logo Lovebrands"
          />
        </div>
      </div>

      <br />
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        v-if="!successResponse && !errorResponse"
      >
        <p align="center">
          <q-input
            v-model="nameContact"
            type="text"
            label="Nome *"
            class="inputEmailWhats"
            :rules="[(val) => !!val || 'Este campo é obrigatório!']"
          />

          <q-input
            v-model="lastNameContact"
            type="text"
            label="Sobrenome *"
            class="inputEmailWhats"
            :rules="[(val) => !!val || 'Este campo é obrigatório!']"
          />

          <q-input
            v-model="emailContact"
            label="E-mail *"
            class="inputEmailWhats"
            :rules="[
              (val) =>
                (!!val && isValidEmail(val)) || 'Este campo é obrigatório!',
            ]"
          />

          <q-input
            filled
            v-model="cpf"
            label="CPF *"
            mask="###.###.###-##"
            class="inputEmailWhats"
            :rules="[
              (val) =>
                (!!val && validDocument(val)) || 'Este campo é obrigatório!',
            ]"
          />

          <q-input
            v-model="birthDate"
            type="date"
            class="inputEmailWhats"
            label="Data de Nascimento *"
            :rules="[(val) => !!val || 'Este campo é obrigatório!']"
          />
        </p>
        <p class="textPageWhatsApp" align="center">
          <q-btn label="Enviar" type="submit" color="primary" />
        </p>

        <br />
      </q-form>
      <div class="q-pa-md">
        <br />
        <div class="row footerWhatsApp">
          <div class="col-12 col-md footerWhatsAppCol" align="center">
            <div>
              <img
                class="buttonBGPuketFooter"
                src="./puket-logo.png"
                alt="Logo Puket"
              />
            </div>
            <div>
              <br />
              <p>Telefone Contato</p>
              <p>3003 3517</p>
              <p style="font-size: 10px">
                Para cidades do interior utilize o DDD da capital do seu estado
              </p>
            </div>
          </div>

          <div class="col-12 col-md footerWhatsAppCol" align="center">
            <div>
              <img
                class="buttonBGIMGFooter"
                src="./imaginarium_logo.png"
                alt="Logo Imaginarium"
              />
            </div>
            <div>
              <br />
              <p>Telefone Contato</p>
              <p>3003 3515</p>
              <p style="font-size: 10px">
                Para cidades do interior utilize o DDD da capital do seu estado
              </p>
            </div>
          </div>

          <div class="col-12 col-md footerWhatsAppCol" align="center">
            <div>
              <img
                class="buttonBGMindFooter"
                src="./mind_logo.png"
                alt="Logo Mind"
              />
            </div>
            <div>
              <br />
              <p>Telefone Contato</p>
              <p>3003 3516</p>
              <p style="font-size: 10px">
                Para cidades do interior utilize o DDD da capital do seu estado
              </p>
            </div>
          </div>

          <div class="col-12 col-md footerWhatsAppCol" align="center">
            <div>
              <img
                class="buttonBGGutenFooter"
                src="./logo_guten.png"
                alt="Logo Guten"
              />
            </div>
            <div>
              <br />
              <p>Telefone Contato</p>
              <p>3003 3519</p>
              <p style="font-size: 10px">
                Para cidades do interior utilize o DDD da capital do seu estado
              </p>
            </div>
          </div>

          <div class="col-12 col-md footerWhatsAppCol" align="center">
            <div>
              <img
                class="buttonBGLBFooter"
                src="./logo_lb.jpg"
                alt="Logo LoveBrands"
              />
            </div>
            <div>
              <br />
              <p>Telefone Contato</p>
              <p>3003 3517</p>
              <p style="font-size: 10px">
                Para cidades do interior utilize o DDD da capital do seu estado
              </p>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
// @ is an alias to /src

import { ref } from "vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      alert: ref(false),
      msg: ref(""),
      regEmail: ref(""),
      emailContact: ref(null),
      nameContact: ref(null),
      lastNameContact: ref(null),
      cpf: ref(null),
      birthDate: ref(null),
      successResponse: ref(false),
      errorResponse: ref(false),
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Email invalido";
    },

    validDocument(value) {
      var soma = 0;
      var i;
      var resto;
      var inputCPF = value.replace(/\./g, "").replace("-", "");
      if (inputCPF == "00000000000") return false;
      for (i = 1; i <= 9; i++)
        soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(inputCPF.substring(9, 10))) return "CPF inválido";
      soma = 0;
      for (i = 1; i <= 10; i++)
        soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(inputCPF.substring(10, 11))) return "CPF inválido";
      return true;
    },

    onSubmit() {
      // let self = this;
      let dataForm = {
        email: this.emailContact,
        name: this.nameContact,
        lastName: this.lastNameContact,
        cpf: this.cpf,
        birthDate: this.birthDate
      };
     
      console.log(dataForm);

      // let brands = [];

      axios
        .post(process.env.VUE_APP_API_URL + "/", dataForm, {
          headers: {
            // 'Authorization': 'Bearer' + 'Your Bearer Pssword',
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
          self.successResponse = true;
        })
        .catch(function (error) {
          console.log(error);
          self.errorResponse = true;
        });

      return true;
    },
    onReset() {
      return true;
    },
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
