import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contatos: [],
    contato: {
      id: null,
      nome: "",
      email: "",
      contato: "",
      imagem: "",
    },
  },
  getters: {},
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("contatos")) {
        state.contatos = JSON.parse(localStorage.getItem("contatos"));
      }
    },
    saveContatos(state) {
      const parsed = JSON.stringify(state.contatos);
      localStorage.setItem("contatos", parsed);
    },
    setContato(state, payload) {
      const id = Math.floor(Math.random() * 456132148984165984);
      payload.id = id;
      state.contatos.push(payload);
    },
  },
  actions: {},
  modules: {},
});
