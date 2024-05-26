<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" v-if="islogged">
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
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="islogged"></v-app-bar-nav-icon>

      <v-app-bar-title>Tarefas pessoais</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { watch } from 'vue';
const userStore = useUserStore()

const islogged = ref(userStore.getIsLogged)

// Observe mudanças no store e atualize islogged
watch(() => userStore.getIsLogged, (newVal) => {
  islogged.value = newVal
})


const drawer = ref(false)
const Logout = userStore.logoutFirebase

</script>

<style scoped></style>