<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" v-if="islogged">
      <!--  -->
      <v-container style="height: 50%;">
        <v-switch class="d-flex align-center justify-start mr-4" true-value="Dark" false-value="Light" color="purple"
          :label="`Tema: ${switchTheme.toString()}`" v-model="switchTheme"></v-switch>
        <v-btn color="primary" block>
          <v-icon>mdi-home</v-icon>
          <span>Perfil</span>
        </v-btn>
        
        <v-btn color="primary" block>
          <v-icon>mdi-work</v-icon>
          <span>Tarefas</span>
        </v-btn>
      </v-container>
      <v-container class="d-flex" style="height: 50%;">
        <v-col align-self="end">
          <v-btn @click="Logout" color="red-darken-1" block>Logout</v-btn>
        </v-col>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar :height="50">
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="islogged"></v-app-bar-nav-icon>

      <v-app-bar-title>Tarefas pessoais</v-app-bar-title>
      <v-spacer></v-spacer>
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
import { useTheme } from 'vuetify'
const userStore = useUserStore()

const islogged = ref(userStore.getIsLogged)

// Observe mudanças no store e atualize islogged
watch(() => userStore.getIsLogged, (newVal) => {
  islogged.value = newVal
})
const drawer = ref(false)
const Logout = userStore.logoutFirebase

//ajustando thema vuetufy
const theme = useTheme()
const switchTheme = ref('Dark')

watch(switchTheme, () => {
  if (switchTheme.value == 'Dark') {
    theme.global.name.value = 'dark'
  }
  if (switchTheme.value == 'Light') {
    theme.global.name.value = 'light'
  }
})
</script>

<style scoped></style>