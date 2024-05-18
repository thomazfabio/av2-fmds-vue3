<template>
    <v-container class="d-flex justify-center align-center" style="width: 100%; height: 100%; background-color: #79a0e9;"
        fluid>
        <v-row style="max-width: 600px;">
            <v-col cols="12">
                <v-card elevation="8">
                    <v-card-title>
                        Cadastrar-se
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Nome" density="compact" variant="outlined"
                                placeholder="Seu nome"></v-text-field>
                            <v-text-field label="Email" variant="outlined" prepend-inner-icon="mdi-email-outline"
                                density="compact" placeholder="Seu e-mail"></v-text-field>
                            <v-text-field label="Senha" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="Sua senha"
                                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                                @click:append-inner="visible = !visible"></v-text-field>
                            <v-text-field label="Confirme a senha" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="Confirme sua senha"
                                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                                @click:append-inner="visible = !visible"></v-text-field>
                            <v-btn color="success">Criar conta</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>