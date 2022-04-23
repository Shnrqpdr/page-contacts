<template>
  <v-container class="principal-container">
    <v-flex>
      <router-link to="/" class="voltar-link">
        <v-icon large class="pa-2">mdi-account-plus-outline </v-icon>
        Voltar
      </router-link>
      <div>
        <v-text-field label="Nome" />
        <v-text-field label="Nome" />
        <v-text-field label="Nome" />
        <v-text-field label="Nome" />
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "add-page",

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.principal-container {
  height: 100%;
  width: 100%;
}

.voltar-link {
  width: 100px;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #808080;
}
</style>
