<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" v-if="islogged">
      <!--  -->
      <v-row>
        <v-col>
          <infoUser prop1="text" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mt-4" variant="text" rounded="0">
            <v-col>
              <v-row>
                <v-col cols="6">
                  <v-btn @click="switchTheme = 'Dark'" block color="blue-grey-darken-4" prepend-icon="mdi-weather-night"
                    variant="flat">Dark</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn @click="switchTheme = 'Light'" block color="yellow" prepend-icon="mdi-lightbulb-on-outline"
                    variant="flat">Light</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-btn @click="Logout" color="red-darken-1" block prepend-icon="mdi-logout">Sair</v-btn>
            </v-col>
          </v-card>
        </v-col>

      </v-row>

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

const islogged = computed(() => {
  return userStore.getIsLogged
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