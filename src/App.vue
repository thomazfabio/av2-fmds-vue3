<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <v-row style="height: 50%;">
     
      </v-row>
      <v-row style="height: 50%;">
        <v-col align-self="end" class="pl-5 pr-5">
          <v-btn @click="Logout" color="warning" block>Logout</v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar :height="50">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signOut } from "firebase/auth";

const drawer = ref(false)
const Logout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.')
  }).catch((error) => {
    // An error happened.
  });
}
</script>

<style scoped></style>