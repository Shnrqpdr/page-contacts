<template>
  <v-container class="container-listagem">
    <v-list subheader two-line>
      <div class="header">Agenda de Contatos</div>

      <v-list-item v-for="folder in contatos" :key="folder.nome">
        <v-list-item-avatar>
          <v-avatar>
            <img src="https://i.imgur.com/2Bfi6qy.jpg" />
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.nome"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.email"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "listagem-page",

  data: () => ({}),
  computed: {
    ...mapState({
      contatos: (state) => state.contatos,
    }),
  },
};
</script>
<style lang="scss" scoped>
.header {
  font-size: 36px;
  color: #000000;
  margin: 16px 0px 24px 0px;
}
</style>
