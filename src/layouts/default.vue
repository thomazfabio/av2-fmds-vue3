<template>
  <v-app>
    <v-main style="background: radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
//
</script>

<style>
.v-application__wrap {
  min-height: calc(100vh - 50px) !important;
}
</style>
