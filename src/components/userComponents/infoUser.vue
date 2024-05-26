<template>
    <v-card>
        <v-card-text>
            <v-avatar rounded="0" size="80" color="grey">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
        </v-card-text>
        <v-card-title class="pt-0"> {{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
        <v-card-subtitle>Id: {{ user.accessToken }}</v-card-subtitle>
        <v-card-actions>
            <v-btn text color="primary">Editar</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
//define store
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const user =  userStore.getUserProfile
</script>