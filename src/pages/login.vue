<template>
    <v-container class="d-flex justify-center align-center" style="width: 100%; height: 100%;"
        fluid>
        <v-row style="max-width: 400px;">
            <v-col cols="12">
                <v-card elevation="8">
                    <v-card-title class="text-warning">
                        Login
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email" variant="outlined" prepend-inner-icon="mdi-email-outline"
                                density="compact" placeholder="Seu e-mail"></v-text-field>
                            <v-text-field label="Senha" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="Sua senha"
                                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                                @click:append-inner="visible = !visible"></v-text-field>
                            <v-row>
                                <v-col>
                                    <v-btn color="primary" block>Entrar</v-btn>
                                </v-col>
                            </v-row>

                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <RouterLink to="/createAccount">
                            <v-btn text color="primary">Criar conta</v-btn>
                        </RouterLink>
                        <v-spacer/>
                        <RouterLink to="/">
                            <v-btn text color="primary">Home</v-btn>
                        </RouterLink>
                       
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const visible = ref(false)
</script>