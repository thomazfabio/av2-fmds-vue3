<template>
    <v-container>
        <v-row align="center" justify="center" style="height: 80vh;">
            <v-card style="width: 600px;">
                <v-card-title>Criar conta</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Nome" v-model="name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Sobrenome" v-model="lastName"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Email" v-model="email"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Senha" v-model="password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary">Salvar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="error">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
</script>