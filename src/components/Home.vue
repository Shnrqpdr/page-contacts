<template>
  <v-container class="principal-container">
    <v-dialog v-model="dialogSave" max-width="340">
      <v-card>
        <v-card-title class="text-h5"> Os contatos foram salvos </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="dialogSave = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogAdd" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar contato</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Nome *"
                  required
                  v-model="contato.nome"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Contato *"
                  required
                  v-model="contato.contato"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email *"
                  required
                  v-model="contato.email"
                ></v-text-field>
              </v-col>
              <div class="avatar-div">
                <v-avatar class="avatar-img">
                  <img src="https://i.imgur.com/2Bfi6qy.jpg" />
                </v-avatar>
              </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogAdd = false">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="adicionarContato()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="div-botoes">
      <v-btn
        color="blue-grey"
        class="ma-2 white--text botao-adicionar"
        @click="dialogAdd = true"
      >
        <span style="margin-right: 12px">Adicionar</span>
        <v-icon right dark large> mdi-account-plus-outline </v-icon>
      </v-btn>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text botao-salvar"
        @click="salvar()"
      >
        <span style="margin-right: 12px">Salvar</span>
        <v-icon right dark> mdi-arrow-expand-down </v-icon>
      </v-btn>
    </div>
    <div>
      <listagem-page />
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import ListagemPage from "./Listagem.vue";

export default {
  name: "home-page",
  components: {
    ListagemPage,
  },
  data: () => ({
    contato: {
      id: null,
      nome: "",
      email: "",
      contato: "",
      imagem: "",
    },

    dialogAdd: false,
    dialogSave: false,
  }),
  methods: {
    ...mapMutations(["setContato", "saveContatos"]),
    adicionarContato() {
      console.log(this.contato.nome);
      console.log(this.contato.email);
      console.log(this.contato.contato);
      this.setContato(this.contato);
      this.contato = {};
      this.dialogAdd = false;
    },
    salvar() {
      this.dialogSave = true;
      this.saveContatos();
    },
  },
};
</script>
<style lang="scss" scoped>
.principal-container {
  height: 100%;
  width: 100%;
}

.div-icons-menu {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 40px;
  text-decoration: none;
  color: #808080;
  i {
    position: absolute;
    top: 50%;
    right: 40%;
    transform: translate(0, -50%);
    font-size: 120px !important;
  }
}

.div-icons-menu:hover {
  background-color: #bdb6c2;
  cursor: pointer;
}

.botao-adicionar {
  height: 50px !important;
  width: 240px;
}

.avatar-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .avatar-img {
    height: 120px !important;
    width: 120px !important;
  }
}

.botao-salvar {
  height: 50px !important;
  width: 150px;
}

.div-botoes {
  display: flex;
  justify-content: space-between;
}
</style>
