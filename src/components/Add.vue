<template>
  <v-container class="principal-container">
    <div :onclick="this.$router.push({ path: '/' })">voltar</div>
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
</style>
