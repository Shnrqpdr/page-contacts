<template>
  <v-container class="principal-container">
    <div class="div-icons-menu">
      <v-icon>mdi-account-plus-outline</v-icon>
      <span>Adicionar novo contato</span>
    </div>
    <div class="div-icons-menu">
      <v-icon>mdi-format-list-bulleted-square</v-icon>
      <span>Listar contatos</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home-page",

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.principal-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div-icons-menu {
  position: relative;
  width: 400px;
  height: 400px;

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
</style>
