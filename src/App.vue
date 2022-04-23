<template>
  <v-app>
    <v-app-bar app color="blue-grey" dark>
      <div class="d-flex align-center">
        <v-avatar>
          <img src="https://i.imgur.com/2Bfi6qy.jpg" alt="John" />
        </v-avatar>

        <div class="title">Agenda de Contatos</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Shnrqpdr/page-contacts"
        target="_blank"
        text
      >
        <span class="mr-2">Repositório</span>
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    this.initialiseStore();
  },
  methods: {
    ...mapMutations(["initialiseStore"]),
  },
};
</script>
<style scoped>
.title {
  font-size: 26px;
  margin-left: 20px;
  line-height: 22px !important;
}
</style>
